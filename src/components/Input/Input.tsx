import { ComponentProps, FC } from "react";
import styled from "./Input.module.scss";

interface IInput extends ComponentProps<"input"> {
  textIcon?: string;
}

export const Input: FC<IInput> = ({ textIcon, ...rest }) => {
  return (
    <div className={styled.block}>
      <input className={styled.style} {...rest}></input>
      {textIcon && <span className={styled.icon}>{textIcon}</span>}
    </div>
  );
};
