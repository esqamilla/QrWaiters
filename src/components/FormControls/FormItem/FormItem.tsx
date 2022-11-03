import { Form, FormItemProps as FormItemAntdProps } from "antd";
import style from "components/FormControls/FormItem/FormItem.module.scss";
import React, { FC, ReactNode } from "react";
import concatClasses from "utils/concatClasses";

interface FormItemProps extends FormItemAntdProps {
  children?: ReactNode;
}

const FormItem: FC<FormItemProps> = ({ children, className, ...props }) => {
  return (
    <Form.Item className={concatClasses(className, style.formItem)} {...props}>
      {children}
    </Form.Item>
  );
};

export default FormItem;
