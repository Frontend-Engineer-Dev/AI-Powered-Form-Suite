export type QuestionType =
  | "text"
  | "email"
  | "number"
  | "radio"
  | "checkbox"
  | "dropdown";

export interface Option {
  id: string;
  label: string;
}

export interface Question {
  id: string;
  title: string;
  type: QuestionType;
  required: boolean;
  options?: Option[];
}

export interface FormSchema {
  id: string;
  title: string;
  description?: string;
  questions: Question[];
}
