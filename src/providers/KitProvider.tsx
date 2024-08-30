'use client'

import SeeFullCodeModal from "@/components/Modals/SeeFullCode";
import { INSTRUCTION_LIST } from "@/constants/instruction";
import { PROJECT_LIST } from "@/constants/project";
import { IKitItem, IProjectItem } from "@/types";
import { IProjectDetail, Step } from "@/types/instruction";
import { Alert, Snackbar } from "@mui/material";
import { useRouter } from "next/navigation";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";

interface KitContextType {
  kit: IKitItem | null,
  currentProject: IProjectItem | null,
  currentProjectDetail: IProjectDetail | null,
  currentStepIndex: number,
  currentSubStepIndex: number,
  isLastStepInProject: boolean,
  completedProjectIds: string[],

  completeProject: () => void,
  showError: () => void,
  setCurrentSubStepIndex: (id: number) => void,
  goToNextSubStep: () => void,
  goToPrevSubStep: () => void,
  loadKit: (kid: string) => Promise<void>,
  loadProject: (pid: string) => Promise<void>,
  seeFullCode: () => void
}

const defaultValue: KitContextType = {
  kit: null,
  currentProject: null,
  currentProjectDetail: null,
  currentStepIndex: -1,
  currentSubStepIndex: -1,
  isLastStepInProject: false,
  completedProjectIds: [],

  completeProject: () => { },
  showError: () => { },
  setCurrentSubStepIndex: (id: number) => { },
  goToNextSubStep: () => { },
  goToPrevSubStep: () => { },
  loadKit: async (kid: string) => { },
  loadProject: async (pid: string) => { },
  seeFullCode: () => { }
}

export const KitContext = createContext<KitContextType>(defaultValue);


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

  const stepcount = currentProjectDetail?.steps.length || 0;
  const currentStep: Step | undefined = currentProjectDetail?.steps[currentStepIndex];
  const substepcount = currentStep ? currentStep.steps.length + (currentStep.additionalContent && currentStep.additionalContent.length > 0 ? 1 : 0) : 0;
  const [isLastStepInProject, setIsLastStepInProject] = useState<boolean>(false);

  useEffect(() => {
    setIsLastStepInProject((currentStepIndex === (stepcount - 1)) && (currentSubStepIndex === (substepcount - 1) || substepcount === 0));
  }, [currentSubStepIndex, currentStepIndex])

  const loadKit = async (kid: string) => {

  }

  const completeProject = () => {
    if (!currentProjectDetail) return;
    if (!completedProjectIds.includes(currentProjectDetail.id))
      setCompletedProjectIds([...completedProjectIds, currentProjectDetail.id]);
    router.push('/dashboard/Free-kits');
  }

  const loadProject = async (pid: string) => {
    const newProject = PROJECT_LIST.filter(p => p.id === pid)[0];
    const newProjectDetail = INSTRUCTION_LIST.filter(p => p.projectid === pid)[0];
    setCurrentProject(newProject);
    setCurrentProjectDetail(newProjectDetail);

    setCurrentStepIndex(0);
    setCurrentSubStepIndex(0);
    setIsLastStepInProject(false);
  }

  const seeFullCode = () => {
    setSeeFullCodeFlag(true);
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
        console.log('moving prev project')
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
        console.log('completing project');
      }
    }
  }
  return (
    <KitContext.Provider value={{
      kit, currentProject, currentStepIndex, currentSubStepIndex, currentProjectDetail,
      goToPrevSubStep, goToNextSubStep, loadKit, loadProject, seeFullCode, setCurrentSubStepIndex,
      showError: () => setShowErrorFlag(true),
      completeProject,
      isLastStepInProject,
      completedProjectIds
    }}>
      {children}
      <SeeFullCodeModal visible={seeFullCodeFlag} onClose={() => setSeeFullCodeFlag(false)} code={currentProjectDetail?.fullcode || ''} />
      <ErrorMessage show={showErrorFlag} onClose={() => setShowErrorFlag(false)} />
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