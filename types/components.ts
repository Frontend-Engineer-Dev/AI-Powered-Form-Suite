// Button
export type Button = {
  className?: string;
  varient?:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | null
    | undefined;
  type: "submit" | "button" | "reset";
  children?: React.ReactNode;
  action?: () => void;
};
