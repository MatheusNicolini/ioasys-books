import { useMemo } from "react";
import Image from "next/image";

import { PageTitleType } from "./PageTitle.types";

import S from "./PageTitle.module.css";

export const PageTitle = ({
  customClass,
  imgSrc,
  imgWidth,
  imgHeight,
  altImage,
  title,
}: PageTitleType) => {
  const renderCustomClass = useMemo(() => {
    return customClass ? customClass : "";
  }, [customClass]);

  return (
    <div className={`${S.wrapLogo} ${S.darkTitle} ${renderCustomClass}`}>
      <Image src={imgSrc} width={imgWidth} height={imgHeight} alt={altImage} />
      <h1>{title}</h1>
    </div>
  );
};
