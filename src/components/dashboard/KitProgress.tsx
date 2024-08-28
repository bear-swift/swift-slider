import Image from "next/image";

interface KitProgressProps {
  percent: number;
}
const KitProgress = ({ percent = 40 }: KitProgressProps) => {
  return (
    <div className="h-[32px] rounded-[12px] bg-[#F7F7F7] flex items-center">
      <div
        className="relative bg-[#16B54F] h-full rounded-[12px] flex items-center"
        style={{ width: `${percent}%` }}
      >
      </div>
      <Image
        src="/images/percent.png"
        alt="percent"
        width={26}
        height={32}
        sizes="100vw"
      />
      <span className="px-[12px] text-my-gray">{`${percent}%`}</span>
    </div >
  );
};

export default KitProgress;
