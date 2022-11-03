import { Select as SelectAntd, SelectProps as SelectPropsAntd } from "antd";
import style from "components/FormControls/Select/Select.module.scss";
import React, { FC } from "react";
import concatClasses from "utils/concatClasses";

interface SelectProps extends SelectPropsAntd {}

const Select: FC<SelectProps> = ({ className, dropdownClassName, listHeight = 150, ...props }) => {
  return (
    <SelectAntd
      listHeight={listHeight}
      popupClassName={concatClasses(dropdownClassName, style.select_popup)}
      className={concatClasses(className, style.select)}
      {...props}
    />
  );
};

export default Select;
