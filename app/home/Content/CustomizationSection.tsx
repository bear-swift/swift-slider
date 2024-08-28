"use client";

import Image from "next/image";
import MarkItem from "./Mark";
import RectContainer from "../Containers/RectContainer";
import { useAppSelector } from "@/store/hooks";
import { useTranslations } from "next-intl";

const IntroductionSection = () => {
  const t = useTranslations("home");
  return (
    <div
      data-aos="zoom-in"
      data-aos-delay="500"
      className="xl:py-[48px] py-[32px] flex flex-col xl:gap-[16px] gap-[8px]"
    >
      <MarkItem
        imgurl="/customization.svg"
        title={t("customization")}
        minw={20}
      />
      <div className="mx-auto xl:max-w-[700px] max-w-[600px] xl:text-[40px] md:text-[32px] text-[24px] text-center">
        {t("customization-title")}
      </div>
    </div>
  );
};

const CustomizationCard = ({
  img,
  title,
  description,
}: {
  img: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="lg:p-[32px] p-[24px] flex xl:gap-[16px] gap-[8px]">
      <div>
        <div className="w-[44px] h-[44px] rounded-full border border-[#8F8F8F] flex items-center justify-center">
          <Image
            src={img}
            alt={`Customization item`}
            width={0}
            height={0}
            sizes="100vw"
            className="min-w-[20px] w-auto"
          />
        </div>
      </div>

      <div className="flex flex-col gap-[8px]">
        <div className="text-[#242424] font-semibold md:text-[16px]">
          {title}
        </div>
        <div className="text-[#979797] md:text-[14px] text-[12px]">
          {description}
        </div>
      </div>
    </div>
  );
};

// chaning rtl and ltr
const FeaturesSection = () => {
  const t = useTranslations("home");
  return (
    <>
      <div
        data-aos="zoom-in"
        data-aos-delay="500"
        className="md:grid hidden grid-cols-3 md:border-y md:border-my-gray"
      >
        <RectContainer className="border-b ltr:border-r border-my-gray">
          <CustomizationCard
            img={`/customization-diversity.svg`}
            title={t("feature-diversity")}
            description={t("feature-diversity-description")}
          />
        </RectContainer>

        <RectContainer
          className="border-b border-r border-my-gray"
          topleft={false}
          bottomleft={false}
          topright={false}
          bottomright={false}
        >
          <CustomizationCard
            img={`/customization-regex.svg`}
            title={t("feature-regex")}
            description={t("feature-regex-description")}
          />
        </RectContainer>

        <RectContainer className="border-b rtl:border-r border-my-gray">
          <CustomizationCard
            img={`/customization-conditional-logic.svg`}
            title={t("feature-condition-logic")}
            description={t("feature-condition-logic-description")}
          />
        </RectContainer>

        <RectContainer
          className="ltr:border-r border-my-gray"
          topleft={false}
          topright={false}
        >
          <CustomizationCard
            img={`/customization-secure-collaboration.svg`}
            title={t("feature-secure-collaboration")}
            description={t("feature-secure-collaboration-description")}
          />
        </RectContainer>

        <RectContainer
          className="border-r border-my-gray"
          topleft={false}
          bottomleft={false}
          topright={false}
          bottomright={false}
        >
          <CustomizationCard
            img={`/customization-auto-response.svg`}
            title={t("feature-auto-response")}
            description={t("feature-auto-response-description")}
          />
        </RectContainer>

        <RectContainer
          topleft={false}
          topright={false}
          className="rtl:border-r border-my-gray"
        >
          <CustomizationCard
            img={`/customization-email-notification.svg`}
            title={t("feature-email-notification")}
            description={t("feature-email-notification-description")}
          />
        </RectContainer>
      </div>

      <div className="md:hidden px-[24px]">
        <div className="border border-my-gray">
          <RectContainer className="border-b border-my-gray">
            <CustomizationCard
              img={`/customization-diversity.svg`}
              title={t("feature-diversity")}
              description={t("feature-diversity-description")}
            />
          </RectContainer>

          <RectContainer
            className="border-b border-my-gray"
            topleft={false}
            topright={false}
          >
            <CustomizationCard
              img={`/customization-regex.svg`}
              title={t("feature-regex")}
              description={t("feature-regex-description")}
            />
          </RectContainer>

          <RectContainer
            className="border-b border-my-gray"
            topleft={false}
            topright={false}
          >
            <CustomizationCard
              img={`/customization-conditional-logic.svg`}
              title={t("feature-condition-logic")}
              description={t("feature-condition-logic-description")}
            />
          </RectContainer>

          <RectContainer
            className="border-b border-my-gray"
            topleft={false}
            topright={false}
          >
            <CustomizationCard
              img={`/customization-secure-collaboration.svg`}
              title={t("feature-secure-collaboration")}
              description={t("feature-secure-collaboration-description")}
            />
          </RectContainer>

          <RectContainer
            className="border-b border-my-gray"
            topleft={false}
            topright={false}
          >
            <CustomizationCard
              img={`/customization-auto-response.svg`}
              title={t("feature-auto-response")}
              description={t("feature-auto-response-description")}
            />
          </RectContainer>

          <RectContainer topleft={false} topright={false}>
            <CustomizationCard
              img={`/customization-email-notification.svg`}
              title={t("feature-email-notification")}
              description={t("feature-email-notification-description")}
            />
          </RectContainer>
        </div>
      </div>
    </>
  );
};

