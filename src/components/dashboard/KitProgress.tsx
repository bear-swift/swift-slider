import Image from "next/image";

interface KitProgressProps {
  percent: number;
}
const KitProgress = ({ percent = 40 }: KitProgressProps) => {
  return (
    <div className="relative h-[32px] rounded-[12px] bg-[#F0F0F0] min-w-[400px]">
      <div
        className="bg-[#16B54F] h-full rounded-[12px] flex items-center justify-end"
        style={{ width: `${percent}%` }}
      >
      </div>
      <Image
        src="/images/percent.png"
        alt="percent"
        width={26}
        height={32}
        sizes="100vw"
        className="absolute translate-x-[-50%] top-0" style={{ left: `${percent}%` }}
      />
      <div className={`absolute top-0 h-full flex items-center justify-center ${percent > 10 ? 'text-white left-[10px]' : 'text-my-gray left-[30px]'}`}>
        <span className={`px-[12px]`}>{`${percent}%`}</span>
      </div>
    </div >
  );
};

export default KitProgress;
