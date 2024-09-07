"use client";

import MainStepPanel from "@/components/dashboard/MainStepPanel";
import { useEffect, useRef, useState } from "react";
import { Button, Divider, IconButton, styled } from "@mui/material";
import { useKitContext } from "@/providers/KitProvider";
import { Step } from "@/types/instruction";
interface ProjectPageParams {
  params: {
    category: string;
    kit: string;
    project: string;
  };
}

const ProjectPage = ({ params }: ProjectPageParams) => {
  const { category, kit, project: projectid } = params;
  const { startProject, currentProject, currentSubStepIndex, isLastStepInProject, isLastProject, completeProject, showCompleteKit } = useKitContext();
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const { currentProjectDetail, currentStepIndex } = useKitContext();
  const currentStep: Step | undefined = currentProjectDetail?.steps[currentStepIndex];

  useEffect(() => {
    startProject(projectid);
  }, []);

  useEffect(() => {
    if (scrollRef.current)
      scrollRef.current.scrollTop = 46 * currentSubStepIndex; //46 is step height
  }, [currentSubStepIndex]);

  if (!currentProject) return null;

  const onComplete = () => {
    if (isLastProject()) showCompleteKit();
    else{
      completeProject();
    }
  }
  return (
    <>
      <div className="flex gap-[32px]" style={{ height: 'calc(100vh - 80px)' }}>

        <div className="w-2/5 h-full flex flex-col gap-[5px]">
          <div className="font-bold text-[18px] text-[#2c72ff]">{`${currentStep?.title} (${currentStepIndex + 1}/${currentProjectDetail?.steps.length})`}</div>

          <div className="relative flex-grow overflow-auto px-[5px]" ref={scrollRef}>
            <MainStepPanel />
          </div>

          <Button
            variant="contained"
            className={`!text-white !bg-my-orange !font-cathy-melody !text-[16px] !rounded-full !h-[40px] !shadow-none`}
            // disabled={!isLastStepInProject()}
            onClick={onComplete}
          >
            {`Copmlete`}
          </Button>
        </div>

        <Divider orientation="vertical" />

        <div className="w-3/5">
          <iframe src="https://snack.expo.dev/7Wh95KpstGsXitbFTL6Fe" className="w-full h-full"></iframe>
        </div>
      </div >
    </>
  );
};

export default ProjectPage;
