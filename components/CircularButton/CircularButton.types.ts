import React from "react";

export type CircularButtonType = {
  customClass?: string;
  srcImage: string;
  altImage: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
