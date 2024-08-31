import Image from "next/image";
import CodePanel from "./CodePanel";
import { StepContent } from "@/types/instruction";
import { useKitContext } from "@/providers/KitProvider";

const StepContentItem = ({ item }: { item: StepContent }) => {
  const { type, content, copyRequired } = item;
  const { showImage } = useKitContext();

  return (
    <div className="pb-[4px]">
      {type === "description" && (
        <>
          <span className="text-[#365CA7] font-bole">{`Description:`}</span>
          <br />
          <span>{content}</span>
        </>
      )}

      {type === "text" && <>{content}</>}

      {type === "funFact" && (
        <>
          <span className="text-[#365CA7] font-bole">{`Coding Fun Fact:`}</span>
          <span>{content}</span>
        </>
      )}

      {type === "challenge" && <div className="font-bold">{content}</div>}

      {type === "image" && (
        <Image
          src={content}
          alt="Screenshot"
          width={492}
          height={295}
          sizes="100vw"
          style={{ marginTop: "12px", cursor: "pointer" }}
          onClick={() => { showImage(content) }}
        />
      )}

      {type === "code" && (
        <div className="py-[4px]">
          <CodePanel code={content} copyable={copyRequired || false} />
        </div>
      )}
    </div>
  );
};

export default StepContentItem;
