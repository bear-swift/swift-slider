"use client";

import TimeLineMainStepList from "@/components/dashboard/TimeLineMainStepList";
import MainStepPanel from "@/components/dashboard/MainStepPanel";
import { INSTRUCTION_LIST } from "@/constants/instruction";
import { PROJECT_LIST } from "@/constants/project";
import { IProjectItem } from "@/types";
import { IProjectDetail, Step } from "@/types/instruction";

import Image from "next/image";
import { useState } from "react";
import { Alert, Button, Checkbox, FormControlLabel, IconButton, Snackbar, styled } from "@mui/material";
import CongratulationModal from "@/components/Modals/Congrantulation";
import { DotShadowRoundedContainer } from "@/components";
import SeeFullCodeModal from "@/components/Modals/SeeFullCode";
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


const LeftPanel = ({
  project,
  detail,
  currentStep,
}: {
  project: IProjectItem;
  detail: IProjectDetail;
  currentStep: number;
}) => {
  return (
    <div className="w-[300px] min-w-[300px] flex flex-col gap-[16px] p-[16px] rounded-[12px] h-full bg-white " >
      <div className="border border-my-[#DDDDDD] rounded-[12px] p-[8px] flex flex-col gap-[16px]">
        {/* image */}
        <div className="rounded-[12px] h-[200px] min-h-[200px] overflow-hidden items-center justify-center" style={{
          background: `url(${project.image}) center center / cover no-repeat`
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
        height: 'calc(-650px + 100vh)'
      }}>
        <TimeLineMainStepList
          titles={detail?.steps.map((pr) => pr.title) || []}
          currentStep={currentStep}
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
      <ReviewCourseCard />
    </div>
  );
};

const ErrorMessage = ({ show, onClose }: { show: boolean, onClose: () => void }) => {
  return (
    <Snackbar
      open={show}
      autoHideDuration={6000}
      onClose={onClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <Alert onClose={onClose} severity="warning" sx={{ width: '100%' }}>
        Please mark the kit as completed before closing.
      </Alert>
    </Snackbar>
  )
}

const ProjectPage = ({ params }: ProjectPageParams) => {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(2);
  const [seeFullCode, setSeeFullCode] = useState<boolean>(false);
  const [isKitCompleted, setIsKitCompleted] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);

  const { category, kit, project: projectid } = params;

  const project: IProjectItem = PROJECT_LIST.findLast(
    (pr) => pr.id === projectid,
  )!;

  const projectdetail: IProjectDetail = INSTRUCTION_LIST.findLast(
    (pr) => pr.projectid === projectid,
  )!;

  const currentStep: Step = projectdetail.steps[currentStepIndex];
  const stepcount = projectdetail.steps.length;
  const isLastStep: boolean = currentStepIndex === projectdetail.steps.length - 1;
  const isFirstStep: boolean = currentStepIndex === 0;

  const onNextClicked = () => {
    if (currentStepIndex + 1 < stepcount)
      setCurrentStepIndex(currentStepIndex + 1);
    if (isLastStep) {
      if (!isKitCompleted) {
        setShowError(true);
        return;
      } else {

      }
    }
  };

  const onPrevClicked = () => {
    if (currentStepIndex > 0)
      setCurrentStepIndex(currentStepIndex - 1);
  };

  return (
    <>
      <div className="flex gap-[32px]" style={{ height: 'calc(100vh - 80px)' }}>
        <LeftPanel
          project={project}
          detail={projectdetail}
          currentStep={currentStepIndex}
        />
        <div className="relative h-full flex-grow">
          <div className="flex-grow h-full overflow-auto bg-white w-full p-[16px]">
            <MainStepPanel
              currentStep={currentStep}
              currentSubStepIndex={2}
            />
          </div >
          <div className="absolute bottom-0 left-0 w-full bg-white px-[16px] py-[4px] z-[3]">
            {
              isLastStep &&
              <FormControlLabel
                control={<Checkbox checked={isKitCompleted} onChange={(e) => setIsKitCompleted(e.target.checked)} />}
                label="Mark the kit as completed"
                sx={{
                  color: showError ? '#FA467D' : 'inherit',
                  '& .MuiCheckbox-root': {
                    color: showError ? '#FA467D' : 'inherit',
                  },
                }}
              />
            }

            {/* button groups */}
            <div className="flex items-center justify-end gap-[16px]">
              <Button
                variant="outlined"
                className={`!text-[#365ca7] !font-cathy-melody !text-[16px] !rounded-full !h-[40px] !shadow-none !border-[#365ca7]`}
                onClick={() => setSeeFullCode(true)}
              >
                {`See full Code`}
              </Button>
              {
                <Button
                  variant="contained"
                  className={`!text-white !bg-my-orange !font-cathy-melody !text-[16px] !rounded-full !h-[40px] !shadow-none`}
                  onClick={onPrevClicked}
                >
                  {isFirstStep ? `Prev Project` : `Prev Step`}
                </Button>
              }

              <Button
                variant="contained"
                className={`!text-white !bg-my-orange !font-cathy-melody !text-[16px] !rounded-full !h-[40px] !shadow-none`}
                onClick={onNextClicked}
              >
                {isLastStep ? `Next Project` : `Next Step`}
              </Button>
            </div>
          </div>
        </div>
      </div >

      <SeeFullCodeModal visible={seeFullCode} onClose={() => setSeeFullCode(false)} code={projectdetail.fullcode} />
      <ErrorMessage show={showError} onClose={() => setShowError(false)} />
    </>
  );
};

export default ProjectPage;
