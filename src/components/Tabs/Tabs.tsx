import { Tabs as TabsAntd, TabsProps as TabsAntdProps } from "antd";
import React, { FC } from "react";
import concatClasses from "utils/concatClasses";
import style from "./Tabs.module.scss";

interface TabsProps extends TabsAntdProps {}

const Tabs: FC<TabsProps> = ({ className, ...props }) => {
  return <TabsAntd className={concatClasses(className, style.tabs)} {...props} />;
};

export default Tabs;
