"use client";

import TimeLineMainStepList from "@/components/dashboard/TimeLineMainStepList";
import MainStepPanel from "@/components/dashboard/MainStepPanel";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Button, Divider, IconButton, styled } from "@mui/material";
import CongratulationModal from "@/components/Modals/Congrantulation";
import { useKitContext } from "@/providers/KitProvider";
import { Step } from "@/types/instruction";
interface ProjectPageParams {
  params: {
    category: string;
    kit: string;
    project: string;
  };
}

const ReviewBox = styled(IconButton)(() => ({
  background: '#fff',
  padding: '8px 10px',
  borderRadius: '8px',
  height: 'auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const ReviewCourseCard = () => {
  const [showCongratulationModal, setShowCongratulationModal] = useState<boolean>(false);

  return (
    <>
      <div className="bg-[#365ca7] bg-opacity-10 rounded-[12px] p-[12px] pt-[8px] flex flex-col gap-[8px]">
        <div className="text-[#365ca7]">Review this course</div>

        <div className="gap-[8px] grid grid-cols-2">
          <ReviewBox onClick={() => setShowCongratulationModal(true)}>
            <Image src="/images/icons/thumbs-up.png" alt="thumbs-up" width={52} height={40} sizes='100vw' />
          </ReviewBox>

          <ReviewBox>
            <Image src="/images/icons/thumbs-down.png" alt="thumbs-up" width={52} height={40} sizes='100vw' />
          </ReviewBox>
        </div>
      </div>

      <CongratulationModal visible={showCongratulationModal} onClose={() => setShowCongratulationModal(false)} />
    </>
  )
}

const LeftPanel = () => {
  const { currentProject: project, currentProjectDetail: detail, currentStepIndex: currentStepIndex } = useKitContext();

  return (
    <div className="w-[280px] min-w-[280px] flex flex-col gap-[16px] rounded-[12px] h-full overflow-hidden" >
      <div className="border border-my-[#DDDDDD] rounded-[12px] p-[8px] flex flex-col gap-[16px] overflow-hidden">
        {/* image */}
        <div className="rounded-[12px] h-[200px] min-h-[200px] overflow-hidden items-center justify-center" style={{
          background: `url(${project?.image}) center center / cover no-repeat`
        }}>
        </div>

        {/* project title and description */}
        <div>
          <div className="text-[18px] font-bold">{project?.title}</div>
          <div className="text-base">{project?.description}</div>
        </div>
      </div>

      {/* main steps */}
      <div className="p-[8px] border border-my-[#DDDDDD] rounded-[12px] overflow-auto" style={{
        height: 'calc(-520px + 100vh)'
      }}>
        <TimeLineMainStepList
          titles={detail?.steps.map((pr) => pr.title) || []}
          currentStep={currentStepIndex}
        />
      </div>
      {/* help panel */}
      <div className="bg-[#F4961D] rounded-[12px] bg-opacity-[0.05] border border-my-[#DDDDDD]">
        <div className="p-[12px]">
          <span>{`If your child needs help please check out `}</span>
          <a>
            <span className="text-my-orange">{`our support page`}</span>
          </a>
        </div>
      </div>
      {/* review card */}
      {/* <ReviewCourseCard /> */}
    </div>
  );
};

const ProjectPage = ({ params }: ProjectPageParams) => {
  const { category, kit, project: projectid } = params;
  const { startProject, currentProject, currentSubStepIndex } = useKitContext();
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const { currentProjectDetail, currentStepIndex } = useKitContext();
  const currentStep: Step | undefined = currentProjectDetail?.steps[currentStepIndex];

  useEffect(() => {
    startProject(projectid);
  }, []);

  useEffect(() => {
    if (scrollRef.current)
      scrollRef.current.scrollTop = 46 * currentSubStepIndex;
  }, [currentSubStepIndex]);

  if (!currentProject) return null;

  return (
    <>
      <div className="flex gap-[32px]" style={{ height: 'calc(100vh - 80px)' }}>

        <div className="w-2/5 h-full flex flex-col">
          <div className="font-bold text-[18px] text-[#2c72ff]">{currentStep?.title}</div>

          <div className="relative flex-grow overflow-auto px-[20px]" ref={scrollRef}>
            <MainStepPanel />
          </div>
        </div>
        
        <Divider orientation="vertical"/>

        <div className="w-3/5">
          <iframe src="https://snack.expo.dev/7Wh95KpstGsXitbFTL6Fe" className="w-full h-full"></iframe>
        </div>
      </div >
    </>
  );
};

export default ProjectPage;
