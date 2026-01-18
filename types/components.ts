// Button
export type Button = {
  className?: string;
  variant?:
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

// Stepper
export type stepperType = {
  label: string;
  path: string;
};
