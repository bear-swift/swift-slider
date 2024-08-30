"use client";

import CategoryCard from "@/components/dashboard/CategoryCard";
import VideoPopup from "@/components/dashboard/VideoPopup";
import { WelcomeModal } from "@/components/Modals";
import { CategoryItems } from "@/constants";
import { IconButton, Stack } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";

const WatchVideoCard = () => {
  const [isVideoPopupOpen, setIsVideoPopupOpen] = useState(false);

  return (
    <>
      <Stack
        alignItems={'center'}
        justifyContent={'center'}
        sx={{
          width: '380px',
          height: '215px',
          borderRadius: '16px',
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        <Image
          src={'/images/project/video-background.png'}
          alt="video background"
          width={0}
          height={0}
          sizes='100vw'
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        />
        <IconButton sx={{
          background: 'rgba(0, 0, 0, 0.5)',
          padding: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '50%',
          cursor: 'pointer',
          "&:hover": {
            background: 'rgba(0, 0, 0, 0.6)',
          }
        }}
          onClick={() => setIsVideoPopupOpen(true)}
        >
          <Image
            src="/images/icons/player.png"
            alt="play button"
            width={24}
            height={24}
            sizes='100vw'
          />
        </IconButton>
      </Stack>

      <VideoPopup
        open={isVideoPopupOpen}
        onClose={() => setIsVideoPopupOpen(false)}
        videoUrl='/videos/swift mod.mp4'
      />
    </>
  )
}
const DashboardPage = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const [welcomeOpened, setWelcomeOpened] = useState<boolean>(false);
  // checking loca modal show flag on localstorage
  useEffect(() => {
    const hasBeenShown = localStorage.getItem("modalShown");
    if (!hasBeenShown) {
      localStorage.setItem("modalShown", "true");
      setWelcomeOpened(true);
    }
  }, []);

  return (
    <>
      <div className="p-[16px] flex flex-col gap-[16px]">
        <div className="flex gap-[8px] items-center">
          <Image
            src="/images/icons/notepad.png"
            alt="notepad"
            width={14}
            height={14}
            sizes="100vw"
          />
          <div>{`All My Kits`}</div>
        </div>

        <div className="flex gap-[16px] flex-wrap">
          <WatchVideoCard />

          {CategoryItems.map((item, index) => {
            return (
              <div onClick={() => setSelectedIndex(index)} key={index}>
                <CategoryCard item={item} selected={index === selectedIndex} />
              </div>
            );
          })}
        </div>
      </div>

      <WelcomeModal
        visible={welcomeOpened}
        onClose={() => setWelcomeOpened(false)}
      />
    </>
  );
};

export default DashboardPage;
