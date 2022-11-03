import { Result } from "antd";
import resultStyle from "assets/scss/Result.module.scss";
import Button from "components/Buttons/Button";
import Page from "components/Page/Page";
import { authUrl } from "config/path";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage: FC = () => {
  const navigate = useNavigate();

  return (
    <Page>
      {/*<Page.Header>404</Page.Header>*/}
      {/*<Page.Description>Page is not found</Page.Description>*/}
      <Page.Content>
        <Result
          className={resultStyle.result}
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
          extra={
            <Button
              type="primary"
              onClick={() => {
                navigate(authUrl.Index.Home.url);
              }}>
              Back Home
            </Button>
          }
        />
      </Page.Content>
    </Page>
  );
};

export default NotFoundPage;
