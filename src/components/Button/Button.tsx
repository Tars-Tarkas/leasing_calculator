import React, { FC } from "react";
import styled from "./Button.module.scss";

type ButtonProps = {
  text: string;
};
export const Button: FC<ButtonProps> = (props, ...rest) => {
  const {} = props;
  return <button></button>;
};
