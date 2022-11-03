import { Radio as RadioAntd, RadioGroupProps, RadioProps as RadioAntdProps } from "antd";
import React, { FC } from "react";
import concatClasses from "utils/concatClasses";
import style from "./Radio.module.scss";

type RadioProps = RadioAntdProps & {};

const Radio = ({ className, ...props }: RadioProps): JSX.Element => {
  return <RadioAntd className={concatClasses(className, style.radio)} {...props} />;
};

const RadioGroup: FC<RadioGroupProps> = ({ ...props }) => {
  return <RadioAntd.Group {...props} />;
};

Radio.Group = RadioGroup;

export default Radio;
