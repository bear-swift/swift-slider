import { Step, SubStep } from "@/types/instruction";
import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import { KeyboardArrowDownRounded } from "@mui/icons-material";
import StepContentItem from "./StepContentItem";
import SubStepSlider from "./SubStepSlider";

interface MainStepPanelProps {
  currentStep: Step;
  currentSubStepIndex: number;
}


const MainStepPanel = (props: MainStepPanelProps) => {
  const { currentStep, currentSubStepIndex } = props;
  // const [currentSubStepIndex, setCurrentSubStepIndex] = useState<number>(0);
  const substepcount = currentStep.steps.length;
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const position: string = substepcount === 0 ? '' : `(${(currentIndex + 1)}/${substepcount})`;

  useEffect(() => {
    setCurrentIndex(0);
  }, [currentStep])

  const sliderPositionChanged = (pos: number) => {
    setCurrentIndex(pos);
  }

  return (
    <>
      <div className="text-[18px] font-bold pb-[20px]">{`${currentStep.title} ${position}`}</div>
      {/* sub steps */}
      <SubStepSlider steps={currentStep.steps} onChange={sliderPositionChanged} />

      {/* additional contents */}
      {currentStep.additionalContent &&
        currentStep.additionalContent.map((item, index) => (
          <StepContentItem item={item} key={index} />
        ))}

    </>
  );
};

export default MainStepPanel;
