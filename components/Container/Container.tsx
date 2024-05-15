import { ContainerType } from "./Container.types";

import S from "./Container.module.css";

export const Container = ({ children, className }: ContainerType) => {
  return <div className={`${S.container} ${className}`}>{children}</div>;
};
