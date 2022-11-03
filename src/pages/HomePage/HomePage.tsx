import DashboardBlock from "components/DashboardBlock/DashboardBlock";
import Page from "components/Page/Page";
import { useAppSelector } from "hooks/reduxHooks";
import moment from "moment";
import React, { FC } from "react";
import { useGetUserDashboardQuery, useGetUserQrCodeQuery } from "services/userService";
import style from "./HomePage.module.scss";

const HomePage: FC = () => {
  const user = useAppSelector((selector) => selector.user.user);

  const { data: dashboard } = useGetUserDashboardQuery({ userId: user?.Id ?? 0 }, { skip: !user?.Id });
  const { data: qrCode } = useGetUserQrCodeQuery({ userId: user?.Id ?? 0 }, { skip: !user?.Id });

  return (
    <Page>
      <Page.Header>Dashboard</Page.Header>
      <Page.Description>Here you can see all the transactions made by the guests of your restaurant</Page.Description>
      <Page.Content flex gap={24} className={style.content}>
        <DashboardBlock.Profit money={dashboard?.Amount} month={moment().format("MMMM")} />
        <DashboardBlock.Rating rating={dashboard?.Rating} />
        <DashboardBlock.Qr qrId={user?.QrId} src={qrCode?.src} />
        <DashboardBlock.Progress current={dashboard?.Amount} total={dashboard?.GoalSum} title={dashboard?.GoalTitle} />
      </Page.Content>
    </Page>
  );
};

export default HomePage;
