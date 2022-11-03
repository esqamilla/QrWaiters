import { Menu as MenuAntd, MenuProps as MenuAntdProps } from "antd";
import React, { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getSideBarMenuItems } from "staticContent/menu";
import concatClasses from "utils/concatClasses";
import style from "./Menu.module.scss";

interface MenuProps extends MenuAntdProps {
  closeCollapse?: () => void;
}

const Menu: FC<MenuProps> = ({ className, closeCollapse, ...props }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const onSelectMenuItem: MenuProps["onSelect"] = (menuItem) => {
    navigate(menuItem.key);
    closeCollapse && closeCollapse();
  };

  return (
    <MenuAntd
      selectedKeys={[`/${location.pathname.split("/")[1]}`]}
      triggerSubMenuAction="click"
      onSelect={onSelectMenuItem}
      className={concatClasses(className, style.menu)}
      mode="inline"
      items={getSideBarMenuItems({
        transferCount: 45,
      })}
      {...props}
    />
  );
};

export default Menu;
