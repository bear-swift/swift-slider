"use client";

import { ContactInfo } from "@/types/Contact";
import { useState } from "react";
import MarkItem from "../home/Content/Mark";
import {
  Button,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import CountrySelect from "@/components/Landing/CountrySelect";
import { MuiPhone } from "@/components/Landing/PhoneSelect";
import { useTranslations } from "next-intl";

type IData = Pick<
  ContactInfo,
  | "firstName"
  | "lastName"
  | "email"
  | "mobile"
  | "company"
  | "job"
  | "companySize"
  | "countryOfOperation"
  | "companySector"
  | "companyWebsite"
>;

const contactusSchema = yup
  .object({
    firstName: yup.string().required("This field is required."),
    lastName: yup.string().required("This field is required."),
    email: yup.string().email().required("This field is required."),
    mobile: yup
      .string()
      .matches(/^\d{8}$/, "Must be exactly 8 digits")
      .required("This field is required."),
    company: yup.string().required("This field is required."),
    job: yup.string().required("This field is required."),
    companySize: yup.string().required("This field is required."),
    countryOfOperation: yup.string().required("This field is required."),
    companySector: yup.string().required("This field is required."),
    companyWebsite: yup.string().required("This field is required."),
  })
  .required();

const ContentSection = () => {
  const t = useTranslations("contactus");
  const [info, setInfo] = useState<ContactInfo | null>();
  const [phone, setPhone] = useState<string>("");
  const { register, handleSubmit, control, watch, formState, reset } =
    useForm<IData>({
      resolver: yupResolver<IData>(contactusSchema),
    });

  const onSendMessageClicked = () => {};

  const onChangePhone = (_phone: string) => {
    setPhone(_phone);
  };

  return (
    <div className="py-[48px] flex flex-col gap-[48px]">
      {/* intro */}
      <div
        className="flex flex-col gap-[24px] text-center"
        data-aos="zoom-in"
        data-aos-delay="50"
      >
        <MarkItem imgurl="/contactus.svg" title={t("contactus")} minw={20} />
        <div className="xl:text-[40px] md:text-[32px] text-[24px] text-[#272727]">
          {t("title")}
        </div>
      </div>

      <div
        className="tablet:grid flex flex-col grid-cols-2 gap-[16px] tablet:w-[580px] mx-auto w-full px-[60px] tablet:px-0"
        data-aos="zoom-in"
        data-aos-delay="550"
      >
        {/* first name */}
        <div className="flex flex-col gap-[8px]">
          <div className="font-medium text-[16px]">{t("firstname")}</div>
          <OutlinedInput
            autoFocus={true}
            fullWidth
            placeholder={t("firstname-placeholder")}
            className="!rounded-[5px] !h-[48px] !text-[14px]"
          />
        </div>

        {/* last name */}
        <div className="flex flex-col gap-[8px]">
          <div className="font-medium text-[16px]">{t("lastname")}</div>
          <OutlinedInput
            fullWidth
            placeholder={t("lastname-placeholder")}
            className="!rounded-[5px] !h-[48px] !text-[14px]"
          />
        </div>

        {/* email */}
        <div className="flex flex-col gap-[8px]">
          <div className="font-medium text-[16px]">{t("emailaddress")}</div>
          <OutlinedInput
            fullWidth
            placeholder={t("emailaddress-placeholder")}
            className="!rounded-[5px] !h-[48px] !text-[14px]"
          />
        </div>

        {/* mobile */}
        <div className="flex flex-col gap-[8px]">
          <div className="font-medium text-[16px]">{t("phonenumber")}</div>
          <div className="h-[48px]">
            <MuiPhone
              value={phone}
              onChange={setPhone}
              sx={{
                "& .MuiInputBase-root": {
                  height: "48px", // Change the height here
                },
                width: "100%",
              }}
            />
          </div>
        </div>

        {/* company name */}
        <div className="flex flex-col gap-[8px]">
          <div className="font-medium text-[16px]">{t("companyname")}</div>
          <OutlinedInput
            fullWidth
            placeholder={t("companyname-placeholder")}
            className="!rounded-[5px] !h-[48px] !text-[14px]"
          />
        </div>

        {/* job title */}
        <div className="flex flex-col gap-[8px]">
          <div className="font-medium text-[16px]">{t("jobtitle")}</div>
          <OutlinedInput
            fullWidth
            placeholder={t("jobtitle-placeholder")}
            className="!rounded-[5px] !h-[48px] !text-[14px]"
          />
        </div>

        {/* company size */}
        <div className="flex flex-col gap-[8px]">
          <div className="font-medium text-[16px]">{t("companysize")}</div>
          <Select
            placeholder={t("companysize-placeholder")}
            IconComponent={KeyboardArrowDownIcon}
            displayEmpty
            className="!w-full !h-[48px]"
            MenuProps={{
              PaperProps: {
                style: {
                  maxHeight: 300, // Set your desired max height here
                },
              },
            }}
          >
            <MenuItem>{`1 ~ 5`}</MenuItem>
            <MenuItem>{`5 ~ 10`}</MenuItem>
          </Select>
        </div>

        {/* country */}
        <div className="flex flex-col gap-[8px]">
          <div className="font-medium text-[16px]">
            {t("countryofoperation")}
          </div>
          <div className="h-[48px]">
            <CountrySelect />
          </div>
        </div>

        {/* Company sector */}
        <div className="flex flex-col gap-[8px]">
          <div className="font-medium text-[16px]">{t("companysector")}</div>
          <Select
            IconComponent={KeyboardArrowDownIcon}
            displayEmpty
            className="!w-full !h-[48px]"
            MenuProps={{
              PaperProps: {
                style: {
                  maxHeight: 300, // Set your desired max height here
                },
              },
            }}
          >
            <MenuItem>{`Sector 1`}</MenuItem>
            <MenuItem>{`Sector 2`}</MenuItem>
          </Select>
        </div>

        {/* Company website */}
        <div className="flex flex-col gap-[8px]">
          <div className="font-medium text-[16px]">{t("companywebsite")}</div>
          <OutlinedInput
            fullWidth
            placeholder={t("companywebsite-placeholder")}
            className="!rounded-[5px] !h-[48px] !text-[14px]"
          />
        </div>

        {/* message */}
        <div className="col-span-2">
          <div className="font-medium text-[16px]">{t("message")}</div>
          <OutlinedInput
            minRows={3}
            maxRows={10}
            multiline
            fullWidth
            placeholder={t("message-placeholder")}
            className="!rounded-[5px] !text-[14px]"
          />
        </div>

        <div className="col-span-2">
          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              height: "40px",
              boxShadow: "none",
              borderRadius: "7px",
              width: "100%",
            }}
            className="!bg-[#662978] !text-[16px] !font-medium"
            onClick={onSendMessageClicked}
          >
            {t("sendmessage")}
          </Button>
        </div>
      </div>
    </div>
  );
};
export default ContentSection;
