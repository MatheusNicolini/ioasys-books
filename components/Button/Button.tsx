import { ButtonType } from "./Button.types";

import S from "./Button.module.css";

export const Button = ({ children, ...rest }: ButtonType) => {
  return (
    <button className={S.button} {...rest}>
      {children}
    </button>
  );
};
