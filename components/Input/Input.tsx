import { forwardRef } from "react";

import { InputType } from "./Input.types";

import Tooltip from "./Tooltip/Tooltip";

import S from "./Input.module.css";

export const Input = forwardRef<HTMLInputElement, InputType>(
  ({ actionButton, label, tooltipContent, ...rest }: InputType, ref) => {
    return (
      <div className={S.customInput}>
        <label>
          {label}
          <input {...rest} ref={ref} />
        </label>
        {actionButton && <div className={S.actionWrap}>{actionButton}</div>}
        {tooltipContent && <Tooltip content={tooltipContent} />}
      </div>
    );
  }
);

Input.displayName = "Input";
