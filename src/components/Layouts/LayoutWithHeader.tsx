import { Layout } from "antd";
import Header from "components/Header/Header";
import style from "components/Layouts/LayoutMain.module.scss";
import React, { FC } from "react";
import { Outlet } from "react-router-dom";

const { Content } = Layout;

const LayoutWithHeader: FC = () => {
  return (
    <Layout className={style.layout}>
      <Header />
      <Content className={style.contentUnAuth}>
        <Outlet />
      </Content>
    </Layout>
  );
};

export default LayoutWithHeader;
