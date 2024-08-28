"use client";

import { DotShadowRoundedContainer } from "@/components";
import {
  MenuAccountIcon,
  MenuCertificateIcon,
  MenuDashboardIcon,
  MenuGiftIcon,
  MenuRewardIcon,
  MenuSubscriptionIcon,
} from "@/resources/icons";
import Image from "next/image";
import { ReactNode, useState } from "react";
import { useRouter } from "next/navigation";
import { MenuItem } from "@mui/material";

interface MenuType {
  icon: ReactNode;
  title: string;
  path: string;
}

const menulists: MenuType[] = [
  { icon: <MenuDashboardIcon />, title: "Dashboard", path: "/dashboard" },
  { icon: <MenuRewardIcon />, title: "Reward", path: "" },
  { icon: <MenuCertificateIcon />, title: "Certificates", path: "" },
  { icon: <MenuGiftIcon />, title: "Digital Gifts", path: "" },
  { icon: <MenuSubscriptionIcon />, title: "Subscription", path: "" },
  { icon: <MenuAccountIcon />, title: "Account", path: "" },
];

const DashboardMenuItem = ({
  item,
  active = false,
  onClick,
}: {
  item: MenuType;
  active?: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      className={`cursor-pointer flex items-center gap-[8px] px-[12px] py-[6px] ${active ? "text-white bg-my-orange rounded-full" : "text-my-gray"}`}
      onClick={onClick}
    >
      <div className="min-w-[16px]">{item.icon}</div>
      <div className="truncate max-w-[100px]">{item.title}</div>
    </div>
  );
};

const SideBar = () => {
  const router = useRouter();
  const userName = "Tran Huyen";
  const [activatedIndex, setActiveIndex] = useState<number>(0);

  const onLogoutClicked = () => {
    console.log("log out clicked");
  };

  const onMenuClicked = (item: MenuType, index: number) => {
    if (item.path !== "") router.push(item.path);
    setActiveIndex(index);
  };

  return (
    <DotShadowRoundedContainer activeColor={`#2C72FF`} animate={false}>
      <div
        style={{
          height: "calc(100vh - 30px)",
        }}
        className="px-[12px] py-[16px] flex flex-col justify-between"
      >
        <div className="flex flex-col gap-[16px]">
          {/* top logos */}
          <div className="flex justify-between items-center">
            <Image
              src={"/images/icons/logo.svg"}
              alt="logo"
              width={96}
              height={50}
              sizes="100vw"
            />
            <Image
              src={"/images/icons/bell.png"}
              alt="bell"
              width={16}
              height={16}
              sizes="100vw"
            />
          </div>

          {/* Menus */}
          <div
            style={{ maxHeight: "calc(100vh - 140px)" }}
            className="overflow-y-auto"
          >
            <div className="flex flex-col gap-[8px]">
              {menulists.map((item, index) => {
                return (
                  <DashboardMenuItem
                    item={item}
                    key={index}
                    active={activatedIndex === index}
                    onClick={() => onMenuClicked(item, index)}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* user  */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[8px]">
            {/* avatar */}
            <div className="w-[28px] h-[28px] rounded-full overflow-hidden flex items-center justify-center">
              <Image
                alt={`avatar`}
                src={`/images/icons/avatar.png`}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full"
              />
            </div>

            <div className="font-bold truncate max-w-[100px]">{userName}</div>
          </div>

          <Image
            src={"/images/icons/sign-out.png"}
            alt="sign out"
            width={16}
            height={16}
            sizes="100vw"
            className="cursor-pointer"
            onClick={onLogoutClicked}
          />
        </div>
      </div>
    </DotShadowRoundedContainer>
  );
};

export default SideBar;
