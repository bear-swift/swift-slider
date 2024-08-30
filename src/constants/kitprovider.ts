import KitContextType from "@/types/kitprovider"

const DefaultKitContext: KitContextType = {
  kit: null,
  currentProject: null,
  currentProjectDetail: null,
  currentStepIndex: -1,
  currentSubStepIndex: -1,
  completedProjectIds: [],

  isLastProject: () => { return false },
  isLastStepInProject: () => { return false },
  completeKit: () => { },
  completeProject: () => { },
  showError: () => { },

  moveToStep: (id: number) => { },
  setCurrentSubStepIndex: (id: number) => { },
  goToNextSubStep: () => { },
  goToPrevSubStep: () => { },
  loadKit: async (kid: string) => { },
  loadProject: async (pid: string) => { },
  seeFullCode: () => { }
}

export default DefaultKitContext;