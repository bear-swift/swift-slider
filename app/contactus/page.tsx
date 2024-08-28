"use client";

import FooterSection from "../FooterSection";
import HeaderSection from "../HeaderSection";
import ContentSection from "./Content";

const ContactPage = () => {
  return (
    <>
      <HeaderSection />
      <div className="max-w-landing 2xl:max-w-2xl-landing lg:max-w-lg-landing md:max-w-md-landing mx-auto">
        <div className="border-x border-my-gray md:border-t-0 border-t">
          <ContentSection />
        </div>
      </div>
      <FooterSection />
    </>
  );
};

export default ContactPage;
