import ModalLayout from "./ModalLayout";
import { Button } from "@mui/material";
import { useKitContext } from "@/providers/KitProvider";
import { useRouter } from "next/navigation";

interface CompleteProjectModalProps {
  visible: boolean;
  onClose: () => void;
}

const CompleteProjectModal = (props: CompleteProjectModalProps) => {
  const { visible, onClose } = props;

  const router = useRouter();
  const { completeProject, currentProject } = useKitContext();

  const onClickGotoNext = (flag: boolean) => {
    onClose();
    completeProject(flag);
  }

  return (
    <ModalLayout visible={visible} onClose={onClose} showCloseIcon={false}>
      <div className="flex flex-col bg-white px-[40px] py-[30px] gap-[12px] rounded-[20px] max-w-[750px] text-center">
        <div className="text-[20px] font-cathy-melody text-my-orange">You Completed Project.</div>
        <div className="text-[40px] font-cathy-melody text-my-blue">{currentProject?.title || ''}</div>

        <Button
          variant="outlined"
          className={`!border-my-orange !text-my-orange !font-cathy-melody !text-[16px] !rounded-full !h-[40px] !shadow-none`}
          onClick={() => onClickGotoNext(false)}
        >
          {`Continue to Next Project`}
        </Button>

        <Button
          variant="outlined"
          className={`!border-my-orange !text-my-orange !font-cathy-melody !text-[16px] !rounded-full !h-[40px] !shadow-none`}
          onClick={() => onClickGotoNext(true)}
        >
          {`Go to Dashboard`}
        </Button>
      </div>
    </ModalLayout>
  );
};

export default CompleteProjectModal;
