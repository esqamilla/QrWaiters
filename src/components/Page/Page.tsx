import { Typography } from "antd";
import { ParagraphProps } from "antd/es/typography/Paragraph";
import React, { CSSProperties, FC, ReactNode } from "react";
import concatClasses from "utils/concatClasses";
import style from "./Page.module.scss";

const { Title, Paragraph } = Typography;

interface PageProps {
  children: ReactNode;
  className?: string;
}

const Page = ({ children, className }: PageProps): JSX.Element => {
  return <div className={concatClasses(style.page, className)}>{children}</div>;
};

interface PageHeaderProps {
  children: ReactNode;
}

const PageHeader: FC<PageHeaderProps> = ({ children }) => {
  return (
    <Title level={1} className={style.header}>
      {children}
    </Title>
  );
};

interface PageDescriptionProps extends ParagraphProps {
  children: ReactNode;
  className?: string;
}

const PageDescription: FC<PageDescriptionProps> = ({ children, className, ...props }) => {
  return (
    <Paragraph className={concatClasses(style.desc, className)} {...props}>
      {children}
    </Paragraph>
  );
};

interface PageContentProps {
  children: ReactNode;
  className?: string;
  flex?: boolean;
  direction?: CSSProperties["flexDirection"];
  gap?: CSSProperties["gap"];
}

const PageContent: FC<PageContentProps> = ({ children, className, flex = false, direction = "row", gap }) => {
  return (
    <div
      style={{ flexDirection: direction, gap }}
      className={concatClasses(className, style.content, flex && style.content__flex)}>
      {children}
    </div>
  );
};

Page.Header = PageHeader;
Page.Description = PageDescription;
Page.Content = PageContent;

export default Page;
