// Button
export type Button = {
  className?: string;
  type: "submit" | "button" | "reset";
  children?: React.ReactNode;
  action?: () => void;
};