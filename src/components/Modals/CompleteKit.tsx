import ModalLayout from "./ModalLayout";
import { Button } from "@mui/material";
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
    <ModalLayout visible={visible} onClose={onClose}>
      <div className="flex flex-col bg-white p-[40px] gap-[20px] text-center max-w-[400px]">
        <div className="text-[18px] font-bold">
          {`Congratulations!`}
        </div>

        <div>
          {`You completed your kit and you eraned this many points. Please reach out to your parenet so they can approve your points which will get added to your account.`}
        </div>
        <div>
          <Button
            variant="contained"
            className="!bg-my-orange !rounded-full"
            onClick={onOkClicked}
          >
            <span className="font-cathy-melody"> {"Ok"}</span>
          </Button>
        </div>
      </div>
    </ModalLayout>
  );
};

export default CompleteKitModal;
