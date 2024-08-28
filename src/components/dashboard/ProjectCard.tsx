import { IProjectItem } from "@/types";
import DotShadowRoundedContainer from "../DotShadow";
import { Button } from "@mui/material";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import LevelItem from "./LevelItem";

interface ProjectCardProps {
  item: IProjectItem;
  selected: boolean;
  onClick: () => void;
}
const ProjectCard = ({ item, selected, onClick }: ProjectCardProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const onStartClicked = () => {
    router.push(`${pathname}/${item.id.replaceAll(" ", "-")}`);
  };
  return (
    <DotShadowRoundedContainer activeColor={`#F4961D`} animate={!selected}>
      <div
        className="p-[12px] flex flex-col justify-between gap-[16px] max-w-[280px] h-full"
        onClick={onClick}
      >
        <div className="flex flex-col gap-[16px] w-full">
          <div className="relative w-full flex items-center justify-center rounded-[12px] overflow-hidden h-[200px]" style={{
            background: `url(${item.image}) center center / cover no-repeat`
          }}>
            <div className="absolute top-[10px] left-[10px]">
              <LevelItem level={item.level} />
            </div>
          </div>

          <div className="text-[18px] font-bold">{item.title}</div>

          <div>{item.description}</div>

          <div className="flex gap-[8px]">
            <div className="pt-[6px]">
              <Image
                src={"/images/target.png"}
                alt="project-image"
                width={14}
                height={14}
                sizes="100vw"
              />
            </div>

            <div className="text-my-orange font-bold">{item.goal}</div>
          </div>
        </div>

        <Button
          variant="contained"
          className="!h-[40px] !bg-my-blue !text-white !rounded-full !font-cathy-melody !text-base"
          onClick={onStartClicked}
        >
          {`Start this Project`}
        </Button>
      </div>
    </DotShadowRoundedContainer>
  );
};

export default ProjectCard;
