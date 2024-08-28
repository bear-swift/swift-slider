"use client";

import Image from "next/image";
import MarkItem from "./Mark";
import RectContainer from "../Containers/RectContainer";
import { useTranslations } from "next-intl";

const IntroductionSection = () => {
  const t = useTranslations("home");
  return (
    <div
      data-aos="zoom-in"
      data-aos-delay="50"
      className="flex flex-col gap-[48px]"
    >
      {/* intro */}
      <div className="flex flex-col xl:gap-[16px] gap-[8px]">
        <MarkItem imgurl="/audience.svg" title={t("audience")} minw={20} />
        <div className="mx-auto text-center xl:text-[40px] md:text-[32px] text-[24px] xl:leading-[48px]">
          <div>{t("audience-title-1")}</div>
          <div>{t("audience-title-2")}</div>
        </div>
      </div>
    </div>
  );
};

const AudienceCard = ({
  img,
  title,
  description,
}: {
  img: string;
  title: string;
  description: string;
}) => {
  return (
    <>
      <div className="md:block hidden">
        <RectContainer bottomright={false} topright={false}>
          <div className="md:px-[32px] md:py-[36px] p-[20px] flex flex-col gap-[24px]">
            <div>
              <Image
                src={img}
                alt={title}
                width={0}
                height={0}
                sizes="100vw"
                className={`min-w-[24px] w-auto`}
              />
            </div>

            <div className="flex flex-col gap-[8px]">
              <div className="text-[16px] font-medium leading-[24px] text-[#272727]">
                {title}
              </div>
              <div className="text-[#5C5C5C] leading-[20px]">{description}</div>
            </div>
          </div>
        </RectContainer>
      </div>

      <div className="md:hidden block">
        <RectContainer topleft={false} topright={false}>
          <div className="md:px-[32px] md:py-[36px] p-[20px] flex flex-col gap-[24px]">
            <div>
              <Image
                src={img}
                alt={title}
                width={0}
                height={0}
                sizes="100vw"
                className={`min-w-[24px] w-auto`}
              />
            </div>

            <div className="flex flex-col gap-[8px]">
              <div className="text-[16px] font-medium leading-[24px] text-[#272727]">
                {title}
              </div>
              <div className="text-[#5C5C5C] leading-[20px]">{description}</div>
            </div>
          </div>
        </RectContainer>
      </div>
    </>
  );
};

const AudienceSection = () => {
  const t = useTranslations("home");
  return (
    <div
      data-aos="zoom-in"
      data-aos-delay="50"
      className="xl:py-[48px] py-[32px] flex flex-col gap-[48px] md:px-0 px-[24px]"
    >
      <IntroductionSection />
      <div className="md:block hidden">
        <RectContainer bottomleft={false} topleft={false}>
          <div className="grid grid-cols-3 border-collapse border-y border-my-gray">
            <div className="ltr:border-r border-my-gray">
              <AudienceCard
                img={"/audience-enterprise.svg"}
                title={t("audience-enterprise")}
                description={t("audience-enterprise-description")}
              />
            </div>
            <div className="border-r border-my-gray">
              <AudienceCard
                img={"/audience-agency.svg"}
                title={t("audience-agencies")}
                description={t("audience-agencies-description")}
              />
            </div>
            <div className="rtl:border-r border-my-gray">
              <AudienceCard
                img={"/audience-student.svg"}
                title={t("audience-students")}
                description={t("audience-students-description")}
              />
            </div>
          </div>
        </RectContainer>
      </div>

      <div className="md:hidden">
        <RectContainer bottomleft={false} bottomright={false}>
          <div className="border border-my-gray">
            <div className="border-b border-my-gray">
              <AudienceCard
                img={"/audience-enterprise.svg"}
                title={t("audience-enterprise")}
                description={t("audience-enterprise-description")}
              />
            </div>
            <div className="border-b border-my-gray">
              <AudienceCard
                img={"/audience-agency.svg"}
                title={t("audience-agencies")}
                description={t("audience-agencies-description")}
              />
            </div>
            <div>
              <AudienceCard
                img={"/audience-student.svg"}
                title={t("audience-students")}
                description={t("audience-students-description")}
              />
            </div>
          </div>
        </RectContainer>
      </div>
    </div>
  );
};

export default AudienceSection;
