"use client";

import { Button as actionType } from "@/types/components";
import { Button } from "./ui/button";

export default function ActionButton({
  type,
  className,
  children,
}: actionType) {
  return (
    <Button type={type} className={className} size={"lg"}>
      {children}
    </Button>
  );
}
