import React, { ReactNode, CSSProperties, useState } from "react";
import { ResizableBox as ReactResizableBox } from "react-resizable";

import "react-resizable/css/styles.css";

interface ResizableBoxProps {
  children: ReactNode;
  width?: number;
  height?: number;
  className?: string;
  onResize: (f: boolean) => void
}

const ResizableContainer: React.FC<ResizableBoxProps> = ({
  children, onResize,
  width = 900,
  height = 600,
  className = "",
}) => {
  const handleResizeStart = () => {
    onResize(true);
  };

  const handleResizeStop = () => {
    onResize(false);
  };

  return (
    <div style={{ margin: 4, }}>
      <ReactResizableBox
        width={width}
        height={height}
        resizeHandles={['s', 'w', 'e', 'n', 'se']} // Resize from the bottom-right corner (south-east)
        onResizeStart={handleResizeStart}
        onResizeStop={handleResizeStop}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
          }}
          className={className}
        >
          {children}
        </div>
      </ReactResizableBox>
    </div>
  );
};

export default ResizableContainer;
