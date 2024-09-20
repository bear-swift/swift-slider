interface CodePanelProps {
  popup?: boolean;
  code: string;
  copyable: boolean;
}
import { CustomHighLightStyle } from "@/constants/highlightstyle";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";

import swift from "react-syntax-highlighter/dist/esm/languages/hljs/swift";
SyntaxHighlighter.registerLanguage("swift", swift);

const CodePanel = (props: CodePanelProps) => {
  const { popup = false, code, copyable } = props;
  const [copied, setCopied] = useState<boolean>(false);

  const onCopyClicked = () => {
    setCopied(true);
    navigator.clipboard.writeText(code);
  };
  return (
    <div className="rounded-[8px] overflow-hidden text-[12px]">
      {/* header */}
      <div
        className={`h-[30px] text-white flex justify-between items-center px-[16px]`}
        style={{ backgroundColor: popup ? "#F4961D" : "#365CA7" }}
      >
        <span>React Native</span>
        {copyable && (
          <div
            className="flex items-center gap-[4px] cursor-pointer"
            onClick={onCopyClicked}
          >
            <ContentCopyIcon className="text-[16px]" />
            <span>{copied ? "Copied" : "Copy Code"}</span>
          </div>
        )}
      </div>

      <div className="bg-white max-h-[600px] overflow-auto">
        <SyntaxHighlighter language="swift" style={CustomHighLightStyle}>
          {code}
        </SyntaxHighlighter>
      </div>

    </div>
  );
};

export default CodePanel;
