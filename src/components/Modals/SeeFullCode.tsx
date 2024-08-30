import Image from "next/image";
import ModalLayout from "./ModalLayout";
import DotShadowRoundedContainer from "../DotShadow";
import { Button, OutlinedInput } from "@mui/material";
import CodePanel from "../dashboard/CodePanel";

interface SeeFullCodeModalProps {
  visible: boolean;
  onClose: () => void;
  code: string;
}

const SeeFullCodeModal = (props: SeeFullCodeModalProps) => {
  const { visible, onClose, code } = props;
  return (
    <ModalLayout visible={visible} onClose={onClose} showCloseIcon={false}>
      <div style={{
        background: `url('/images/icons/popup-bg.png') center center / cover no-repeat`
      }}
        className="relative p-[20px] min-w-[800px] flex flex-col gap-[20px]"
      >
        <div className="text-white font-medium text-[16px]">Full Code</div>

        <CodePanel popup={true} copyable={true} code={code} />

        <Image
          src="/images/icons/decoration-left.png"
          alt='left'
          width={80}
          height={151}
          sizes='100vw'
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0
          }}
        />
        <Image
          src="/images/icons/decoration-right.png"
          alt='right'
          width={110}
          height={128}
          sizes='100vw'
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0
          }}
        />
      </div>
    </ModalLayout>
  );
};

export default SeeFullCodeModal;
