"use client";

import { useState } from "react";
import MarkItem from "./Mark";
import Switch from "@/components/Landing/Switch";
import { Plan } from "@/types/Plan";
import { PLANS } from "@/constants/plan";
import { Button } from "@mui/material";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslations } from "next-intl";
import { useAppSelector } from "@/store/hooks";

const PlansSection = ({ isMonthly }: { isMonthly: boolean }) => {
  const { dir } = useAppSelector((state) => state.env);
  const t = useTranslations("home");
  const onStartPlanClicked = (plan: Plan) => {};

  return (
    <div className="grid tablet:grid-cols-2 grid-cols-1 tablet:gap-[24px] gap-[50px]">
      {/* plan 0 */}
      <div
        data-aos={dir === "ltr" ? "zoom-in" : "zoom-in"}
        data-aos-delay="50"
        className="border border-my-gray rounded-[20px] p-[32px] flex flex-col gap-[24px]"
      >
        {/* header */}
        <div className="tablet:h-[210px] flex flex-col justify-between tablet:gap-0 gap-[10px]">
          <div className="text-center font-semibold md:text-[30px] text-[24px] md:leading-[38px]">
            {t("basic")}
          </div>
          <div className="text-center font-semibold md:text-[40px] text-[24px] md:leading-[50px]">
            {t("free")}
          </div>

          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              height: "48px",
              boxShadow: "none",
              borderRadius: "6px",
            }}
            className="!bg-[#383838] md:!text-[20px] !text-[18px] !font-medium"
            onClick={() => onStartPlanClicked(PLANS[0])}
          >
            <div className="flex gap-[5px] items-center">
              <span> {t("startsnow")} </span>
              {dir === "ltr" ? (
                <KeyboardArrowRightIcon className="md:text-[28px] text-[24px]" />
              ) : (
                <KeyboardArrowLeftIcon className="md:text-[28px] text-[24px]" />
              )}
            </div>
          </Button>
        </div>

        {/* features */}
        <div className="md:text-[20px] text-[16px]">
          <div className="md:py-[12px] md:px-[16px] py-[9px] px-0 flex gap-[12px] items-center">
            <DoneIcon className="text-[#662978]" />
            <span>{t("free-project-count")}</span>
          </div>

          <div className="md:py-[12px] md:px-[16px] py-[9px] flex gap-[12px] items-center">
            <DoneIcon className="text-[#662978]" />
            <span>{t("free-form-count")}</span>
          </div>

          <div className="md:py-[12px] md:px-[16px] py-[9px] flex gap-[12px] items-center">
            <DoneIcon className="text-[#662978]" />
            <span>{t("free-submission-count")}</span>
          </div>

          <div className="md:py-[12px] md:px-[16px] py-[9px] flex gap-[12px] items-center">
            <DoneIcon className="text-[#662978]" />
            <span>{t("free-storage-size")}</span>
          </div>

          <div className="md:py-[12px] md:px-[16px] py-[9px] flex gap-[12px] items-center text-[#777777]">
            <CloseIcon />
            <span>{t("free-teammember-count")}</span>
          </div>

          <div className="md:py-[12px] md:px-[16px] py-[9px] flex gap-[12px] items-center text-[#777777]">
            <CloseIcon />
            <span>{t("free-subdomain")}</span>
          </div>

          <div className="md:py-[12px] md:px-[16px] py-[9px] flex gap-[12px] items-center text-[#777777]">
            <CloseIcon />
            <span>{t("free-branding")}</span>
          </div>
        </div>
      </div>
      <div
        data-aos={dir === "ltr" ? "zoom-in" : "zoom-in"}
        data-aos-delay="500"
        className="relative"
      >
        <div className="bg-[#6F2268] pl-[12px] pr-[16px] py-[6px] flex gap-[4px] text-white rounded-t-[6px] w-fit absolute left-[50px] translate-y-[-100%]">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.06223 11.0687H7.63723V17.0687C7.63723 18.4687 8.39556 18.752 9.32056 17.702L15.6289 10.5354C16.4039 9.66036 16.0789 8.93536 14.9039 8.93536H12.3289V2.93536C12.3289 1.53536 11.5706 1.25203 10.6456 2.30203L4.33723 9.4687C3.57056 10.352 3.89556 11.0687 5.06223 11.0687Z"
              strokeWidth="1.25"
            />
          </svg>

          <span>{t("powerful")}</span>
        </div>

        {/* plan 1 */}
        <div className="relative border border-my-gray rounded-[20px] p-[32px] flex flex-col gap-[24px]">
          {/* header */}
          <div className="tablet:h-[210px] flex flex-col justify-between tablet:gap-0 gap-[10px]">
            <div className="text-center font-semibold md:text-[30px] text-[24px] leading-[38px]">
              {t("business")}
            </div>
            {!isMonthly && (
              <div className="flex">
                <div className="relative mx-auto">
                  <span className="text-[#5A6183] font-normal text-[18px]">{`SAR ${PLANS[1].price.monthly * 12} / ${t("yearly")}`}</span>
                  <div className="absolute w-[130%] h-[3px] bg-[#AB2346] bg-opacity-70 top-[50%] left-[-15%]"></div>
                </div>
              </div>
            )}

            <div className="flex items-center justify-center gap-[8px] w-full">
              <span className="md:text-[40px] text-[24px] font-semibold">
                {" "}
                {`SAR ${isMonthly ? PLANS[1].price.monthly : PLANS[1].price.yearly}`}{" "}
              </span>
              <span className="md:text-[16px] text-base font-normal">
                {" "}
                {` / ${isMonthly ? t("monthly") : t("yearly")}`}{" "}
              </span>
            </div>

            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                height: "50px",
                boxShadow: "none",
                borderRadius: "6px",
              }}
              className="!bg-my-purple md:!text-[20px] !text-[18px] !font-medium"
              onClick={() => onStartPlanClicked(PLANS[1])}
            >
              <div className="flex gap-[5px] items-center">
                <span> {t("startsnow")} </span>
                {dir === "ltr" ? (
                  <KeyboardArrowRightIcon className="md:text-[28px] text-[24px]" />
                ) : (
                  <KeyboardArrowLeftIcon className="md:text-[28px] text-[24px]" />
                )}
              </div>
            </Button>
          </div>

          {/* features */}
          <div className="md:text-[20px] text-[16px]">
            <div className="md:py-[12px] md:px-[16px] py-[9px] flex gap-[12px] items-center">
              <DoneIcon className="text-[#662978]" />
              <span>{t("business-project-count")}</span>
            </div>

            <div className="md:py-[12px] md:px-[16px] py-[9px] flex gap-[12px] items-center">
              <DoneIcon className="text-[#662978]" />
              <span>{t("business-form-count")}</span>
            </div>

            <div className="md:py-[12px] md:px-[16px] py-[9px] flex gap-[12px] items-center">
              <DoneIcon className="text-[#662978]" />
              <span>{t("business-submission-count")}</span>
            </div>

            <div className="md:py-[12px] md:px-[16px] py-[9px] flex gap-[12px] items-center">
              <DoneIcon className="text-[#662978]" />
              <span>{t("business-storage-size")}</span>
            </div>

            <div className="md:py-[12px] md:px-[16px] py-[9px] flex gap-[12px] items-center text-[#777777]">
              <DoneIcon className="text-[#662978]" />
              <span>{t("business-teammember-count")}</span>
            </div>

            <div className="md:py-[12px] md:px-[16px] py-[9px] flex gap-[12px] items-center text-[#777777]">
              <DoneIcon className="text-[#662978]" />
              <span>{t("business-subdomain")}</span>
            </div>

            <div className="md:py-[12px] md:px-[16px] py-[9px] flex gap-[12px] items-center text-[#777777]">
              <DoneIcon className="text-[#662978]" />
              <span>{t("business-branding")}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SubScriptionSection = () => {
  const t = useTranslations("home");
  const [isMonthly, setIsMonthly] = useState<boolean>(false);

  const IntroductionSection = () => {
    return (
      <div className="flex flex-col xl:gap-[16px] gap-[8px]">
        <MarkItem imgurl="/pricing.svg" title={t("menu-pricing")} minw={20} />

        <div className="xl:text-[40px] md:text-[32px] text-[24px] xl:leading-[48px] text-[#272727] text-center">
          {t("pricing-title")}
        </div>

        <div className="md:py-[10px] flex items-center gap-[8px] text-[#242424] font-semibold leading-[14px] md:text-[20px] text-[16px] mx-auto">
          <span className="">{t("monthly")}</span>
          {/* switch */}
          <Switch flag={isMonthly} onSwitch={setIsMonthly} />
          <div>
            <span className="">{t("yearly")}</span>
            <span
              className="text-[#C4657E] md:text-base text-[12px]"
              dir="ltr"
            >{` 15% ${t("off")} `}</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative 2xl:py-[72px] xl:py-[48px] py-[32px] md:px-0 px-[24px] flex flex-col gap-[32px] rounded-[32px]">
      <IntroductionSection />
      <div className="xl:pt-[30px] max-w-[924px] mx-auto">
        <PlansSection isMonthly={isMonthly} />
      </div>
    </div>
  );
};

export default SubScriptionSection;
