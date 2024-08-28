import EdgeContainer from "./EdgeContainer";
import { ReactNode } from "react";

interface LandingContainerProps {
  children: ReactNode;
  rotate?: boolean;
}

const LandingContainer = (props: LandingContainerProps) => {
  const { children, rotate = true } = props;
  return (
    <div className="md:border-b md:border-my-gray">
      <div className="max-w-landing 2xl:max-w-2xl-landing lg:max-w-lg-landing md:max-w-md-landing mx-auto">
        <EdgeContainer
          className="md:border-x border-y-0 md:border-my-gray "
          rotateEdge={rotate}
        >
          {children}
        </EdgeContainer>
      </div>
    </div>
  );
};

export default LandingContainer;
