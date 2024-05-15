import { TooltipType } from "./Tooltip.types";

import S from "./Tooltip.module.css";

const Tooltip = ({ content }: TooltipType) => {
  return <div className={S.tooltip}>{content}</div>;
};

export default Tooltip;
