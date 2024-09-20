import { Step, SubStep } from "@/types/instruction";
import SubStepSlider from "./SubStepSlider";
import { useKitContext } from "@/providers/KitProvider";

const MainStepPanel = () => {
  const { currentProjectDetail, currentStepIndex } = useKitContext();
  const currentStep: Step | undefined = currentProjectDetail?.steps[currentStepIndex];
  if (!currentStep) return null;

  const additionalStep: SubStep | null = currentStep?.additionalContent ? {
    title: '',
    elements: currentStep?.additionalContent
  } : null;

  const totalStep = additionalStep ? currentStep?.steps.concat([additionalStep]) : currentStep?.steps;

  return (
      <SubStepSlider steps={totalStep || []} key={currentStepIndex} />
  );
};

export default MainStepPanel;
