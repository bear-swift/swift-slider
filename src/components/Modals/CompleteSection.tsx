import Image from "next/image";
import { useEffect, useState } from "react";
import styles from './CompleteSection.module.css'
import { useKitContext } from "@/providers/KitProvider";
import CathyMelodyText from "../CathyMelodyText";

interface CompleteSectionModalProps {
  visible: boolean;
  onClose: () => void;
  title: string
}

const CompleteSectionModal = (props: CompleteSectionModalProps) => {
  const { visible, onClose, title } = props;
  const [loaded, setLoaded] = useState<boolean>(false);
  const { goToNextSubStep, } = useKitContext();

  useEffect(() => {
    if (visible) {
      setTimeout(() => {
        setLoaded(true);
      }, 100);

      setTimeout(() => {
        onClose();
        goToNextSubStep();
      }, 2100);

    } else {
      setLoaded(false);
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="fixed w-screen h-screen bg-white bg-opacity-10 top-0 left-0 flex items-center justify-center z-[3]" style={{
      backdropFilter: "blur(15px)"
    }}>
      <div className="flex flex-col gap-[12px] text-center font-cathy-melody p-[10px] max-w-[800px] ">
        <div className="text-[18px] text-[#365CA7]">{'Congratulations You Earned A Badge'}</div>
        <div className="text-[40px] text-[#2C72FF]">
          <CathyMelodyText text={title} />
        </div>

        <Image
          src={`/images/complete-section.png`}
          alt="character"
          width={322}
          height={362}
          sizes="100vw"
          className="mx-auto"
        />

        <div className="text-gray-500 font-mulish">{'Next section in 3s'}</div>
        <div className="h-[3px] rounded-full bg-gray-400 mx-auto w-[480px]">
          <div className={`h-full ${styles['timeline']} ${loaded ? styles['completing'] : ''}`}></div>
        </div>
      </div>
    </div>
  );
};

export default CompleteSectionModal;