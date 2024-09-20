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
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Tooltip } from "@mui/material";

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
  visibleTitle = false,
}: {
  item: MenuType;
  active?: boolean;
  visibleTitle?: boolean,
  onClick: () => void;
}) => {
  return (
    <Tooltip title={item.title} placement="right">
      <div
        className={`cursor-pointer flex items-center gap-[8px] px-[12px] py-[6px] ${active ? "text-white bg-my-orange rounded-full" : "text-my-gray"}`}
        onClick={onClick}
      >
        <div className="min-w-[16px]">{item.icon}</div>
        {
          visibleTitle &&
          <div className="truncate max-w-[100px]">{item.title}</div>
        }
      </div>
    </Tooltip>
  );
};

const SideBar = () => {
  const router = useRouter();
  const userName = "user";
  const [activatedIndex, setActiveIndex] = useState<number>(0);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const onLogoutClicked = () => {

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
          transition: 'width .5s'
        }}
        className={`relative px-[12px] py-[16px] flex flex-col justify-between ${isExpanded ? 'w-[152px]' : 'w-[64px]'}`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <div className="flex flex-col gap-[16px]">
          {/* top logos */}
          <div className="flex justify-between items-center">
            {
              isExpanded &&
              <Image
                src={"/images/icons/logo.svg"}
                alt="logo"
                width={96}
                height={50}
                sizes="100vw"
              />
            }
            <div className="relative mx-auto">
              <Image
                src={"/images/icons/bell.png"}
                alt="bell"
                width={16}
                height={16}
                sizes="100vw"
              />

              {/* <div className="absolute top-0 right-0 w-[12px] h-[12px] rounded-full bg-red-600 translate-y-[-50%] translate-x-[50%] leading-[12px] flex items-center justify-center">
                <span className="text-white text-[10px]"> {'4'}</span>
              </div> */}
            </div>

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
                    visibleTitle={isExpanded}
                    onClick={() => onMenuClicked(item, index)}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* user  */}
        <div className={`flex items-center justify-between gap-[10px] ${!isExpanded ? 'flex-col' : ''}`}>
          <div className="flex items-center gap-[8px]">
            {/* avatar */}
            <div className="w-[28px] h-[28px] rounded-full overflow-hidden flex items-center justify-center">
              <AccountCircleIcon />
            </div>
            {
              isExpanded &&
              <div className="font-bold truncate max-w-[100px]">{userName}</div>
            }
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