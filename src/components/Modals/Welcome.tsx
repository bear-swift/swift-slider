import Image from "next/image";
import ModalLayout from "./ModalLayout";
import DotShadowRoundedContainer from "../DotShadow";
import { Button, OutlinedInput } from "@mui/material";

interface SuggestKitModalProps {
  visible: boolean;
  onClose: () => void;
}

const WelcomeModal = (props: SuggestKitModalProps) => {
  const { visible, onClose } = props;
  return (
    <ModalLayout visible={visible} onClose={onClose} showCloseIcon={false}>
      <div className="flex bg-white p-[40px] gap-[48px] items-center rounded-[20px]">
        <Image
          src={`/images/characters/welcome-man.png`}
          alt="character"
          width={255}
          height={279}
          sizes="100vw"
        />

        <DotShadowRoundedContainer activeColor="#F4961D" animate={false}>
          <div className="p-[24px] flex flex-col gap-[12px] bg-[#FEF4E8] text-center h-full">
            <div className="text-my-blue font-cathy-melody text-[20px]">
              {"Welcome to our app"}
            </div>

            <div>{"Have fun with our educational coding kits"}</div>

            <Button
              variant="contained"
              className="!bg-my-orange !rounded-full mx-auto"
              onClick={onClose}
            >
              <span className="font-cathy-melody"> {"Explore Now"}</span>
            </Button>
          </div>
        </DotShadowRoundedContainer>
      </div>
    </ModalLayout>
  );
};

export default WelcomeModal;
