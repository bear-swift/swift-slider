"use client";
import YouTube, { YouTubeProps } from "react-youtube";
import { VIDEO_ID } from "@/constants";
import { useAppSelector } from "@/store/hooks";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import Slider from "react-slick";
import CloseIcon from "@mui/icons-material/Close";

const DashboardSection = () => {
  const t = useTranslations("home");
  const { dir } = useAppSelector((state) => state.env);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [videoObject, setVideoObject] = useState<any>(null);

  const onStartVideo = () => {
    if (videoObject?.playVideo) videoObject.playVideo();
    setIsPlaying(true);
  };

  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    if (event?.target) {
      setVideoObject(event.target);
      if (isPlaying) event.target.playVideo();
    }
  };

  const onPlayerEnd: YouTubeProps["onEnd"] = (event) => {
    setIsPlaying(false);
  };

  return (
    <div className="relative">
      <div className="mx-auto max-w-landing 2xl:max-w-2xl-landing lg:max-w-lg-landing md:max-w-md-landing border-x border-my-gray py-[24px] ">
        <div
          data-aos="zoom-in"
          data-aos-delay="0"
          data-aos-easing="ease-in-sine"
          className="relative flex flex-col xl:gap-[80px] md:gap-[40px] gap-[20px] z-[1] md:p-0 px-[16px]"
        >
          <div>
            <div className="cursor-pointer relative 2xl:w-[1200px] 2xl:h-[855px] lg:w-[1152px] lg:h-[820px] md:w-[900px] md:h-[640px] w-full mx-auto">
              <Image
                src={`/trusted-image-${dir}.png`}
                alt={`dashboard`}
                width={0}
                height={0}
                sizes="100vw"
                className={`w-full mx-auto ${isPlaying ? "invisible" : ""}`}
                onClick={onStartVideo}
              />

              <YouTube
                videoId={VIDEO_ID}
                className={`absolute top-0 left-0 w-full h-full flex items-center justify-center ${isPlaying ? "" : "hidden"}`}
                iframeClassName={`w-full h-full`}
                onReady={onPlayerReady}
                onEnd={onPlayerEnd}
              />

              {isPlaying && (
                <div className="absolute top-[10px] w-full">
                  <div className="text-center px-[15px] mx-auto">
                    <div
                      className="rounded-full w-[40px] h-[40px] bg-white bg-opacity-50 cursor-pointer flex items-center justify-center mx-auto"
                      onClick={() => setIsPlaying(false)}
                    >
                      <CloseIcon />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="lg:grid grid-cols-3 gap-[24px] 2xl:px-[160px] mx-auto">
            {/* non-back */}
            <div className="flex flex-col xl:gap-[20px] lg:gap-[12px] md:text-start text-center justify-center">
              {/* insights */}
              <div className="flex md:justify-normal justify-center">
                <div className="rounded-[8px] flex border items-center gap-[8px] border-white border-opacity-10 px-[8px] py-[6px]">
                  <Image
                    src={"/trusted-category.svg"}
                    alt={`dashboard`}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="min-w-[20px] w-auto mx-auto"
                  />

                  <span className="text-[#D1D1D1] font-medium">
                    {t("security")}
                  </span>
                </div>
              </div>

              <div className="lg:text-[40px] md:text-[32px] sm:text-[24px] text-white lg:leading-[52px]">
                {t("security-title")}
              </div>
              <div className="text-[16px] text-[#D1D1D1] leading-[24px]">
                {t("security-description")}
              </div>
            </div>

            {/* description */}
            <div className="col-span-2 pt-[24px]">
              <div className="rounded-[16px] bg-white bg-opacity-10 p-[16px] h-full">
                <div className="md:flex text-white text-center h-full">
                  {/* item */}
                  <div className="flex flex-col gap-[16px] h-full justify-between py-[16px] flex-1">
                    <div>
                      <Image
                        src={"/trusted-zero.png"}
                        alt={`simplify-management`}
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="min-w-[44px] w-auto mx-auto"
                      />
                    </div>
                    <div className="flex flex-col gap-[16px]">
                      <div className="text-[24px] leading-[32px]">
                        {t("zero-title")}
                      </div>
                      <div className="">{t("zero-description")}</div>
                    </div>
                  </div>
                  <div className="md:block hidden w-[2px] h-full bg-my-gray bg-opacity-30"></div>
                  <div className="md:hidden h-[2px] w-full bg-my-gray bg-opacity-30"></div>
                  {/* item */}
                  <div className="flex flex-col gap-[16px] h-full justify-between p-[16px] flex-1">
                    <div>
                      <Image
                        src={"/trusted-hosting.png"}
                        alt={`informed-decision`}
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="min-w-[44px] w-auto mx-auto"
                      />
                    </div>
                    <div className="flex flex-col gap-[16px]">
                      <div className="text-[24px] leading-[32px]">
                        {t("hosting-title")}
                      </div>
                      <div className="">{t("hosting-description")}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute w-full xl:px-[16px] left-0 bottom-0">
        <div
          className="md:rounded-[32px] h-[752px] mt-[-380px] 2xl:max-w-2xl-landing mx-auto"
          style={{
            background: "linear-gradient(180deg, #662978 0%, #41194D 100%)",
          }}
        ></div>
      </div>
    </div>
  );
};

const LogosSection = () => {
  const t = useTranslations("home");
  return (
    <div className="w-full px-[15px]">
      <div className="text-center text-[#666666] h-[30px]">
        {t("trustedby")}
      </div>
      <div className="grid grid-cols-6 items-center">
        <Image
          src={"/trusted-m-logo.png"}
          alt={"maersk"}
          width={0}
          height={0}
          sizes="100vw"
          className="w-auto min-w-[150px]"
        />

        <Image
          src={"/trusted-airbnb-logo.png"}
          alt={"maersk"}
          width={0}
          height={0}
          sizes="100vw"
          className="w-auto min-w-[100px]"
        />

        <Image
          src={"/trusted-huawei-logo.png"}
          alt={"maersk"}
          width={0}
          height={0}
          sizes="100vw"
          className="w-auto min-w-[48px]"
        />

        <Image
          src={"/trusted-adobe-logo.png"}
          alt={"maersk"}
          width={0}
          height={0}
          sizes="100vw"
          className="w-auto min-w-[110px]"
        />

        <Image
          src={"/trusted-microsoft-logo.png"}
          alt={"maersk"}
          width={0}
          height={0}
          sizes="100vw"
          className="w-auto min-w-[145px]"
        />

        <Image
          src={"/trusted-spotify-logo.png"}
          alt={"maersk"}
          width={0}
          height={0}
          sizes="100vw"
          className="w-auto min-w-[120px]"
        />
      </div>
    </div>
  );
};

const TrustedBySection = () => {
  const t = useTranslations("home");
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false, // Hide navigation arrows
  };

  return (
    <>
      <DashboardSection />
      <div className="max-w-landing 2xl:max-w-2xl-landing lg:max-w-lg-landing md:max-w-md-landing mx-auto md:border-x border-my-gray py-[48px]">
        <div
          data-aos="zoom-in"
          data-aos-delay="150"
          className="md:block hidden"
        >
          <LogosSection />
        </div>

        <div data-aos="zoom-in" data-aos-delay="150" className="md:hidden">
          <div className="text-center text-[#666666] h-[30px]">
            {t("trustedby")}
          </div>
          <Slider {...settings}>
            <div className="h-[50px] !flex items-center justify-center px-[20px]">
              <Image
                src={"/trusted-m-logo.png"}
                alt={"maersk"}
                width={0}
                height={0}
                sizes="100vw"
                className="w-[150px]"
              />
            </div>

            <div className="h-[50px] !flex items-center justify-center px-[20px]">
              <Image
                src={"/trusted-airbnb-logo.png"}
                alt={"maersk"}
                width={0}
                height={0}
                sizes="100vw"
                className="w-[100px]"
              />
            </div>

            <div className="h-[50px] !flex items-center justify-center px-[20px]">
              <Image
                src={"/trusted-huawei-logo.png"}
                alt={"maersk"}
                width={0}
                height={0}
                sizes="100vw"
                className="w-[48px]"
              />
            </div>

            <div className="h-[50px] !flex items-center justify-center px-[20px]">
              <Image
                src={"/trusted-adobe-logo.png"}
                alt={"maersk"}
                width={0}
                height={0}
                sizes="100vw"
                className="w-[110px]"
              />
            </div>

            <div className="h-[50px] !flex items-center justify-center px-[20px]">
              <Image
                src={"/trusted-microsoft-logo.png"}
                alt={"maersk"}
                width={0}
                height={0}
                sizes="100vw"
                className="w-[145px]"
              />
            </div>

            <div className="h-[50px] !flex items-center justify-center px-[20px]">
              <Image
                src={"/trusted-spotify-logo.png"}
                alt={"maersk"}
                width={0}
                height={0}
                sizes="100vw"
                className="w-[120px]"
              />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default TrustedBySection;
