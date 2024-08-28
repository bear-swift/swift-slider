import Image from "next/image";

interface MarkItemProps {
  imgurl: string;
  minw: number;
  title: string;
}

const MarkItem = (props: MarkItemProps) => {
  const { imgurl, minw, title } = props;
  return (
    <div className="mx-auto rounded-[8px] border border-my-gray flex gap-[8px] justify-center items-center h-[32px] px-[8px] bg-white text-[#383838]">
      <Image
        src={imgurl}
        alt={"logo"}
        width={20}
        height={20}
        sizes="100vw"
        style={{ minWidth: `${minw}px` }}
      />
      <span className="leading-[20px]">{title}</span>
    </div>
  );
};

export default MarkItem;
