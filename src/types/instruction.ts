export interface StepContent {
  type: "text" | "code" | "image" | "funFact" | "challenge" | "description";
  content: string;
  copyRequired?: boolean;
}

export interface SubStep {
  title: string;
  elements: StepContent[];
}

export interface Step {
  title: string;
  description?: String;
  steps: SubStep[];
  additionalContent?: StepContent[];
}

export interface IProjectDetail {
  id: string;
  projectid: string;
  steps: Step[];
  fullcode: string;
}
