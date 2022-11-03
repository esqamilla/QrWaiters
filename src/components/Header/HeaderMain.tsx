import Balance from "components/Balance/Balance";
import ProfileView from "components/ProfileView/ProfileView";
import React, { FC } from "react";
import concatClasses from "utils/concatClasses";
import style from "./Header.module.scss";

interface HeaderMainProps {
  toggleCollapsed: () => void;
  collapsed: boolean;
  balance?: number;
}

const HeaderMain: FC<HeaderMainProps> = ({ toggleCollapsed, balance, collapsed }) => {
  return (
    <div className={style.header_main}>
      <div className={style.wrapper} onClick={toggleCollapsed}>
        <div className={concatClasses(style.burger, !collapsed && style.burger_open)}>
          <span></span>
        </div>

        <ProfileView className={style.profile} />
      </div>

      <Balance money={balance} className={style.balance} />
    </div>
  );
};

export default HeaderMain;
