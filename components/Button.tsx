"use client";

import { Button as actionType } from "@/types/components";
import { Button } from "./ui/button";

export default function ActionButton({ type, className, children, variant }: actionType) {
  return (
    <Button variant={variant} type={type} className={className}>
      {children}
    </Button>
  );
}
