import { ComponentProps, FC } from "react";
import styled from "./Button.module.scss";

export const Button: FC<ComponentProps<"button">> = ({ disabled, ...rest }) => {
  return (
    <button
      className={`${styled.style} ${disabled ? `${styled.disabled}` : ""}`}
      {...rest}
    ></button>
  );
};