const DashboardSection = () => {
  const t = useTranslations("home");
  const { dir } = useAppSelector((state) => state.env);

  return (
    <div className="relative">
      <div className="mx-auto max-w-landing 2xl:max-w-2xl-landing lg:max-w-lg-landing md:max-w-md-landing border-x border-my-gray py-[24px] ">
        <div
          data-aos="zoom-in"
          data-aos-delay="500"
          className="relative flex flex-col xl:gap-[80px] md:gap-[40px] gap-[20px] z-[1] md:p-0 px-[16px]"
        >
          <div>
            <Image
              // src={`/dashboard-${dir}.png`}
              src={`/customization-image.gif`}
              alt={`dashboard`}
              width={0}
              height={0}
              sizes="100vw"
              className="lg:min-w-[1152px] md:min-w-[900px] md:w-auto w-full mx-auto"
            />
          </div>

          <div className="lg:grid grid-cols-3 gap-[24px] 2xl:px-[160px] mx-auto">
            {/* non rect */}
            <div className="flex flex-col xl:gap-[20px] lg:gap-[12px] md:text-start text-center">
              {/* insights */}
              <div className="flex md:justify-normal justify-center">
                <div className="rounded-[8px] flex border items-center gap-[8px] border-white border-opacity-10 px-[8px] py-[6px]">
                  <Image
                    src={"/insights.svg"}
                    alt={`dashboard`}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="min-w-[20px] w-auto mx-auto"
                  />

                  <span className="text-[#D1D1D1] font-medium">
                    {t("insights")}
                  </span>
                </div>
              </div>

              <div className="lg:text-[40px] md:text-[32px] sm:text-[24px] text-white lg:leading-[52px]">
                {t("insights-title")}
              </div>
              <div className="text-[16px] text-[#D1D1D1] leading-[24px]">
                {t("insights-description")}
              </div>
            </div>

            {/* description */}
            <div className="col-span-2 pt-[24px]">
              <div className="rounded-[16px] bg-white bg-opacity-10 p-[16px] h-full">
                <div className="md:flex text-white text-center h-full">
                  {/* item */}
                  <div className="flex flex-col gap-[16px] h-full justify-between p-[16px] flex-1">
                    <div>
                      <Image
                        src={"/simplify-management.svg"}
                        alt={`simplify-management`}
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="min-w-[44px] w-auto mx-auto"
                      />
                    </div>
                    <div className="flex flex-col gap-[16px]">
                      <div className="text-[24px] leading-[32px]">
                        {t("simplify-management")}
                      </div>
                      <div className="">
                        {t("simplify-management-description")}
                      </div>
                    </div>
                  </div>
                  <div className="md:block hidden w-[2px] h-full bg-my-gray bg-opacity-30"></div>
                  <div className="md:hidden h-[2px] w-full bg-my-gray bg-opacity-30"></div>
                  {/* item */}
                  <div className="flex flex-col gap-[16px] h-full justify-between p-[16px] flex-1">
                    <div>
                      <Image
                        src={"/informed-decision.svg"}
                        alt={`informed-decision`}
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="min-w-[44px] w-auto mx-auto"
                      />
                    </div>
                    <div className="flex flex-col gap-[16px]">
                      <div className="text-[24px] leading-[32px]">
                        {t("informed-decision")}
                      </div>
                      <div className="">
                        {t("informed-decision-description")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        data-aos="zoom-in"
        data-aos-delay="50"
        className="absolute w-full xl:px-[16px] left-0 bottom-0"
      >
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

const CustomizationSection = () => {
  return (
    <>
      <div className="mx-auto max-w-landing 2xl:max-w-2xl-landing lg:max-w-lg-landing md:max-w-md-landing md:border-x border-my-gray">
        <IntroductionSection />
      </div>
      <div
        data-aos="zoom-in"
        data-aos-delay="50"
        className="xl:py-[48px] md:py-[32px] py-[16px] mx-auto max-w-landing 2xl:max-w-2xl-landing lg:max-w-lg-landing md:max-w-md-landing md:border-x border-my-gray"
      >
        <FeaturesSection />
      </div>

      <DashboardSection />
    </>
  );
};

export default CustomizationSection;
