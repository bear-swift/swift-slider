import Image from "next/image";

interface KitProgressProps {
  percent: number;
}
const KitProgress = ({ percent = 40 }: KitProgressProps) => {
  return (
    <div className="relative h-[32px] rounded-[12px] bg-[#F0F0F0] flex items-center min-w-[400px]">
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
        className="translate-x-[-50%]"
      />
      <span className={`absolute ${percent > 10 ? 'text-white left-[10px]' : 'text-my-gray left-[30px]' } px-[12px]`}>{`${percent}%`}</span>
    </div >
  );
};

export default KitProgress;
