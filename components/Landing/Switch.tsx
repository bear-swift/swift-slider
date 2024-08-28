import { useAppSelector } from "@/store/hooks";
import { useEffect, useState } from "react";

interface SwitchProps {
  flag?: boolean;
  onSwitch?: (_f: boolean) => void;
}

const Switch = (props: SwitchProps) => {
  const { lang } = useAppSelector((state) => state.env);
  const { flag: prevFlag, onSwitch } = props;

  const [flag, setFlag] = useState<boolean>(false);
  useEffect(() => {
    setFlag(prevFlag || false);
  }, [prevFlag]);

  const onClicked = () => {
    setFlag(!flag);
    if (onSwitch) onSwitch(!flag);
  };

  return (
    <div
      className="relative rounded-full w-[64px] h-[36px] bg-[#6F2268] cursor-pointer"
      onClick={onClicked}
    >
      <div
        className={`absolute p-[4px] ${(lang === "en" ? flag : !flag) ? "left-0" : "right-0"}`}
      >
        <div className={`rounded-full w-[28px] h-[28px] bg-white`}></div>
      </div>
    </div>
  );
};

export default Switch;
