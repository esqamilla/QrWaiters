import { Input as InputAntd, InputProps as InputAntdProps } from "antd";
import style from "components/FormControls/Input/Input.module.scss";
import React from "react";
import concatClasses from "utils/concatClasses";

interface InputProps extends InputAntdProps {}

const Input = ({ className, ...props }: InputProps): JSX.Element => {
  return <InputAntd className={concatClasses(style.input, className)} {...props} />;
};

const InputPassword = ({ className, ...props }: InputProps): JSX.Element => {
  return <InputAntd.Password className={concatClasses(style.input, style.input_password, className)} {...props} />;
};

Input.Password = InputPassword;

export default Input;
