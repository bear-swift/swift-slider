"use client";

import TimeLineMainStepList from "@/components/dashboard/TimeLineMainStepList";
import MainStepPanel from "@/components/dashboard/MainStepPanel";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { Alert, Button, Checkbox, FormControlLabel, IconButton, Snackbar, styled } from "@mui/material";
import CongratulationModal from "@/components/Modals/Congrantulation";
import { KitContext } from "@/providers/KitProvider";
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
  const { currentProject: project, currentProjectDetail: detail, startProject: loadProject, currentStepIndex: currentStepIndex, currentSubStepIndex: currentSubStep } = useContext(KitContext);

  return (
    <div className="w-[300px] min-w-[300px] flex flex-col gap-[16px] p-[16px] rounded-[12px] h-full bg-white " >
      <div className="border border-my-[#DDDDDD] rounded-[12px] p-[8px] flex flex-col gap-[16px]">
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
        height: 'calc(-450px + 100vh)'
      }}>
        <TimeLineMainStepList
          titles={detail?.steps.map((pr) => pr.title) || []}
          currentStep={currentStepIndex}
        />
      </div>
      {/* help panel */}
      <div className="bg-[#F4961D] rounded-[12px] bg-opacity-[0.05]">
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
  const [isKitCompleted, setIsKitCompleted] = useState<boolean>(false);
  const { category, kit, project: projectid } = params;
  const { goToNextSubStep, goToPrevSubStep, seeFullCode, startProject: loadProject, isLastStepInProject, isLastProject, showError, completeProject } = useContext(KitContext);

  useEffect(() => {
    loadProject(projectid);
  }, []);

  const onNext = () => {
    if (isLastStepInProject()) {
      if (isLastProject()) {
        if (!isKitCompleted) {
          showError();
          return;
        }
      }
      completeProject();
    } else {
      goToNextSubStep();
    }
  }

  return (
    <>
      <div className="flex gap-[32px]" style={{ height: 'calc(100vh - 80px)' }}>
        <LeftPanel />
        <div className="relative h-full flex-grow">
          <div className="flex-grow h-full overflow-auto bg-white w-full p-[16px]">
            <MainStepPanel />
          </div>

          <div className="absolute bottom-0 left-0 w-full bg-white px-[16px] py-[4px] z-[3]">
            {
              isLastProject() && isLastStepInProject() &&
              <FormControlLabel
                control={<Checkbox checked={isKitCompleted} onChange={(e) => setIsKitCompleted(e.target.checked)} />}
                label="Mark the kit as completed"
              />
            }

            {/* button groups */}
            <div className="flex items-center justify-end gap-[16px]">
              <Button
                variant="outlined"
                className={`!text-[#365ca7] !font-cathy-melody !text-[16px] !rounded-full !h-[40px] !shadow-none !border-[#365ca7]`}
                onClick={seeFullCode}
              >
                {`See full Code`}
              </Button>
              {
                <Button
                  variant="contained"
                  className={`!text-white !bg-my-orange !font-cathy-melody !text-[16px] !rounded-full !h-[40px] !shadow-none`}
                  onClick={goToPrevSubStep}
                >
                  {`Prev Step`}
                </Button>
              }

              <Button
                variant="contained"
                className={`!text-white !bg-my-orange !font-cathy-melody !text-[16px] !rounded-full !h-[40px] !shadow-none`}
                onClick={onNext}
              >
                {isLastStepInProject() ? (isLastProject() ? `Close Kit` : `Complete`) : `Next Step`}
              </Button>
            </div>
          </div>
        </div>
      </div >

    </>
  );
};

export default ProjectPage;
