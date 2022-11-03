import { Button, Layout } from "antd";
import Balance from "components/Balance/Balance";
import { LogOutIcon } from "components/Icons/Icons";
import Menu from "components/Menu/Menu";
import ProfileView from "components/ProfileView/ProfileView";
import { useAppDispatch } from "hooks/reduxHooks";
import React, { FC } from "react";
import { logout } from "store/slices/userSlice";
import concatClasses from "utils/concatClasses";
import style from "./SideBar.module.scss";

const { Sider } = Layout;

interface SideBarProps {
  collapsed: boolean;
  balance?: number;
  closeCollapse: () => void;
}

const SideBar: FC<SideBarProps> = ({ collapsed, balance, closeCollapse }) => {
  const dispatch = useAppDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <Sider width={330} className={concatClasses(style.sider, collapsed && style.sider_collapsed)}>
      <ProfileView className={style.profile} />
      <Balance className={style.balance} money={balance} />
      <Menu closeCollapse={closeCollapse} />
      <Button className={style.button_logout} onClick={onLogout} type={"link"} icon={<LogOutIcon />}>
        Log out
      </Button>
    </Sider>
  );
};

export default SideBar;
