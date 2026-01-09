"use client";

import { Button as actionType } from "@/types/components";
import { Button } from "./ui/button";

export default function ActionButton({
  type,
  className,
  children,
  varient,
}: actionType) {
  return (
    <Button variant={varient} type={type} className={className}>
      {children}
    </Button>
  );
}
