'use client'

import { ImagePopup } from "@/components/Modals";
import SeeFullCodeModal from "@/components/Modals/SeeFullCode";
import { DefaultKitContext } from "@/constants";
import { INSTRUCTION_LIST } from "@/constants/instruction";
import { PROJECT_LIST } from "@/constants/project";
import { IKitItem, IProjectItem, KitContextType } from "@/types";
import { IProjectDetail, Step } from "@/types/instruction";
import { Alert, Snackbar } from "@mui/material";
import { useRouter } from "next/navigation";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";

export const KitContext = createContext<KitContextType>(DefaultKitContext);

const KitContextProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [kit, setKit] = useState<IKitItem | null>(null);
  const [currentProject, setCurrentProject] = useState<IProjectItem | null>(null);
  const [currentProjectDetail, setCurrentProjectDetail] = useState<IProjectDetail | null>(null);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(2);
  const [currentSubStepIndex, setCurrentSubStepIndex] = useState<number>(5);
  const [seeFullCodeFlag, setSeeFullCodeFlag] = useState<boolean>(false);
  const [showErrorFlag, setShowErrorFlag] = useState<boolean>(false);
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
    router.push('/dashboard');
  }

  const completeProject = () => {
    if (!currentProjectDetail || !currentProject) return;

    if (!completedProjectIds.includes(currentProjectDetail.id))
      setCompletedProjectIds([...completedProjectIds, currentProjectDetail.id]);
    const currentProjectIndex = PROJECT_LIST.indexOf(currentProject);
    const nextProjectIndex = currentProjectIndex + 1;

    if (nextProjectIndex >= PROJECT_LIST.length)
      completeKit();
    else {
      const pid = PROJECT_LIST[nextProjectIndex].id;
      loadProject(pid);
    }
  }

  const loadProject = async (pid: string) => {
    const newProject = PROJECT_LIST.filter(p => p.id === pid)[0];
    const newProjectDetail = INSTRUCTION_LIST.filter(p => p.projectid === pid)[0];
    setCurrentProject(newProject);
    setCurrentProjectDetail(newProjectDetail);

    setCurrentStepIndex(0);
    setCurrentSubStepIndex(0);
  }

  const seeFullCode = () => {
    setSeeFullCodeFlag(true);
  }

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
      kit, currentProject, currentStepIndex, currentSubStepIndex, currentProjectDetail,
      loadKit, loadProject, seeFullCode,
      goToPrevSubStep, goToNextSubStep,
      moveToStep,
      setCurrentSubStepIndex,
      showError: () => setShowErrorFlag(true),
      showImage: showImage,
      completeKit,
      completeProject,
      isLastStepInProject,
      isLastProject,
      completedProjectIds
    }}>
      {children}
      <SeeFullCodeModal visible={seeFullCodeFlag} onClose={() => setSeeFullCodeFlag(false)} code={currentProjectDetail?.fullcode || ''} />
      <ErrorMessage show={showErrorFlag} onClose={() => setShowErrorFlag(false)} />
      <ImagePopup open={showImageFlag} onClose={() => setShowImageFlag(false)} image={imageUrl} />
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

export default KitContextProvider;