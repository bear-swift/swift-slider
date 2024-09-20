import { Button } from "@mui/material";
import ModalLayout from "./ModalLayout";

interface InstructionsModalProps {
  visible: boolean;
  onClose: () => void;
}

const InstructionsModal = (props: InstructionsModalProps) => {
  const { visible, onClose } = props;

  return (
    <ModalLayout visible={visible} onClose={onClose} showCloseIcon={false}>
      <div className="bg-white px-[40px] py-[30px] rounded-[20px] max-w-[750px] flex flex-col gap-[24px]">
        <div className="text-[18px] font-semibold">
          <span> {`To get started, click on the `}</span>
          <span className="text-my-orange text-[20px]">{`Get Instructions`}</span>
          <span>{` button located at the Top Of Your Sceen!`}</span>
        </div>
        <Button
          variant="contained"
          className="!bg-my-orange !rounded-full"
          onClick={onClose}
        >
          <span className="font-cathy-melody"> {"Ok"}</span>
        </Button>
      </div>
    </ModalLayout>
  );
};

export default InstructionsModal;
