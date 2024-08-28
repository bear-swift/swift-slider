import { ReactNode } from "react";
import styles from "./container.module.css";

interface EllipseEdgeContainerProps {
  children: ReactNode;
  className?: string;
  rotateEdge?: boolean;
}

const EdgeContainer = (props: EllipseEdgeContainerProps) => {
  const { children, className = "", rotateEdge = true } = props;
  return (
    <div
      className={`relative w-full ${styles[rotateEdge ? "ellipse" : "rect"]} ${className}`}
    >
      {children}
    </div>
  );
};

export default EdgeContainer;
