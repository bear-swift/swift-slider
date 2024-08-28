export type DifficultyLevel = "Easy" | "Medium" | "Hard";

export interface IProjectItem {
  id: string;
  category: string,
  kit: string;
  title: string;
  description: string;
  goal: string;
  level: DifficultyLevel;
  image: string;
}
