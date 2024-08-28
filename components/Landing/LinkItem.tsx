import { ReactNode } from "react";

const LinkItem = ({
  children,
  href = "#",
}: {
  children: ReactNode;
  href?: string;
}) => {
  return (
    <a href={href}>
      <div className="px-[12px] md:py-[8px] py-[4px] leading-[24px] text-[#242424] cursor-pointer">
        {children}
      </div>
    </a>
  );
};

export default LinkItem;
