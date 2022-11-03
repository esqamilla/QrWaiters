import Button from "components/Buttons/Button";
import Page from "components/Page/Page";
import { useAppSelector } from "hooks/reduxHooks";
import React, { FC } from "react";
import { useGetUserQrCodeQuery } from "services/userService";
import { downloadBlob } from "utils/fileHelper";
import style from "./QrCodePage.module.scss";

const QrCodePage: FC = () => {
  const user = useAppSelector((selector) => selector.user.user);

  const { data: qrCode, isLoading } = useGetUserQrCodeQuery({ userId: user?.Id ?? 0 }, { skip: !user?.Id });

  const onDownloadFile = () => {
    downloadBlob({ file: qrCode?.file, fileName: user?.QrId || "qr-code" });
  };

  return (
    <Page>
      <Page.Header>QR Code</Page.Header>
      <Page.Description>Its your personal qr code</Page.Description>
      <Page.Content className={style.content}>
        <div className={style.wrapper}>
          <img className={style.qrCode} src={qrCode?.src} alt={"QR Code"} />
          <div className={style.code}>{user?.QrId || "—"}</div>
        </div>
        <Button loading={isLoading} size={"large"} onClick={onDownloadFile} type={"primary"}>
          Download
        </Button>
      </Page.Content>
    </Page>
  );
};

export default QrCodePage;
