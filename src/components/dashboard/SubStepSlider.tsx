'use client'

import { SubStep } from "@/types/instruction";
import Slider, { Settings } from "react-slick";
import StepContentItem from "./StepContentItem";
import { useEffect, useRef, useState } from "react";
import { Button } from "@mui/material";
import DotShadowRoundedContainer from "../DotShadow";

interface SubStepSliderProps {
  steps: SubStep[],
  onChange: (pos: number) => void
}

type TPosition = "first" | 'mid' | "last" | 'alone';

const SubStepItem = ({ step, onPrev, onNext, pos }: { step: SubStep, onPrev: () => void, onNext: () => void, pos: TPosition }) => {

  return (
    <div className="py-[40px] max-w-[600px]">
      <div className="p-[20px] flex flex-col gap-[20px] activestep">
        <div className="font-medium text-[16px]">{step.title}</div>
        <div className="overflow-auto rounded-[12px]" style={{ height: 'calc(100vh - 450px)' }} >
          {
            step.elements.map((item, index) => (
              <StepContentItem item={item} key={index} />
            ))
          }
        </div>

        {
          pos !== 'alone' &&
          <div className="flex justify-end items-center gap-[8px]">
            {
              pos !== 'first' &&
              <Button
                variant="contained"
                className={`!text-white !bg-my-orange !font-cathy-melody !text-[16px] !rounded-full !h-[40px] !shadow-none`}
                onClick={onPrev}
              >
                {`Prev`}
              </Button>
            }
            {
              pos !== 'last' &&
              <Button
                variant="contained"
                className={`!text-white !bg-my-orange !font-cathy-melody !text-[16px] !rounded-full !h-[40px] !shadow-none`}
                onClick={onNext}
              >
                {`Next`}
              </Button>
            }
          </div>
        }
      </div>
    </div>
  )
}


const SubStepSlider = (props: SubStepSliderProps) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const { steps, onChange } = props;
  let sliderRef = useRef<Slider | null>(null);

  useEffect(() => {
    onChange(slideIndex);
  }, [slideIndex]);
  
  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "160px",
    slidesToShow: 1,
    beforeChange: (current: number, next: number) => setSlideIndex(next)
  };

  const onNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }

  }

  const onPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  }

  return (
    <div className="w-[1000px] mx-auto ">
      {
        steps.length === 1 &&
        <div className="flex items-center justify-center">
          <DotShadowRoundedContainer animate={false} activeColor="#F4961D">
            <SubStepItem step={steps[0]} pos="alone" onPrev={onPrev} onNext={onNext} />
          </DotShadowRoundedContainer>
        </div>
      }
      {
        steps.length > 1 &&
        <Slider
          {...settings}
          ref={sliderRef}
        >
          {
            steps.map((step, index) => {
              let pos: TPosition = 'mid';

              if (index === steps.length - 1) pos = 'last';
              if (index === 0) pos = 'first';

              return (
                <SubStepItem step={step} key={index} pos={pos} onPrev={onPrev} onNext={onNext} />
              )
            })
          }
        </Slider>
      }
    </div>
  )
}

export default SubStepSlider;