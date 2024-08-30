"use client";

import Image from "next/image";
import { PROJECT_LIST } from "@/constants/project";
import ProjectCard from "@/components/dashboard/ProjectCard";
import { useState } from "react";
import { FormatTitle } from "@/utils";

interface KitPageParams {
  params: {
    category: string;
    kit: string;
  };
}

const KitPage = ({ params }: KitPageParams) => {
  const { category, kit } = params;
  const title = FormatTitle(kit);

  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <div className="p-[16px] flex flex-col gap-[16px] bg-white">
      <div className="flex justify-between items-center">
        <div className="flex gap-[8px] items-center">
          <Image
            src="/images/books.png"
            alt="projects"
            width={14}
            height={14}
            sizes="100vw"
          />
          <div>{`${title} Projects`}</div>
        </div>
      </div>
      <div className="flex gap-[16px] flex-wrap">
        {PROJECT_LIST.map((item, index) => (
          <ProjectCard
            item={item}
            key={index}
            selected={selectedIndex === index}
            onClick={() => setSelectedIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default KitPage;
