import Image from "next/image";
import ModalLayout from "./ModalLayout";
import DotShadowRoundedContainer from "../DotShadow";
import { Button, OutlinedInput } from "@mui/material";

interface CongratulationModalProps {
  visible: boolean;
  onClose: () => void;
}

const CongratulationModal = (props: CongratulationModalProps) => {
  const { visible, onClose } = props;
  return (
    <ModalLayout visible={visible} onClose={onClose} showCloseIcon={false}>
      <div className="flex bg-white px-[40px] py-[30px] gap-[48px] items-center rounded-[20px] max-w-[750px]">
        <Image
          src={`/images/characters/suggest-kit.png`}
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

            <div>{"We’d love to hear it, submit your review here!"}</div>

            <OutlinedInput
              minRows={3}
              maxRows={3}
              multiline
              fullWidth
              placeholder={"Type your idea"}
              className="!rounded-[12px] !text-[14px] !px-[16px] !py-[8px] !bg-white"
            />

            <div>
              <Button
                variant="contained"
                className="!bg-my-orange !rounded-full"
                onClick={onClose}
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

export default CongratulationModal;
