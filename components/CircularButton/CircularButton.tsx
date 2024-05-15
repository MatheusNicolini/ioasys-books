import Image from "next/image";

import { CircularButtonType } from "./CircularButton.types";

import S from "./CircularButton.module.css";

export const CircularButton = ({
  customClass,
  srcImage,
  altImage,
  ...rest
}: CircularButtonType) => {
  return (
    <button
      data-testid="circular_button"
      className={`${S.circleButton} ${customClass ? customClass : ""}`}
      {...rest}
    >
      <Image src={srcImage} width={16} height={16} alt={altImage} />
    </button>
  );
};
