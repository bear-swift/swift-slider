import { ICategoryItem } from "./category";
import { IProjectDetail } from "./instruction";
import { IKitItem } from "./kit";
import { IProjectItem } from "./project";

interface KitContextType {
  category: ICategoryItem | null,
  kit: IKitItem | null,
  currentProject: IProjectItem | null,
  currentProjectDetail: IProjectDetail | null,
  currentStepIndex: number,
  currentSubStepIndex: number,
  completedProjectIds: string[],

  navigateToProject: (p: IProjectItem) => void,
  navigateToKit: (k: IKitItem) => void,
  navigateToCategory: (c: ICategoryItem) => void,

  isLastProject: () => boolean,
  isLastStepInProject: () => boolean,
  isLastSubStep: () => boolean,

  completeKit: () => void,
  completeProject: (completeProject?: boolean) => void,

  showCompleteKitModal: () => void,
  showImageModal: (url: string) => void,
  showSeeFullCodeModal: () => void
  showCompleteSectionModal: () => void,
  showCompleteProjectModal: () => void,

  showInstFlag: boolean,
  showInstruction: () => void,
  closeInstruction: () => void,

  moveToStep: (id: number) => void,
  setCurrentSubStepIndex: (id: number) => void,
  goToNextSubStep: () => void,
  goToPrevSubStep: () => void,

  loadKit: (kid: string) => Promise<void>,
  startProject: (pid: string) => Promise<void>,
}


export default KitContextType;