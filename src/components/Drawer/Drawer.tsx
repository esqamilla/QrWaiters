import { Drawer as DrawerAntd, DrawerProps as DrawerAntdProps } from "antd";
import { CloseCircleIcon } from "components/Icons/Icons";
import React, { FC, ReactNode } from "react";
import concatClasses from "utils/concatClasses";
import style from "./Drawer.module.scss";

interface DrawerProps extends DrawerAntdProps {}

const Drawer = ({
  children,
  className,
  title = "Filters",
  closeIcon = <CloseCircleIcon />,
  placement = "right",
  ...props
}: DrawerProps): JSX.Element => {
  return (
    <DrawerAntd
      placement={placement}
      closeIcon={closeIcon}
      title={title}
      className={concatClasses(style.drawer, className)}
      {...props}>
      {children}
    </DrawerAntd>
  );
};

interface DrawerChapterProps {
  className?: string;
  children?: ReactNode;
}

export const DrawerChapter: FC<DrawerChapterProps> = ({ className, children }) => {
  return <div className={concatClasses(className, style.chapter)}>{children}</div>;
};

interface DrawerContentProps {
  className?: string;
  children?: ReactNode;
}

export const DrawerContent: FC<DrawerContentProps> = ({ className, children }) => {
  return <div className={concatClasses(className, style.content)}>{children}</div>;
};

interface DrawerFooterProps {
  className?: string;
  children?: ReactNode;
}

export const DrawerFooter: FC<DrawerFooterProps> = ({ className, children }) => {
  return <div className={concatClasses(className, style.footer)}>{children}</div>;
};

Drawer.Chapter = DrawerChapter;
Drawer.Content = DrawerContent;
Drawer.Footer = DrawerFooter;

export default Drawer;
