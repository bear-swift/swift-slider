import { DifficultyLevel } from "@/types/project";

interface LevelItemProps {
  level: DifficultyLevel;
}

const LevelItem = ({ level }: LevelItemProps) => {
  let color = "";
  if (level === "Easy") color = "#16B54F";
  else if (level === "Medium") color = "#F4961D";
  else if (level === "Hard") color = "#FC477E";

  return (
    <div
      className={`h-[21px] border rounded-full px-[8px] flex items-center justify-center font-bold text-[10px] bg-white`}
      style={{ borderColor: color, color: color }}
    >
      {`Level: ${level}`}
    </div>
  );
};

export default LevelItem;
