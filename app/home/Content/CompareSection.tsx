"use client";

import KeyboardArrowRightSharpIcon from "@mui/icons-material/KeyboardArrowRightSharp";
import InfoIcon from "@mui/icons-material/Info";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";

import EdgeContainer from "../Containers/EdgeContainer";
import MarkItem from "./Mark";
import { Button, Zoom } from "@mui/material";
import { Plan, PlanDetail } from "@/types/Plan";
import { PLANS } from "@/constants/plan";

import styles from "./content.module.css";
import { useTranslations } from "next-intl";

import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/navigation";

const BootstrapTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip
    {...props}
    arrow
    classes={{ popper: className }}
    placement="top-start"
    TransitionComponent={Zoom}
  />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.white,
  }, //
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "#242424",
    fontSize: "14px",
    padding: "4px 8px",
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
    borderRadius: "6px",
  },
}));

const IntroSection = () => {
  const t = useTranslations("home");
  const router = useRouter();
  const onContactUsClicked = () => {
    router.push("contactus");
  };

  return (
    <>
      <div
        data-aos="zoom-in"
        data-aos-delay="50"
        className="text-center flex flex-col xl:gap-[16px] gap-[8px]"
      >
        <MarkItem imgurl="/compare-plan.svg" title={t("compare")} minw={20} />
        <div className="xl:text-[40px] md:text-[32px] text-[24px] text-[#272727]">
          {t("compare-title")}
        </div>
        <div className="md:text-[20px] text-[14px] text-[#5C5C5C]">
          {t("compare-description")}
        </div>
        <div>
          <Button
            variant="outlined"
            sx={{
              textTransform: "none",
              height: "36px",
              borderRadius: "8px",
              paddingLeft: "12px",
              paddingRight: "8px",
            }}
            className="!text-my-black !border-my-gray !text-[16px] !font-medium mx-auto"
            onClick={onContactUsClicked}
          >
            <div className="flex items-center gap-[4px]">
              <span className="text-[16px font-medium]">
                {" "}
                {t("menu-contactus")}{" "}
              </span>
              <KeyboardArrowRightSharpIcon className="text-[#8F8F8F]" />
            </div>
          </Button>
        </div>
      </div>
    </>
  );
};

const ContentTable = () => {
  const t = useTranslations("home");
  const router = useRouter();
  const isMonthly: boolean = false;
  const onStartPlanClicked = (plan: Plan) => {
    router.push("/auth/register");
  };

  return (
    <div
      data-aos="zoom-in"
      data-aos-delay="50"
      className="w-full md:overflow-auto overflow-x-scroll"
    >
      <div className="rounded-[20px] border border-my-gray lg:w-[1152px] mx-auto md:min-w-min min-w-[625px]">
        <table className={`md:w-full ${styles["tablecontainer"]}`}>
          <thead>
            <tr>
              <td className="align-bottom rtl:!border-r-0">
                <div className="py-[32px] pl-[24px]">
                  <span className="font-semibold md:text-[28px] text-[24px]">
                    {t("menu-feature")}
                  </span>
                </div>
              </td>

              <td>
                {/* basic plan */}
                <div className="text-center flex flex-col gap-[16px] px-[24px] py-[32px] font-semibold md:h-[264px] justify-between">
                  <div className="md:text-[28px] text-[16px]">{t("basic")}</div>
                  <div className="md:text-[40px] text-[24px] md:leading-[48px] py-[16px]">
                    {t("free")}
                  </div>
                  <div>
                    <Button
                      variant="contained"
                      sx={{
                        textTransform: "none",
                        height: "40px",
                        boxShadow: "none",
                        borderRadius: "6px",
                      }}
                      className="!bg-[#383838] md:!text-[20px] !text-[16px] !font-medium !min-w-[130px]"
                      onClick={() => onStartPlanClicked(PLANS[0])}
                    >
                      {t("startsnow")}
                    </Button>
                  </div>
                </div>
              </td>

              <td className="rtl:!border-l-0">
                {/* business plan */}
                <div className="text-center flex flex-col gap-[16px] px-[24px] py-[32px] font-semibold md:h-[264px] justify-between">
                  <div className="md:text-[28px] text-[16px]">
                    {t("business")}
                  </div>
                  <div>
                    <div className="flex">
                      <div className="relative mx-auto">
                        <span className="text-[#5A6183] font-normal text-[16px]">{`SAR ${PLANS[1].price.monthly * 12} / ${t("yearly")}`}</span>
                        <div className="absolute w-[130%] h-[3px] bg-[#AB2346] bg-opacity-70 top-[50%] left-[-15%]"></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-[8px] min-w-[300px]  justify-center">
                      <span className="md:text-[40px] text-[24px] tracking-tight">
                        {" "}
                        {`SAR ${isMonthly ? PLANS[1].price.monthly : PLANS[1].price.yearly}`}{" "}
                      </span>
                      <span className="text-[16px] font-normal">
                        {" "}
                        {`/${isMonthly ? t("monthly") : t("yearly")}`}{" "}
                      </span>
                    </div>
                  </div>
                  <div>
                    <Button
                      variant="contained"
                      sx={{
                        textTransform: "none",
                        height: "40px",
                        boxShadow: "none",
                        borderRadius: "6px",
                      }}
                      className="!bg-my-purple md:!text-[20px] !text-[16px] !font-medium !min-w-[130px]"
                      onClick={() => onStartPlanClicked(PLANS[1])}
                    >
                      {t("startsnow")}
                    </Button>
                  </div>
                </div>
              </td>
            </tr>
          </thead>

          <tbody>
            {Object.keys(PLANS[0].detail).map((fieldinfo, index) => {
              const key = fieldinfo as keyof PlanDetail;
              let val0 = PLANS[0].detail[key],
                val1 = PLANS[1].detail[key];

              return (
                <tr key={index}>
                  <td className="rtl:!border-r-0">
                    <div className="flex gap-[10px] items-center px-[24px] py-[10px]">
                      <span className="md:text-[18px] text-[14px]">
                        {t(fieldinfo)}
                      </span>
                      <BootstrapTooltip title={t(`${fieldinfo}-tooltip`)}>
                        <InfoIcon className="text-my-gray" />
                      </BootstrapTooltip>
                    </div>
                  </td>
                  <td>
                    <div className="text-center">
                      {val0 === true && <DoneIcon className="text-[#46C570]" />}
                      {val0 === false && (
                        <CloseIcon className="text-[#EB4E3D]" />
                      )}
                      {typeof val0 === "string" && (
                        <span className="md:text-[18px] text-[14px] text-black">
                          {val0}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="rtl:!border-l-0">
                    <div className="text-center">
                      {val1 === true && <DoneIcon className="text-[#46C570]" />}
                      {val1 === false && (
                        <CloseIcon className="text-[#EB4E3D]" />
                      )}
                      {typeof val1 === "string" && (
                        <span className="md:text-[18px] text-[14px] text-black">
                          {val1}
                        </span>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const CompareSection = () => {
  return (
    <EdgeContainer className="border-b border-my-gray">
      <div className="2xl:py-[72px] xl:py-[48px] py-[32px] flex flex-col gap-[48px] md:px-0 px-[24px]">
        <IntroSection />
        <ContentTable />
      </div>
    </EdgeContainer>
  );
};

export default CompareSection;
