"use client";

import { SuggestKitModal } from "@/components/Modals";
import { PROJECT_LIST } from "@/constants/project";
import { Breadcrumbs, Button } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const formatLabel = (label: string) => {
  return label
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const MainHeader = () => {
  const pathname = usePathname();
  const [opened, setOpened] = useState<boolean>(false);
  let title = "";

  const generateBreadcrumbs = () => {
    const pathnames = pathname.split('/').slice(1, -1).filter((x) => x);
    return (
      <Breadcrumbs aria-label="breadcrumb">
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const last = index === pathnames.length - 1;
          return (
            <Link key={to} href={to} style={{ textDecoration: 'none', color: '#B3B3B3', fontSize: '12px' }}>
              {formatLabel(value)}
            </Link>
          );
        })}
      </Breadcrumbs>
    );
  };

  const pathnames: string[] = pathname.split("/").filter((item) => item !== "");
  if (pathnames.length >= 4) {
    const projectid = pathnames[3];
    const filteredProjects = PROJECT_LIST.filter((item) => item.id === projectid);
    if (filteredProjects.length > 0)
      title = filteredProjects[0].title;

  } else {
    title =
      pathnames
        .slice(0, 3)
        .findLast(() => true)
        ?.split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ") || "";
  }

  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <div className="font-bold text-[12px] text-my-gray">
            {
              generateBreadcrumbs()
            }
          </div>
          <div className="font-bold text-[16px]">{title}</div>
        </div>

        <div className="flex gap-[8px]">
          <Button
            variant="outlined"
            className={`!text-my-orange !border-my-orange !font-cathy-melody !text-[16px] !rounded-full !h-[48px]`}
            onClick={() => setOpened(true)}
          >
            {`Suggest a Kit`}
          </Button>

          <Button
            variant="contained"
            className={`!text-white !bg-my-orange !font-cathy-melody !text-[16px] !rounded-full !h-[48px] !shadow-none`}
          >
            {`Subscribe for More`}
          </Button>
        </div>
      </div>

      <SuggestKitModal visible={opened} onClose={() => setOpened(false)} />
    </>
  );
};

export default MainHeader;
