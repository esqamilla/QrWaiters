import { notification } from "antd";
import { ReactNode } from "react";
import concatClasses from "utils/concatClasses";
import style from "./OpenNotification.module.scss";

type NotificationType = "success" | "info" | "warning" | "error";
type Layout = "vertical" | "horizontal";

export interface OpenNotificationProps {
  title: string;
  type?: NotificationType;
  className?: string;
  description?: string;
  layout?: Layout;
  extraContent?: ReactNode;
  duration?: number | null;
}

const getClassByLayout: Record<Layout, string> = {
  horizontal: style.notification_horizontal,
  vertical: "",
};

const openNotification = ({
  type,
  title,
  className,
  description,
  layout = "vertical",
  extraContent,
  duration,
}: OpenNotificationProps) => {
  (type ? notification[type] : notification.open)({
    message: title,
    description,
    duration,
    className: concatClasses(className, style.notification, getClassByLayout[layout]),
    btn: extraContent,
  });
};

export default openNotification;
