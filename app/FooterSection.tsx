"use client";

import LinkItem from "@/components/Landing/LinkItem";
import { useTranslations } from "next-intl";
import Image from "next/image";
import EdgeContainer from "./home/Containers/EdgeContainer";

const BottomMenu = () => {
  const t = useTranslations("home");
  return (
    <div
      data-aos="zoom-in"
      data-aos-delay="50"
      className="md:py-[32px] py-[16px] px-[24px] flex md:flex-row flex-col justify-between md:gap-[24px] gap-[16px]"
    >
      {/* logo */}
      <div>
        <Image
          src={"/landing-logo.svg"}
          alt={"logo"}
          width={0}
          height={0}
          sizes="100vw"
          className="w-[150px] mx-auto"
        />
      </div>

      {/* links */}
      <div className="flex md:flex-row flex-col justify-center items-center gap-[8px] text-[16px] font-medium mx-auto">
        <LinkItem href="/#features">{t("menu-feature")}</LinkItem>
        <LinkItem href="/#integrations">{t("menu-integration")}</LinkItem>
        <LinkItem href="/#pricing">{t("menu-pricing")}</LinkItem>
        <LinkItem href="/#faq">{t("menu-faq")}</LinkItem>
        <LinkItem href="/contactus">{t("menu-contactus")}</LinkItem>
      </div>
      {/* linkedin and x */}
      <div className="flex gap-[8px] md:justify-end justify-center md:w-[130px]">
        <a href="https://linkedin.com" target="_blank">
          <Image
            src={"/linkedin-1.svg"}
            alt={"linkedin"}
            width={0}
            height={0}
            sizes="100vw"
            className="w-[24px]"
          />
        </a>
        <a href="https://twitter.com" target="_blank">
          <Image
            src={"/x.svg"}
            alt={"x"}
            width={0}
            height={0}
            sizes="100vw"
            className="w-[24px]"
          />
        </a>
      </div>
    </div>
  );
};

const FooterSection = () => {
  const t = useTranslations("home");

  return (
    <>
      <div className="border-b border-my-gray">
        <div className="max-w-landing 2xl:max-w-2xl-landing lg:max-w-lg-landing md:max-w-md-landing mx-auto md:border-x border-my-gray">
          <EdgeContainer>
            <BottomMenu />
          </EdgeContainer>
        </div>
      </div>

      <div className="max-w-landing 2xl:max-w-2xl-landing lg:max-w-lg-landing md:max-w-md-landing mx-auto">
        <div className="md:h-[84px] px-[24px] flex md:flex-row flex-col items-center justify-between gap-[8px] py-[16px]">
          <div className="flex md:flex-row flex-col gap-[8px] text-center">
            <a href={`/privacy`}>
              <span>{t("privacypolicy")}</span>
              <span> </span>
              <span>{t("termsofservice")}</span>
            </a>
          </div>

          <div className="flex gap-[8px] items-center">
            <span>{t("powerby")}</span>
            <Image
              src={"/poweredby.svg"}
              alt={"linkedin"}
              width={0}
              height={0}
              sizes="100vw"
              className="min-w-[48px] w-auto"
            />
          </div>

          <span>{t("rights")}</span>
        </div>
      </div>
    </>
  );
};

export default FooterSection;
