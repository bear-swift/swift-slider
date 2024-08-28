"use client";

import Image from "next/image";
import { useState } from "react";

import LandingContainer from "./home/Containers/LandingContainter";
import { Button, Menu, MenuItem } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { changeLanguage } from "@/store/env/env.slice";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import LinkItem from "@/components/Landing/LinkItem";

const LanguagePicker = () => {
  const { lang } = useAppSelector((state) => state.env);
  const title = lang === "en" ? "العربيه" : "En";
  const dispatch = useAppDispatch();

  const onChangeLanguageClicked = (e: any) => {
    dispatch(changeLanguage(lang === "en" ? "ar" : "en"));
  };

  return (
    <>
      <div className="flex gap-[4px]" onClick={onChangeLanguageClicked}>
        <span className="underline cursor-pointer font-medium">{title}</span>
        <Image
          src={"/lang.svg"}
          alt={"logo"}
          width={0}
          height={0}
          sizes="100vw"
          className="min-w-[16px] w-auto"
        />
      </div>
    </>
  );
};

const HeaderSection = () => {
  const router = useRouter();

  const t = useTranslations("home");
  const [expanded, setExpanded] = useState<boolean>(false);
  const onOpenClicked = () => {
    setExpanded(!expanded);
  };

  const onCloseClicked = () => {
    setExpanded(false);
  };

  const onNavigateClicked = () => {
    onCloseClicked();
  };

  const onLoginClicked = () => {
    router.push("/auth/login");
    onCloseClicked();
  };

  const onCreateAccountClicked = () => {
    router.push("/auth/register");
    onCloseClicked();
  };

  const onNavigateHome = () => {
    router.push("/");
  };

  return (
    <>
      <div className="md:block hidden">
        <LandingContainer>
          <div className="h-[84px] px-[24px] flex justify-between items-center">
            {/* logo */}
            <Image
              src={"/landing-logo.svg"}
              alt={"logo"}
              width={0}
              height={0}
              sizes="100vw"
              className="min-w-[130px] w-auto cursor-pointer"
              onClick={onNavigateHome}
            />

            {/* links */}
            <div className="flex justify-center items-center gap-[8px] text-[16px] font-medium">
              <LinkItem href="/#features">{t("menu-feature")}</LinkItem>
              <LinkItem href="/#integrations">{t("menu-integration")}</LinkItem>
              <LinkItem href="/#pricing">{t("menu-pricing")}</LinkItem>
              <LinkItem href="/#faq">{t("menu-faq")}</LinkItem>
              <LinkItem href="/contactus">{t("menu-contactus")}</LinkItem>
            </div>

            {/* lang, login, create */}
            <div className="flex gap-[8px] items-center">
              <LanguagePicker />

              <Button
                variant="outlined"
                sx={{
                  textTransform: "none",
                  height: "40px",
                  borderRadius: "7px",
                }}
                className="!text-my-black !border-my-gray !text-[16px] !font-medium"
                onClick={onLoginClicked}
              >
                {t("login")}
              </Button>

              <Button
                variant="contained"
                sx={{
                  textTransform: "none",
                  height: "40px",
                  boxShadow: "none",
                  borderRadius: "7px",
                }}
                className="!bg-my-purple !text-[16px] !font-medium"
                onClick={onCreateAccountClicked}
              >
                {t("createAccount")}
              </Button>
            </div>
          </div>
        </LandingContainer>
      </div>

      <div className="md:hidden">
        <div className="relative h-[84px] w-full z-[1301]">
          <div className="px-[16px] flex justify-between items-center h-full">
            {/* logo */}
            <Image
              src={"/landing-logo.svg"}
              alt={"logo"}
              width={0}
              height={0}
              sizes="100vw"
              className="min-w-[130px] w-auto cursor-pointer"
              onClick={onNavigateHome}
            />

            <div onClick={onOpenClicked}>
              <Image
                src={
                  expanded ? "/mobile-menu-close.svg" : "/mobile-menu-open.svg"
                }
                alt={"linkedin"}
                width={0}
                height={0}
                sizes="100vw"
                className="min-w-[48px] w-auto"
              />
            </div>
          </div>
        </div>

        <Menu
          anchorEl={null}
          open={expanded}
          onClose={onCloseClicked}
          sx={{
            margin: 0,
            padding: "0px",
            "& .MuiList-root": {
              padding: "0px",
            },
            "& .MuiMenu-paper": {
              top: "0px!important",
              left: "0px!important",
              maxWidth: "100%",
              background: "transparent",
            },
          }}
        >
          <div className="w-screen">
            <div className="h-[84px]"></div>

            <div className="bg-white px-[16px] border-t border-my-gray ">
              <div className="py-[20px] flex flex-col gap-[24px]">
                <div className="flex flex-col gap-[8px]">
                  <div onClick={onNavigateClicked}>
                    <LinkItem href="/#features">{t("menu-feature")}</LinkItem>
                  </div>

                  <div onClick={onNavigateClicked}>
                    <LinkItem href="/#integrations">
                      {t("menu-integration")}
                    </LinkItem>
                  </div>

                  <div onClick={onNavigateClicked}>
                    <LinkItem href="/#pricing">{t("menu-pricing")}</LinkItem>
                  </div>

                  <div onClick={onNavigateClicked}>
                    <LinkItem href="/#faq">{t("menu-faq")}</LinkItem>
                  </div>

                  <div onClick={onNavigateClicked}>
                    <LinkItem href="/contactus">{t("menu-contactus")}</LinkItem>
                  </div>
                </div>

                <div className="flex flex-col gap-[8px]">
                  <div className="flex justify-center">
                    <LanguagePicker />
                  </div>

                  <Button
                    variant="outlined"
                    sx={{
                      textTransform: "none",
                      height: "40px",
                      borderRadius: "7px",
                    }}
                    className="!text-my-black !border-my-gray !text-[16px] !font-medium"
                    onClick={onLoginClicked}
                  >
                    {t("login")}
                  </Button>

                  <Button
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      height: "40px",
                      boxShadow: "none",
                      borderRadius: "7px",
                    }}
                    className="!bg-my-purple !text-[16px] !font-medium"
                    onClick={onCreateAccountClicked}
                  >
                    {t("tryforfree")}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Menu>
      </div>
    </>
  );
};

export default HeaderSection;
