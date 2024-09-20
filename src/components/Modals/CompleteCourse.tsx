import Image from "next/image";
import ModalLayout from "./ModalLayout";
import DotShadowRoundedContainer from "../DotShadow";
import { Button, OutlinedInput } from "@mui/material";
import { useKitContext } from "@/providers/KitProvider";
import { useState } from "react";
import CompleteCourseReviewModal from "./CompleteCourseReview";

interface CompleteCourseModalProps {
  visible: boolean;
  onClose: () => void;
}

const CompleteCourseModal = (props: CompleteCourseModalProps) => {
  const { visible, onClose } = props;
  const [showReview, setShowReview] = useState<boolean>(false);

  const onEarnClicked = () => {
    onClose();
    setShowReview(true);
  }

  return (
    <>
      <ModalLayout visible={visible} onClose={onClose} showCloseIcon={false}>
        <div className="flex bg-white px-[40px] py-[30px] gap-[48px] items-center rounded-[20px] max-w-[750px]">
          <Image
            src={`/images/complete-course.png`}
            alt="compelte-course"
            width={255}
            height={279}
            sizes="100vw"
          />

          <DotShadowRoundedContainer activeColor="#F4961D" animate={false}>
            <div className="p-[24px] flex flex-col gap-[12px] bg-[#FEF4E8] text-center">
              <div className="text-my-blue font-cathy-melody text-[20px]">
                {"Congratulations on completing the course!"}
              </div>

              <div>{`Earn 700 points now`}</div>

              <div className="flex items-center justify-center">
                <Button
                  variant="contained"
                  className="!bg-my-orange !rounded-full"
                  onClick={onEarnClicked}
                >
                  <span className="font-cathy-melody"> {"Earn Now"}</span>
                </Button>
              </div>
            </div>
          </DotShadowRoundedContainer>
        </div>
      </ModalLayout>

      <CompleteCourseReviewModal visible={showReview} onClose={() => setShowReview(false)} />
    </>
  );
};

export default CompleteCourseModal;