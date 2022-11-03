import { Button as ButtonAntd, ButtonProps as ButtonAntdProps } from "antd";
import React, { FC } from "react";
import concatClasses from "utils/concatClasses";
import style from "./Buttons.module.scss";

type ButtonTypes = Exclude<ButtonAntdProps["type"], undefined> | "dark";
type ButtonSize = Exclude<ButtonAntdProps["size"], undefined> | "mini";

export interface ButtonProps extends Omit<ButtonAntdProps, "type" | "size"> {
  type?: ButtonTypes;
  size?: ButtonSize;
  onlyIcon?: boolean;
}

const getClassByType: Record<ButtonTypes, string> = {
  dark: style.button_dark,
  default: style.button_default,
  dashed: style.button_dashed,
  ghost: style.button_ghost,
  link: style.button_link,
  primary: style.button_primary,
  text: style.button_text,
};

const getClassBySize: Record<ButtonSize, string> = {
  mini: style.button_mini,
  middle: style.button_middle,
  large: style.button_large,
  small: style.button_small,
};

const Button: FC<ButtonProps> = ({ children, onlyIcon, size = "middle", type = "default", className, ...props }) => {
  return (
    <ButtonAntd
      className={concatClasses(
        className,
        style.button,
        getClassByType[type],
        getClassBySize[size],
        onlyIcon && style.button_icon
      )}
      {...props}>
      {children}
    </ButtonAntd>
  );
};

export default Button;
