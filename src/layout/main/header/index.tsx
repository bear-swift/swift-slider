"use client";

import { PROJECT_LIST } from "@/constants/project";
import { useKitContext } from "@/providers/KitProvider";
import { Breadcrumbs, Button } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

const formatLabel = (label: string) => {
  return label
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const MainHeader = () => {
  const pathname = usePathname();
  let title = "";
  const { showSeeFullCodeModal, showInstruction, currentProject } = useKitContext();

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

  const onClickGetInstruction = showInstruction;

  const onClickSeeFullCode = showSeeFullCodeModal;

  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <div className="font-bold text-[12px] text-my-gray">
            {
              generateBreadcrumbs()
            }
          </div>
          <div className="font-bold text-[16px] flex flex-wrap gap-[16px] items-center">
            <span>{title}</span>
            {
              currentProject && <>
                <Button
                  sx={{ textTransform: 'none' }}
                  variant="outlined"
                  className={`!text-my-blue !border-my-blue !font-cathy-melody !text-[16px] !rounded-full !h-[36px]`}
                  onClick={onClickGetInstruction}
                >
                  {`Get Instructions`}
                </Button>

                <Button
                  variant="outlined"
                  className={`!text-my-blue !border-my-blue !font-cathy-melody !text-[16px] !rounded-full !h-[36px]`}
                  onClick={onClickSeeFullCode}
                >
                  {`See Full Code`}
                </Button>
              </>
            }

          </div>
        </div>

        <div className="flex gap-[8px] items-center">
          <span>{'Needs help?'}</span>
          <a href='#'>
            <span className="text-my-orange underline">{'Our support page'}</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default MainHeader;
