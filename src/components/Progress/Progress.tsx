import { Progress as ProgressAntd, ProgressProps as ProgressAntdProps } from "antd";
import { StarIcon } from "components/Icons/Icons";
import React, { FC } from "react";
import concatClasses from "utils/concatClasses";
import style from "./Progress.module.scss";

type ProgressScale = "small" | "default" | "large";

interface ProgressProps extends Omit<ProgressAntdProps, "size"> {
  scale?: ProgressScale;
}

const getStyleByScale: Record<ProgressScale, string> = {
  default: style.progress_defaultSize,
  small: style.progress_smallSize,
  large: style.progress_largeSize,
};

const Progress: FC<ProgressProps> = ({ className, scale = "default", ...props }) => {
  return (
    <ProgressAntd
      className={concatClasses(className, style.progress, getStyleByScale[scale])}
      strokeWidth={5}
      strokeColor={"#08BA44"}
      format={(percent) =>
        percent === 100 ? <StarIcon className={style.icon} wrapperClassName={style.icon_wrapper} /> : `${percent}%`
      }
      {...props}
    />
  );
};

export default Progress;
