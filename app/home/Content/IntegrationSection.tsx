"use client";

import Image from "next/image";
import MarkItem from "./Mark";
import { useTranslations } from "next-intl";

const IntroductionSection = () => {
  const t = useTranslations("home");
  return (
    <div
      data-aos="zoom-in"
      data-aos-delay="50"
      className="md:py-[48px] py-[24px] flex flex-col"
    >
      {/* intro */}
      <div className="flex flex-col xl:gap-[16px] gap-[8px] text-center">
        <MarkItem
          imgurl="/integration.svg"
          title={t("menu-integration")}
          minw={20}
        />
        <div className="mx-auto xl:max-w-[500px] max-w-[400px] xl:text-[40px] md:text-[32px] text-[24px]">
          {t("integration-title")}
        </div>
        <div className="md:text-[20px] text-[16px] mx-auto max-w-[506px] ">
          {t("integration-description")}
        </div>
      </div>
    </div>
  );
};

const IntegrationItem = ({ img, bg }: { img: string; bg: string }) => {
  return (
    <div className="relative lg:w-[102px] md:w-[82px] w-[40px] lg:h-[130px] md:h-[110px] h-[40px]">
      <div className="absolute left-[-28px] lg:w-[130px] lg:h-[130px] md:w-[110px] md:h-[110px] w-[40px] h-[40px] rounded-full bg-white flex items-center justify-center">
        <div
          className={`lg:w-[120px] lg:h-[120px] md:w-[100px] md:h-[100px] w-[36px] h-[36px] rounded-full ${bg} flex items-center justify-center`}
        >
          <Image
            src={img}
            alt={`integration item`}
            width={0}
            height={0}
            sizes="100vw"
            className="w-fit"
          />
        </div>
      </div>
    </div>
  );
};

const IntegrationItems: { bg: string; img: string }[] = [
  { img: "/integration-mailchimp-logo.png", bg: "bg-[#FFEE83]" },
  { img: "/integration-google-analytics-logo.png", bg: "bg-[#FCF1E5]" },
  { img: "/integration-teams-logo.png", bg: "bg-[#F6F4FF]" },
  { img: "/integration-zendesk-logo.png", bg: "bg-[#F2F2F5]" },
  { img: "/integration-slack-logo.png", bg: "bg-[#E5F4FF]" },
  { img: "/integration-clickup-logo.png", bg: "bg-[#F6F4FF]" },
  { img: "/integration-gmail-logo.png", bg: "bg-[#E8F9F0]" },
  { img: "/integration-excel-logo.png", bg: "bg-[#FFEE83]" },
  { img: "/integration-discord-logo.png", bg: "bg-[#F6F4FF]" },
  { img: "/integration-ring-logo.png", bg: "bg-[#F2F2F5]" },
  { img: "/integration-azure-logo.png", bg: "bg-[#E8F3FD]" },
];

const IntegrationSection = () => {
  return (
    <div data-aos="zoom-in" data-aos-delay="50" className="md:p-0 px-[24px]">
      <IntroductionSection />
      {/* integration item list */}
      <div className="flex pl-[28px] justify-center xl:pb-[48px] md:pb-[36px] pb-[16px]">
        {IntegrationItems.map(({ bg, img }, index) => {
          return <IntegrationItem bg={bg} img={img} key={index} />;
        })}
      </div>
    </div>
  );
};

export default IntegrationSection;
