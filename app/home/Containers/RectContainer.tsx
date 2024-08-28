import { ReactNode } from "react";

interface RectContainerProps {
  children: ReactNode;
  topleft?: boolean;
  topright?: boolean;
  bottomleft?: boolean;
  bottomright?: boolean;
  className?: string;
}

const RectContainer = (props: RectContainerProps) => {
  const {
    children,
    topright = true,
    topleft = true,
    bottomleft = true,
    bottomright = true,
    className = "",
  } = props;

  return (
    <div className={`relative w-full ${className}`}>
      {topleft && (
        <div className="absolute top-0 left-0 bg-white w-[9px] h-[9px] border border-my-gray translate-x-[-50%] translate-y-[-50%]"></div>
      )}
      {bottomleft && (
        <div className="absolute bottom-0 left-0 bg-white w-[9px] h-[9px] border border-my-gray translate-x-[-50%] translate-y-[50%]"></div>
      )}

      {topright && (
        <div className="absolute top-0 right-0 bg-white w-[9px] h-[9px] border border-my-gray translate-x-[50%] translate-y-[-50%]"></div>
      )}
      {bottomright && (
        <div className="absolute bottom-0 right-0 bg-white w-[9px] h-[9px] border border-my-gray translate-x-[50%] translate-y-[50%]"></div>
      )}
      {children}
    </div>
  );
};

export default RectContainer;
