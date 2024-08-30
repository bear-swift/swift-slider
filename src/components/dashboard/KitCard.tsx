"use client";

import CalendarSvg from "@/resources/icons/calendar";
import { IKitItem } from "@/types";
import Image from "next/image";
import KitProgress from "./KitProgress";
import { Button } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { KitContext } from "@/providers/KitProvider";

interface KitCardProps {
  item: IKitItem;
}
const KitCard = ({ item }: KitCardProps) => {
  const { completedProjectIds } = useContext(KitContext);
  const pathname = usePathname();
  const router = useRouter();
  const onDetailsClicked = () => {
    router.push(`${pathname}/${item.title.replaceAll(" ", "-")}`);
  };

  return (
    <div className="flex gap-[8px] justify-between items-center">
      {/* kit description */}
      <div className="flex gap-[16px]">
        <div className="w-[84px] h-[84px] rounded-[12px] flex items-center justify-center overflow-hidden">
          <Image
            src={item.icon}
            alt="kit"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full"
          />
        </div>

        <div className="flex flex-col gap-[8px]">
          <div className="text-[18px] font-bold">{item.title}</div>
          <div className="truncate">{item.description}</div>
          <div className="flex items-center gap-[8px] text-[#B3B3B3]">
            <CalendarSvg />
            <div className="truncate">{`Stated on: ${item.startedDate}`}</div>
          </div>
        </div>
      </div>

      <div className="flex justify-between gap-[40px]">
        <div className="flex flex-col gap-[8px]">
          <div className="text-[18px] font-bold">{`${item.totalProjectCount}`}</div>
          <div className="text-[#B3B3B3]">Projects</div>
        </div>

        <div className="flex flex-col gap-[8px]">
          <div className="font-bold text-[18px]">Progress</div>
          <KitProgress
            percent={
              (100 * Math.min(completedProjectIds.length, item.totalProjectCount)) / item.totalProjectCount
            }
          />
        </div>
      </div>

      <Button
        variant="contained"
        className="!h-[40px] !bg-my-blue !text-white !rounded-full !font-cathy-melody !text-base"
        onClick={onDetailsClicked}
      >
        {`See Details`}
      </Button>
    </div>
  );
};

export default KitCard;
