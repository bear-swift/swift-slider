'use client'

import { SubStep } from "@/types/instruction";
import Slider, { Settings } from "react-slick";
import StepContentItem from "./StepContentItem";
import { useEffect, useRef } from "react";
import { Button } from "@mui/material";
import { useKitContext } from "@/providers/KitProvider";

interface SubStepSliderProps {
  steps: SubStep[],
}

const SubStepItem = ({ step, index }: { step: SubStep, index: number }) => {
  const { goToNextSubStep, goToPrevSubStep, currentSubStepIndex } = useKitContext();
  const isActive = currentSubStepIndex === index;
  return (
    <div className={`py-[10px] flex flex-col gap-[20px]`}>
      {
        step.title &&
        <div className="font-medium text-[16px]">{step.title}</div>
      }
      <div>
        {
          step.elements.map((item, index) => (
            <StepContentItem item={item} key={index} />
          ))
        }
      </div>
      {
        isActive &&
        <div className="flex items-center justify-end gap-[16px] flex-wrap">
          <Button
            variant="contained"
            className={`!text-white !font-cathy-melody !text-[16px] !rounded-full !h-[30px] !shadow-none`}
            onClick={goToPrevSubStep}
          >
            {`Prev`}
          </Button>

          <Button
            variant="contained"
            className={`!text-white !bg-my-orange !font-cathy-melody !text-[16px] !rounded-full !h-[30px] !shadow-none`}
            onClick={goToNextSubStep}
          >
            {`Next`}
          </Button>
        </div>
      }
    </div>
  )
}

const SubStepSlider = (props: SubStepSliderProps) => {
  const { steps } = props;
  const { currentSubStepIndex, setCurrentSubStepIndex } = useKitContext();
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    className: "center",
    centerMode: true,
    slidesToScroll: 1,
    initialSlide: 0,
    // infinite: false,

    slidesToShow: 2,
    centerPadding: "140px",

    responsive: [
      {
        breakpoint: 1920,
        settings: {
          centerPadding: "80px",
        }
      },
      {
        breakpoint: 1680,
        settings: {
          slidesToShow: 1,
          centerPadding: "200px",
        }
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 1,
          centerPadding: "130px",
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
          centerPadding: "100px",
        }
      },
    ],
    beforeChange: (current: number, next: number) => {
      setCurrentSubStepIndex(next);
    }
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(currentSubStepIndex);
    }
  }, [currentSubStepIndex, sliderRef.current]);

  return (
    <div className="mx-auto">
      {
        steps.map((step, index) =>
          <SubStepItem step={step} key={index} index={index} />
        )
      }
    </div>
  )
}

export default SubStepSlider;