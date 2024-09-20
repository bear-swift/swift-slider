import { ICategoryItem, IKitItem, IProjectItem } from "@/types";
import KitContextType from "@/types/kitprovider"

const DefaultKitContext: KitContextType = {
  category: null,
  kit: null,
  currentProject: null,
  currentProjectDetail: null,
  currentStepIndex: -1,
  currentSubStepIndex: -1,
  completedProjectIds: [],

  navigateToProject: (p: IProjectItem) => { },
  navigateToKit: (k: IKitItem) => { },
  navigateToCategory: (c: ICategoryItem) => { },

  isLastProject: () => { return false },
  isLastStepInProject: () => { return false },
  isLastSubStep: () => { return false },

  completeKit: () => { },
  completeProject: (toDashboard?: boolean) => { },

  showImageModal: (url: string) => { },
  showCompleteKitModal: () => { },
  showSeeFullCodeModal: () => { },
  showCompleteSectionModal: () => { },
  showCompleteProjectModal: () => { },

  moveToStep: (id: number) => { },
  setCurrentSubStepIndex: (id: number) => { },
  goToNextSubStep: () => { },
  goToPrevSubStep: () => { },

  loadKit: async (kid: string) => { },
  startProject: async (pid: string) => { },

  showInstruction: () => { },
  closeInstruction: () => { },
  showInstFlag: false,
}

export default DefaultKitContext;