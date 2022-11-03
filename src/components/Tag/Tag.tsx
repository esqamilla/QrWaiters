import { Tag as TagAntd } from "antd";
import React, { FC, ReactNode } from "react";
import concatClasses from "utils/concatClasses";
import style from "./Tag.module.scss";

interface TagProps {
  type?: TagType;
  children: ReactNode;
  className?: string;
}

export type TagType = "info" | "success" | "warning" | "danger" | "accentPrimary";

const tagColorByType: Record<TagType, string> = {
  info: "#1991ff",
  success: "#4fc62b",
  warning: "#ffb649",
  danger: "#ff3a30",
  accentPrimary: "#1f33e8",
};

const Tag: FC<TagProps> = ({ children, type = "info", className, ...props }) => {
  return (
    <TagAntd className={concatClasses(className, style.tag)} color={tagColorByType[type]} {...props}>
      {children}
    </TagAntd>
  );
};

export default Tag;
