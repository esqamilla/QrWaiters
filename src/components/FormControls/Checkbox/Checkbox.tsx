import { Checkbox as CheckBoxAntd, CheckboxProps as CheckboxAntdProps } from "antd";
import React, { FC } from "react";
import concatClasses from "utils/concatClasses";
import style from "./Checkbox.module.scss";

type CheckboxAlign = "top" | "center" | "bottom";

interface CheckboxProps extends CheckboxAntdProps {
  align?: CheckboxAlign;
}

const getClassByAlign: Record<CheckboxAlign, string> = {
  top: style.checkbox_topAlign,
  center: style.checkbox_centerAlign,
  bottom: style.checkbox_bottomAlign,
};

const Checkbox: FC<CheckboxProps> = ({ className, align = "center", ...props }) => {
  return <CheckBoxAntd className={concatClasses(className, style.checkbox, getClassByAlign[align])} {...props} />;
};

export default Checkbox;
