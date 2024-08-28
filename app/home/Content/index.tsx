"use client";

import Image from "next/image";
import AudienceSection from "./AudienceSection";
import CompareSection from "./CompareSection";
import CustomizationSection from "./CustomizationSection";
import FAQSection from "./FAQ";
import IntegrationSection from "./IntegrationSection";
import SubScriptionSection from "./SubscriptionSection";
import TrustedBySection from "./TrustedBySection";

const GridEffect = () => {
  return (
    <div className="absolute w-full">
      <Image
        src={"/grideffects.svg"}
        alt={"effect"}
        width={0}
        height={0}
        sizes="100vw"
        className="lg:min-w-[1280px] w-auto mx-auto"
      />
    </div>
  );
};

const ContentSection = () => {
  return (
    <>
      <TrustedBySection />

      <div id="features">
        <CustomizationSection />
      </div>

      <div
        className="mx-auto max-w-landing 2xl:max-w-2xl-landing lg:max-w-lg-landing md:max-w-md-landing md:border-x border-my-gray"
        id="integrations"
      >
        <IntegrationSection />
      </div>

      <div
        className="relative rounded-[32px] bg-my-gray bg-opacity-30"
        id="pricing"
      >
        <GridEffect />

        <div className="mx-auto max-w-landing 2xl:max-w-2xl-landing lg:max-w-lg-landing md:max-w-md-landing md:border-x border-my-gray">
          <SubScriptionSection />
        </div>
      </div>

      <div className="mx-auto max-w-landing 2xl:max-w-2xl-landing lg:max-w-lg-landing md:max-w-md-landing md:border-x border-my-gray">
        <AudienceSection />
      </div>

      <div className="relative rounded-t-[32px] bg-my-gray bg-opacity-30">
        <GridEffect />

        <div className="mx-auto max-w-landing 2xl:max-w-2xl-landing lg:max-w-lg-landing md:max-w-md-landing md:border-x border-my-gray">
          <CompareSection />
        </div>
      </div>

      <div
        className="mx-auto max-w-landing 2xl:max-w-2xl-landing lg:max-w-lg-landing md:max-w-md-landing md:border-x md:border-b-0"
        id="faq"
      >
        <FAQSection />
      </div>
    </>
  );
};

export default ContentSection;
