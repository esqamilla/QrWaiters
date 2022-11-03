import React, { FC, ReactNode } from "react";
import concatClasses from "utils/concatClasses";
import style from "./Blocks.module.scss";

interface ShadowBlockProps {
  width?: number | string;
  children?: ReactNode;
  className?: string;
  hideForMobile?: boolean;
}

const BlockShadow: FC<ShadowBlockProps> = ({ width = 415, children, hideForMobile, className }) => {
  return (
    <div
      style={{
        maxWidth: typeof width === "number" ? `${width}px` : width,
      }}
      className={concatClasses(style.block_shadow, className, hideForMobile && style.block_mobile)}>
      {children}
    </div>
  );
};

export default BlockShadow;
