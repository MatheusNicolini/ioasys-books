import React, { ReactNode } from "react";

export type InputType = {
  label: string;
  actionButton?: ReactNode;
  tooltipContent?: string | null;
} & React.InputHTMLAttributes<HTMLInputElement>;
