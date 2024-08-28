"use client";

import EdgeContainer from "../Containers/EdgeContainer";
import { ReactNode, useState } from "react";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

import ExpandMoreIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";

import { FAQItem } from "@/types";
import MarkItem from "./Mark";
import { FAQLIST_EN, FAQLIST_AR } from "@/constants/faq";
import { useAppSelector } from "@/store/hooks";
import { useTranslations } from "next-intl";

const FAQIntroSection = () => {
  const t = useTranslations("home");
  return (
    <EdgeContainer className="border-b border-my-gray">
      <div
        data-aos="zoom-in"
        data-aos-delay="50"
        className="xl:py-[48px] md:py-[36px] py-[16px] flex flex-col xl:gap-[16px] gap-[8px]"
      >
        <MarkItem imgurl={"/faq.svg"} title={t("menu-faq")} minw={20} />
        <div className="xl:max-w-[400px] lg:max-w-[320px] xl:leading-[42px] xl:text-[40px] md:text-[32px] text-[24px] text-my-black text-center mx-auto">
          <div>{t("faq-title-1")}</div>
          <div>{t("faq-title-2")}</div>
        </div>
      </div>
    </EdgeContainer>
  );
};

const FAQAccordion = ({
  faq,
  expanded,
  value,
  onChange,
}: {
  faq: FAQItem;
  expanded: boolean;
  value: number;
  onChange: (v: number) => void;
}) => {
  return (
    <div data-aos={"zoom-in"} data-aos-delay={value * 300}>
      <Accordion
        elevation={0}
        expanded={expanded}
        onChange={() => onChange(value)}
        disableGutters
        className="!border !border-my-gray !rounded-[14px] shadow-button"
        sx={{
          "&.MuiAccordion-root::before": {
            content: "none",
          },
        }}
      >
        <AccordionSummary
          expandIcon={expanded ? <RemoveOutlinedIcon /> : <ExpandMoreIcon />}
          sx={{
            height: "56px",
            padding: "16px 20px",
          }}
        >
          <div className="font-medium text-[16px] leading-[24px] text-my-black">
            {faq.question}
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="text-[16px] leading-[24px] text-my-black">
            {faq.answer}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

const FAQSection = () => {
  const t = useTranslations("home");
  const { lang } = useAppSelector((state) => state.env);
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  const onChangeIndex = (id: number) => {
    setActiveIndex(activeIndex == id ? -1 : id);
  };

  const faqlist: FAQItem[] = lang === "en" ? FAQLIST_EN : FAQLIST_AR;

  return (
    <>
      {/* introduction */}
      <FAQIntroSection />

      {/* FAQ Content */}
      <div
        data-aos="zoom-in"
        data-aos-delay="50"
        className="max-w-[850px] xl:py-[48px] md:py-[24px] py-[16px] mx-auto flex flex-col gap-[16px] md:px-0 px-[24px]"
      >
        <div className="flex flex-col gap-[16px]">
          {faqlist.map((faq: FAQItem, index: number) => (
            <FAQAccordion
              faq={faq}
              key={index}
              expanded={activeIndex === index}
              value={index}
              onChange={onChangeIndex}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default FAQSection;
