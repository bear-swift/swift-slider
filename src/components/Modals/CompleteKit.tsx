import Image from "next/image";
import ModalLayout from "./ModalLayout";
import DotShadowRoundedContainer from "../DotShadow";
import { Button, OutlinedInput } from "@mui/material";
import { useKitContext } from "@/providers/KitProvider";

interface CompleteKitModalProps {
  visible: boolean;
  onClose: () => void;
}

const CompleteKitModal = (props: CompleteKitModalProps) => {
  const { visible, onClose } = props;

  const { completeKit } = useKitContext();

  const onOkClicked = () => {
    onClose();
    completeKit();
  }

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
              {"Congratulations!"}
            </div>

            <div>{`You completed your kit and you earned this many points. Please reach out to your pareent so they can approve your points which will get added to your account`}</div>

            <div className="flex items-center justify-end">
              <Button
                variant="contained"
                className="!bg-my-orange !rounded-full"
                onClick={onOkClicked}
              >
                <span className="font-cathy-melody"> {"Ok"}</span>
              </Button>
            </div>
          </div>
        </DotShadowRoundedContainer>
      </div>
    </ModalLayout>
  );
};

export default CompleteKitModal;
