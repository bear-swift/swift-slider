import { Step, SubStep } from "@/types/instruction";
import SubStepSlider from "./SubStepSlider";
import { useKitContext } from "@/providers/KitProvider";

const MainStepPanel = () => {
  const { currentProjectDetail, startProject: loadProject, currentStepIndex, currentSubStepIndex } = useKitContext();
  const currentStep: Step | undefined = currentProjectDetail?.steps[currentStepIndex];
  if (!currentStep) return null;

  const substepcount = currentStep.steps.length + (currentStep.additionalContent && currentStep.additionalContent.length > 0 ? 1 : 0);
  const position: string = substepcount <= 1 ? '' : `(${(currentSubStepIndex + 1)}/${substepcount})`;

  const additionalStep: SubStep | null = currentStep?.additionalContent ? {
    title: '',
    elements: currentStep?.additionalContent
  } : null;

  const totalStep = additionalStep ? currentStep?.steps.concat([additionalStep]) : currentStep?.steps;

  return (
    <>
      <div className="text-[18px] font-bold pb-[20px]">{`${currentStep?.title} ${position}`}</div>
      {/* sub steps */}
      <SubStepSlider steps={totalStep || []} key={currentStepIndex} />
    </>
  );
};

export default MainStepPanel;
