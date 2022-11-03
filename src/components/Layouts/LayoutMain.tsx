import { Layout } from "antd";
import HeaderMain from "components/Header/HeaderMain";
import Menu from "components/Menu/Menu";
import ProfileView from "components/ProfileView/ProfileView";
import ShowContentByDevice from "components/ShowContentByDevice/ShowContentByDevice";
import SideBar from "components/SideBar/SideBar";
import { useAppSelector } from "hooks/reduxHooks";
import React, { FC, ReactElement, useEffect, useState } from "react";
import style from "./LayoutMain.module.scss";

const { Content } = Layout;

interface LayoutMainProps {
  children: ReactElement;
}

const LayoutMain: FC<LayoutMainProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const [windowHeight, setWindowHeight] = useState<number>(window.innerHeight);
  const user = useAppSelector((selector) => selector.user.user);

  useEffect(() => {
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const updateHeight = () => {
    setWindowHeight(window.innerHeight);
  };

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const closeCollapse = () => {
    setCollapsed(true);
  };

  return (
    <Layout
      className={style.layout}
      style={{
        minHeight: windowHeight,
      }}>
      <SideBar collapsed={collapsed} balance={user?.Amount} closeCollapse={closeCollapse} />
      <Layout>
        <>
          <ShowContentByDevice
            device={"tablet_1"}
            children={<HeaderMain balance={user?.Amount} collapsed={collapsed} toggleCollapsed={toggleCollapsed} />}
          />
          <ShowContentByDevice device={"phone"} children={<ProfileView />} />
          <Content className={style.content}>{children}</Content>
          <ShowContentByDevice device={"phone"} children={<Menu />} />
        </>
      </Layout>
    </Layout>
  );
};

export default LayoutMain;
