import Image from "next/image";
import CodePanel from "./CodePanel";
import { StepContent } from "@/types/instruction";
import { useKitContext } from "@/providers/KitProvider";


// Function to parse and render text with bolded words
const renderTextWithBold = (text: string) => {
  const regex = /\*\*(.*?)\*\*/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  // Loop through the text to find all matches for **bold text**
  while ((match = regex.exec(text)) !== null) {
    // Add text before the match
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    // Add the matched bold text
    parts.push(<strong key={match.index}>{match[1]}</strong>);
    lastIndex = regex.lastIndex;
  }

  // Add any remaining text after the last match
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
};

const StepContentItem = ({ item }: { item: StepContent }) => {
  const { type, content, copyRequired } = item;
  const { showImageModal: showImage } = useKitContext();

  return (
    <div className="pb-[4px]">
      {type === "description" && (
        <>
          <span className="text-[#365CA7] font-bole">{`Description:`}</span>
          <br />
          <span>{content}</span>
        </>
      )}

      {type === "text" && <>{renderTextWithBold(content)}</>}

      {type === "funFact" && (
        <>
          <span className="text-[#365CA7] font-bole">{`Coding Fun Fact:`}</span>
          <span>{content}</span>
        </>
      )}

      {type === "challenge" && <div className="font-bold">{content}</div>}

      {type === "image" && (
        <div className="w-full px-2">
          <Image
            src={content}
            alt="Screenshot"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full"
            style={{ marginTop: "12px", cursor: "pointer" }}
            onClick={() => { showImage(content) }}
          />
        </div>
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
