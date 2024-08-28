"use client";

import { Button } from "@mui/material";
import LandingContainer from "./Containers/LandingContainter";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

const IntroductionSection = () => {
  const router = useRouter();
  const t = useTranslations("home");
  const onStartFreeClicked = () => {
    router.push("/auth/register");
  };

  const onContactUsClicked = () => {
    router.push("contactus");
  };

  return (
    <LandingContainer>
      <div
        data-aos="zoom-in"
        data-aos-delay="50"
        data-aos-easing="ease-in-sine"
        className="flex flex-col gap-[24px] px-[24px] xl:py-[48px] md:py-[24px]"
      >
        <div className="max-w-[1050px] mx-auto 2xl:text-[80px] xl:text-[64px] lg:text-[48px] text-[32px] font-bold lg:leading-[90px] text-center flex rtl:flex-col-reverse ltr:flex-col">
          <div>
            <span className="text-my-black">{t("intro-title-secure")}</span>
            <span className="text-my-purple">{". "}</span>
            <span className="text-my-black">{t("intro-title-smart")}</span>
            <span className="text-my-purple">{". "}</span>
            <span className="text-my-black">{t("intro-title-insightful")}</span>
            <span className="text-my-purple">{"."}</span>
          </div>
          <div>
            <span className="text-my-purple">
              {t("intro-title-formbuilder")}
            </span>
          </div>
        </div>

        <div className="xl:max-w-[920px] mx-auto text-center text-my-black leading-[28px] md:text-[20px] text-[16px]">
          {t("intro-description")}
        </div>

        <div className="flex gap-[8px] justify-center items-center">
          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              height: "40px",
              boxShadow: "none",
              borderRadius: "7px",
            }}
            className="!bg-my-purple md:!text-[16px] !text-[14px] !font-medium"
            onClick={onStartFreeClicked}
          >
            <div className="flex gap-[4px] items-center">
              <span>{t("startfree")}</span>
              <Image
                src={"/start-arrow.svg"}
                alt={"start-arrow"}
                width={0}
                height={0}
                sizes="100vw"
                className="w-[24px]"
              />
            </div>
          </Button>

          <Button
            variant="outlined"
            sx={{ textTransform: "none", height: "40px", borderRadius: "7px" }}
            className="!text-my-black !border-my-gray md:!text-[16px] !text-[14px] !font-medium"
            onClick={onContactUsClicked}
          >
            {t("menu-contactus")}
          </Button>
        </div>
      </div>
    </LandingContainer>
  );
};

export default IntroductionSection;
