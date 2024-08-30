"use client";
import SearchIcon from "@mui/icons-material/Search";
import KitCard from "@/components/dashboard/KitCard";
import { KIT_LIST } from "@/constants/kit";
import { OutlinedInput } from "@mui/material";
import Image from "next/image";
import { FormatTitle } from "@/utils";
interface CategoryPageParams {
  params: {
    category: string;
  };
}

const CategoryPage = ({ params }: CategoryPageParams) => {
  const { category } = params;
  const title = FormatTitle(category);

  return (
    <div className="p-[16px] flex flex-col gap-[16px]">
      <div className="flex justify-between items-center">
        <div className="flex gap-[8px] items-center">
          <Image
            src="/images/icons/notepad.png"
            alt="notepad"
            width={14}
            height={14}
            sizes="100vw"
          />
          <div>{`${title} List`}</div>
        </div>

        <OutlinedInput
          placeholder="Search"
          className="!h-[44px] rounded-[12px] border-[#ECECEC]"
          startAdornment={<SearchIcon className="text-[#B3B3B3]" />}
        />
      </div>

      {KIT_LIST.map((item, index) => (
        <KitCard item={item} key={index} />
      ))}
    </div>
  );
};

export default CategoryPage;
