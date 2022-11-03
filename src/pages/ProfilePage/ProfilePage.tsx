import { TabsProps as TabsAntdProps } from "antd/lib/tabs";
import Page from "components/Page/Page";
import Tabs from "components/Tabs/Tabs";
import { authUrl } from "config/path";
import React, { FC, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { profileTabs } from "staticContent/tabs";

const ProfilePage: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === authUrl.Index.Profile.path) {
      navigate(authUrl.Index.Profile.ProfileUploadFile.url);
    }
  }, [location.pathname]);

  const onChange: TabsAntdProps["onChange"] = (activeKey) => {
    navigate(activeKey);
  };

  return (
    <Page>
      <Page.Header>Profile</Page.Header>
      <Page.Description>
        Edit your company data, personal data and manage your employees or even billings
      </Page.Description>
      <Page.Content>
        <Tabs items={profileTabs} defaultActiveKey={location.pathname} onChange={onChange} />
      </Page.Content>
    </Page>
  );
};

export default ProfilePage;
