"use client";

import MainStepPanel from "@/components/dashboard/MainStepPanel";
import { useEffect, useRef, useState } from "react";
import { Button, Divider, IconButton, containerClasses, styled } from "@mui/material";
import { useKitContext } from "@/providers/KitProvider";
import { Step } from "@/types/instruction";
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import { DndContext, DragEndEvent, DragStartEvent, useDraggable } from '@dnd-kit/core';
import Dragable from "@/components/test/Draggable";
import { Position } from "@/types/util";
import ResizableContainer from "@/components/test/Resizable";
import InstructionsModal from "@/components/Modals/Instructions";
interface ProjectPageParams {
  params: {
    category: string;
    kit: string;
    project: string;
  };
}

const InstructionPanel = ({ projectid }: { projectid: string }) => {

  const {
    currentProject, currentSubStepIndex,
    isLastStepInProject, isLastSubStep,
    showCompleteSectionModal,
    goToNextSubStep, goToPrevSubStep, moveToStep, completeProject,
  } = useKitContext();

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: 'draggable',
  });
  const { currentProjectDetail, currentStepIndex, isLastProject, showCompleteKitModal, showCompleteProjectModal } = useKitContext();

  const stepcount = currentProjectDetail?.steps.length || 0;
  const currentStep: Step | undefined = currentProjectDetail?.steps[currentStepIndex];
  const substepcount = currentStep ? currentStep.steps.length + (currentStep.additionalContent && currentStep.additionalContent.length > 0 ? 1 : 0) : 0;

  useEffect(() => {
    if (scrollRef.current)
      scrollRef.current.scrollTop = 46 * currentSubStepIndex; //46 is step height
  }, [currentSubStepIndex]);

  if (!currentProject) return null;

  const onCompleteClicked = () => {
    showCompleteSectionModal();
  }

  const isStartPosition = currentStepIndex === 0 && currentSubStepIndex === 0;

  const onCompleteProjectClicked = () => {
    if (isLastProject()) {
      showCompleteKitModal();
    } else {
      showCompleteProjectModal();
    }
  }

  return (
    <div className="w-full h-full flex flex-col gap-[5px] p-[12px]">
      {/* top title */}
      <div className="font-bold text-[18px] z-[4] " >
        {currentStep?.title}
      </div>

      <div className="flex gap-[10px] items-center justify-between">
        <span className="text-my-orange text-[12px]">{`${currentStepIndex + 1} /${currentProjectDetail?.steps.length}`}</span>
        {/* step lines */}
        <div className="grid gap-[5px] flex-grow" style={{ gridTemplateColumns: `repeat(${stepcount}, minmax(0, 1fr))` }}>
          {
            Array.from({ length: stepcount }, (_, index) => {
              return (
                <div className={`rounded-full h-[3px] bg-my-orange cursor-pointer ${index <= currentStepIndex ? '' : 'bg-opacity-40'}`} key={index} onClick={() => moveToStep(index)}>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="relative flex-grow overflow-auto px-[5px]" ref={scrollRef}>
        <MainStepPanel />
      </div>

      <div className="grid grid-cols-2 gap-[20px] z-[3]">
        {
          isStartPosition ?
            <div></div> :
            <Button
              variant="outlined"
              className={`!border-my-orange !text-my-orange !font-cathy-melody !text-[16px] !rounded-full !h-[40px] !shadow-none`}
              onClick={goToPrevSubStep}
            >
              <div className="flex items-center gap-[5px]">
                <KeyboardArrowLeftRoundedIcon />
                <div className="leading-3"> {`Previous`}</div>
              </div>
            </Button>
        }
        {
          isLastStepInProject() &&
          <Button
            variant="contained"
            className={`!text-white !bg-my-orange !font-cathy-melody !text-[16px] !rounded-full !h-[40px] !shadow-none ${!isLastStepInProject() ? '!bg-opacity-40' : ''}`}
            onClick={onCompleteProjectClicked}
          >
            {isLastProject() ? `Complete Kit` : `Complete Project`}
          </Button>
        }

        {
          substepcount > 0 &&
          <>
            {
              isLastSubStep() ? <>
                {
                  !isLastStepInProject() &&
                  <Button
                    variant="contained"
                    className={`!text-white !bg-my-orange !font-cathy-melody !text-[16px] !rounded-full !h-[40px] !shadow-none`}
                    onClick={onCompleteClicked}
                  >
                    {`Complete`}
                  </Button>
                }
              </>
                :
                <Button
                  variant="outlined"
                  className={`!border-my-orange !text-my-orange !font-cathy-melody !text-[16px] !rounded-full !h-[40px] !shadow-none !items-center`}
                  onClick={goToNextSubStep}
                >
                  <div className="flex items-center gap-[5px]">
                    <div className="leading-3"> {'Next'}</div>
                    <KeyboardArrowRightRoundedIcon />
                  </div>
                </Button>
            }
          </>
        }
      </div>
    </div>
  );
};

const ProjectPage = ({ params }: ProjectPageParams) => {
  const { project: projectid } = params;
  const { showInstFlag, startProject, closeInstruction } = useKitContext()
  const containterRef = useRef<HTMLDivElement | null>(null);
  const dragRef = useRef<HTMLDivElement | null>(null);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  // State to track if the button is being dragged
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [showTip, setShowTip] = useState(true);

  const [offset, setOffset] = useState<Position>({ x: 450, y: 200 });

  useEffect(() => {
    startProject(projectid);

    return () => {
      //when we go out this page, set project as null
      startProject('');
      closeInstruction();
      setOffset({ x: 450, y: 200 });
    };
  }, []);

  useEffect(() => {
    if (iframeRef.current) {
      iframeRef.current.style.pointerEvents = (isResizing || isDragging) ? 'none' : 'auto';
    }
  }, [iframeRef, isResizing, isDragging]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { over, delta, active, activatorEvent } = event;
    setIsDragging(false);

    if (!containterRef.current || !dragRef.current) return;

    const { width: containerW, height: containerH } = containterRef.current.getBoundingClientRect();
    const { width: itemW, height: itemH } = dragRef.current.getBoundingClientRect();
    const maxX = containerW - itemW, maxH = containerH - itemH;
    const newOffset = {
      x: Math.min(Math.max(offset.x + delta.x, 0), maxX),
      y: Math.min(Math.max(offset.y + delta.y, 0), maxH),
    };

    setOffset(newOffset);
  }

  const handleDragStart = (event: DragStartEvent) => {
    setIsDragging(true);  // Set dragging state to true when dragging starts
  };

  return (
    <>
      <DndContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
        <div className='relative' style={{ height: 'calc(100vh - 90px)' }} ref={containterRef}>
          <iframe src="https://snack.expo.dev/ue0xJsv83LOnDUFWqFwZn" className="w-full h-full" ref={iframeRef}></iframe>
          {
            showInstFlag &&
            <Dragable isDragging={isDragging} offset={offset}>
              <div ref={dragRef}>
                <ResizableContainer onResize={setIsResizing}>
                  <InstructionPanel projectid={projectid} />
                </ResizableContainer>
              </div>
            </Dragable>
          }
        </div>
      </DndContext>

      <InstructionsModal visible={showTip} onClose={() => setShowTip(false)} />
    </>
  )
}
export default ProjectPage;
