import { IProjectDetail } from "./instruction";
import { IKitItem } from "./kit";
import { IProjectItem } from "./project";

interface KitContextType {
  kit: IKitItem | null,
  currentProject: IProjectItem | null,
  currentProjectDetail: IProjectDetail | null,
  currentStepIndex: number,
  currentSubStepIndex: number,
  completedProjectIds: string[],

  isLastProject: () => boolean,
  isLastStepInProject: () => boolean,
  completeKit: () => void,
  completeProject: () => void,
  showError: () => void,

  showImage: (url: string) => void,
  moveToStep: (id: number) => void,
  setCurrentSubStepIndex: (id: number) => void,
  goToNextSubStep: () => void,
  goToPrevSubStep: () => void,
  loadKit: (kid: string) => Promise<void>,
  loadProject: (pid: string) => Promise<void>,
  seeFullCode: () => void
}


export default KitContextType;