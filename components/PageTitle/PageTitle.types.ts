import React from "react";

export type PageTitleType = {
  customClass?: string;
  imgSrc: string;
  imgWidth: number;
  imgHeight: number;
  altImage: string;
  title: string;
} & React.HTMLAttributes<HTMLDivElement>;
