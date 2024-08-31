'use client'

import { CompleteKitModal, ImagePopupModal, SeeFullCodeModal } from "@/components/Modals";
import { DefaultKitContext } from "@/constants";
import { INSTRUCTION_LIST } from "@/constants/instruction";
import { PROJECT_LIST } from "@/constants/project";
import { endSession, startSession } from "@/store/project";
import { ICategoryItem, IKitItem, IProjectItem, KitContextType } from "@/types";
import { IProjectDetail, Step } from "@/types/instruction";
import { Alert, Snackbar } from "@mui/material";
import { useRouter } from "next/navigation";
import { ReactNode, createContext, useContext, useState } from "react";

export const KitContext = createContext<KitContextType>(DefaultKitContext);

const KitContextProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  const [kit, setKit] = useState<IKitItem | null>(null);
  const [category, setCategory] = useState<ICategoryItem | null>(null);
  const [currentProject, setCurrentProject] = useState<IProjectItem | null>(null);
  const [currentProjectDetail, setCurrentProjectDetail] = useState<IProjectDetail | null>(null);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [currentSubStepIndex, setCurrentSubStepIndex] = useState<number>(0);

  const [seeFullCodeFlag, setSeeFullCodeFlag] = useState<boolean>(false);
  const [completeKitFlag, setCompleteKitFlag] = useState<boolean>(false);

  const [completedProjectIds, setCompletedProjectIds] = useState<string[]>([]);
  const [showImageFlag, setShowImageFlag] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string>('');

  const stepcount = currentProjectDetail?.steps.length || 0;
  const currentStep: Step | undefined = currentProjectDetail?.steps[currentStepIndex];
  const substepcount = currentStep ? currentStep.steps.length + (currentStep.additionalContent && currentStep.additionalContent.length > 0 ? 1 : 0) : 0;

  const showImage = (image: string) => {
    setImageUrl(image);
    setShowImageFlag(true);
  }

  const isLastProject = () => {
    if (!currentProject) return false;

    const index = PROJECT_LIST.indexOf(currentProject);
    return (index === PROJECT_LIST.length - 1);
  }

  const isLastStepInProject = () => {
    return (currentStepIndex === (stepcount - 1)) && (currentSubStepIndex === (substepcount - 1) || substepcount === 0);
  }

  const loadKit = async (kid: string) => {

  }

  const completeKit = () => {
    setCompletedProjectIds(PROJECT_LIST.map(p => p.id));
    navigateToDashBoard();
  }

  const navigateToProject = (p: IProjectItem) => {
    if (!p) navigateToDashBoard();

    router.push(`/dashboard/${p.category.replaceAll(" ", "-")}/${p.kit.replaceAll(" ", "-")}/${p.id}`);
  }

  const navigateToKit = (k: IKitItem) => {
    if (!k) navigateToDashBoard();

    router.push(`/dashboard/${k.category.replaceAll(" ", "-")}/${k.title.replaceAll(" ", "-")}`);
  }

  const navigateToCategory = (c: ICategoryItem) => {
    if (!c) navigateToDashBoard();

    router.push(`/dashboard/${c.title.replaceAll(" ", "-")}`);
  }

  const navigateToDashBoard = () => {
    router.push('/dashboard');
  }

  const completeProject = async () => {
    if (!currentProjectDetail || !currentProject) return;

    if (!completedProjectIds.includes(currentProjectDetail.id))
      setCompletedProjectIds([...completedProjectIds, currentProjectDetail.id]);
    const currentProjectIndex = PROJECT_LIST.indexOf(currentProject);
    const nextProjectIndex = currentProjectIndex + 1;

    //ending project or kit
    await endSession();

    if (nextProjectIndex >= PROJECT_LIST.length)
      completeKit();
    else {
      const newProject = PROJECT_LIST[nextProjectIndex];
      navigateToProject(newProject);
    }
  }

  const startProject = async (pid: string) => {
    const newProject = PROJECT_LIST.filter(p => p.id === pid)[0];
    if (!newProject) {
      setCurrentProject(null);
      setCurrentProjectDetail(null);
    } else {
      const newProjectDetail = INSTRUCTION_LIST.filter(p => p.projectid === pid)[0];
      setCurrentProject(newProject);
      setCurrentProjectDetail(newProjectDetail);

      startSession(newProject.title);
    }

    setCurrentStepIndex(0);
    setCurrentSubStepIndex(0);
  }

  const showSeeFullCode = () => setSeeFullCodeFlag(true);
  const showCompleteKit = () => setCompleteKitFlag(true);

  const moveToStep = (index: number) => {
    setCurrentStepIndex(index);
    setCurrentSubStepIndex(0);
  }

  const goToPrevSubStep = () => {
    if (!currentStep || !currentProjectDetail) return;

    const newSubStepIndex = currentSubStepIndex - 1;
    if (newSubStepIndex >= 0) {
      setCurrentSubStepIndex(newSubStepIndex); // go to prev substep
    } else {
      const newStepIndex = currentStepIndex - 1;
      if (newStepIndex >= 0) {
        // goto prev step
        setCurrentSubStepIndex(0);
        setCurrentStepIndex(newStepIndex);
      }
      else {
        //project is completed
      }
    }
  }

  const goToNextSubStep = () => {
    if (!currentStep || !currentProjectDetail) return;
    const newSubStepIndex = currentSubStepIndex + 1;

    if (newSubStepIndex < substepcount) {
      setCurrentSubStepIndex(newSubStepIndex); // go to next substep
    } else {
      const newStepIndex = currentStepIndex + 1;
      if (newStepIndex < stepcount) {
        // goto next step
        setCurrentSubStepIndex(0);
        setCurrentStepIndex(newStepIndex);
      }
      else {
        //project is completed
      }
    }
  }

  return (
    <KitContext.Provider value={{
      category, kit, currentProject, currentStepIndex, currentSubStepIndex, currentProjectDetail, completedProjectIds,
      navigateToCategory, navigateToKit, navigateToProject,
      loadKit, startProject,
      goToPrevSubStep, goToNextSubStep, moveToStep, setCurrentSubStepIndex,
      showImage, showCompleteKit, showSeeFullCode,
      completeKit, completeProject,
      isLastStepInProject, isLastProject,
    }}>
      {children}
      <SeeFullCodeModal visible={seeFullCodeFlag} onClose={() => setSeeFullCodeFlag(false)} code={currentProjectDetail?.fullcode || ''} />
      <ImagePopupModal open={showImageFlag} onClose={() => setShowImageFlag(false)} image={imageUrl} />
      <CompleteKitModal visible={completeKitFlag} onClose={() => setCompleteKitFlag(false)} />
    </KitContext.Provider>
  )
}

const ErrorMessage = ({ show, onClose }: { show: boolean, onClose: () => void }) => {
  return (
    <Snackbar
      open={show}
      autoHideDuration={6000}
      onClose={onClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <Alert onClose={onClose} severity="warning" sx={{ width: '100%' }}>
        Please mark the kit as completed before closing.
      </Alert>
    </Snackbar>
  )
}

// Create a custom hook for consuming the menu context
export const useKitContext = (): KitContextType => {
  const context = useContext(KitContext);
  if (!context) {
    throw new Error("useMenuContext must be used within a MenuProvider");
  }
  return context;
};


export default KitContextProvider;