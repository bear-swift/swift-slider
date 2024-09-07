'use client'

import { SubStep } from "@/types/instruction";
import StepContentItem from "./StepContentItem";
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

      {
        isActive &&
        <>
          <div>
            {
              step.elements.map((item, index) => (
                <StepContentItem item={item} key={index} />
              ))
            }
          </div>

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
        </>
      }
    </div>
  )
}

const SubStepSlider = (props: SubStepSliderProps) => {
  const { steps } = props;
  const { currentSubStepIndex } = useKitContext();
  const substepcount = steps.length;

  return (
    <div className="mx-auto">
      {
        steps.map((step, index) => {
          const linecolor = index < currentSubStepIndex ? '#F4961D' : '#B3B3B3';

          return (
            <div className="relative flex justify-between gap-[16px] overflow-hidden">
              {
                substepcount > 1 &&
                <div className="relative flex h-[46px] items-center z-[2]">
                  <div
                    className={`rounded-full min-w-[18px] min-h-[18px] w-[18px] h-[18px] flex items-center justify-center border bg-white`}
                    style={{ borderColor: linecolor }}
                  >
                    <div
                      className={`rounded-full w-[10px] h-[10px]`} style={{ backgroundColor: linecolor }}
                    ></div>
                  </div>
                </div>
              }

              <div className="flex-grow">
                <SubStepItem step={step} key={index} index={index} />
              </div>

              {index < currentSubStepIndex && (
                <>
                  {index !== 0 && (
                    <div
                      className={`absolute top-[27px] left-[8px] w-[1px] h-full border border-dashed z-[1] translate-y-[-100%]`}
                      style={{ borderColor: linecolor }}
                    ></div>
                  )}
                  <div
                    className={`absolute top-[27px] left-[8px] w-[1px] h-full border border-dashed z-[1]`}
                    style={{ borderColor: linecolor }}
                  ></div>
                </>
              )}

              {currentSubStepIndex === index && substepcount !== 1 && (
                <>
                  {index !== 0 && (
                    <div
                      className={`absolute top-[27px] left-[8px] w-[1px] h-full border border-dashed z-[1] translate-y-[-100%]`}
                      style={{ borderColor: linecolor }}
                    ></div>
                  )}
                  {index !== substepcount - 1 && (
                    <div
                      className={`absolute top-[27px] left-[8px] w-[1px] h-full border border-dashed z-[1]`}
                      style={{ borderColor: linecolor }}
                    ></div>
                  )}
                </>
              )}

              {index > currentSubStepIndex && (
                <>
                  <div
                    className={`absolute top-[27px] left-[8px] w-[1px] h-full border border-dashed z-[1] translate-y-[-100%]`}
                    style={{ borderColor: linecolor }}
                  ></div>
                  {index !== substepcount - 1 && (
                    <div
                      className={`absolute top-[27px] left-[8px] w-[1px] h-full border border-dashed z-[1]`}
                      style={{ borderColor: linecolor }}
                    ></div>
                  )}
                </>
              )}
            </div>
          )
        }
        )
      }
    </div>
  )
}

export default SubStepSlider;