import { Box } from "@mui/material";
import { ReactNode } from "react";

interface DotShadowRoundedContainerProps {
  children: ReactNode;
  activeColor?: string;
  animate?: boolean;
  style?: any
}

const DotShadowRoundedContainer = (props: DotShadowRoundedContainerProps) => {
  const { children, activeColor: color = "", animate = true, style } = props;
  const styels = animate
    ? {
      cursor: "pointer",
      overflow: "hidden",
      transition: "all.3s",
      border: `1px solid #ECECEC`,
      borderRadius: "16px",
      "&:hover": {
        border: `1px dashed ${color}`,
        boxShadow: `-4px 4px 0px 0px ${color}`,
      },
    }
    : {
      overflow: "hidden",
      borderRadius: "16px",
      border: `1px dashed ${color}`,
      boxShadow: `-4px 4px 0px 0px ${color}`,
    };

  return (
    <Box
      sx={{ ...styels, ...style }}
    // className={animate && 'cursor-pointer'}
    >
      {children}
    </Box>
  );
};

export default DotShadowRoundedContainer;
