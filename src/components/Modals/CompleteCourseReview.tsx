import Image from "next/image";
import ModalLayout from "./ModalLayout";
import DotShadowRoundedContainer from "../DotShadow";
import { Button, OutlinedInput } from "@mui/material";
import { useKitContext } from "@/providers/KitProvider";

interface CompleteCourseReviewModalProps {
  visible: boolean;
  onClose: () => void;
}

const CompleteCourseReviewModal = (props: CompleteCourseReviewModalProps) => {
  const { visible, onClose } = props;

  const { completeKit, completeProject } = useKitContext();

  const onOkClicked = () => {
    onClose();
    completeProject();
  }

  return (
    <ModalLayout visible={visible} onClose={onClose}>
      <div className="flex bg-white px-[40px] py-[30px] gap-[48px] items-center rounded-[20px] max-w-[750px]">
        <Image
          src={`/images/complete-course-review.png`}
          alt="character"
          width={255}
          height={279}
          sizes="100vw"
        />

        <DotShadowRoundedContainer activeColor="#F4961D" animate={false}>
          <div className="p-[24px] flex flex-col gap-[12px] bg-[#FEF4E8]">
            <div className="text-my-blue font-cathy-melody text-[20px]">
              {"Congratulations on completing the course!"}
            </div>

            <div className="p-[12px] pt-[8px] rounded-[12px] bg-[#365CA7] bg-opacity-10 flex flex-col gap-[12px]">
              <div className="text-my-blue font-bold">{'Review this course'}</div>
              <div className="grid grid-cols-2 gap-[8px]">
                <div className="rounded-[8px] bg-white px-[10px] py-[8px] flex items-center justify-center">
                  <Image
                    src={`/images/icons/thumbs-up.png`}
                    alt="thumb-up"
                    width={52}
                    height={40}
                    sizes="100vw"
                  />
                </div>

                <div className="rounded-[8px] bg-white px-[10px] py-[8px] flex items-center justify-center">
                  <Image
                    src={`/images/icons/thumbs-down.png`}
                    alt="thumb-down"
                    width={52}
                    height={40}
                    sizes="100vw"
                  />
                </div>
              </div>
            </div>

            <OutlinedInput
              minRows={3}
              maxRows={3}
              multiline
              fullWidth
              placeholder={"Leave your review"}
              className="!rounded-[12px] !text-[14px] !px-[16px] !py-[8px] !bg-white"
            />

            <div className="flex items-center">
              <Button
                variant="contained"
                className="!bg-my-orange !rounded-full"
                onClick={onOkClicked}
              >
                <span className="font-cathy-melody"> {"Submit"}</span>
              </Button>
            </div>
          </div>
        </DotShadowRoundedContainer>
      </div>
    </ModalLayout>
  );
};

export default CompleteCourseReviewModal;
