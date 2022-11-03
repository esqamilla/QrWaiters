import { MenuProps } from "antd";
import { ArrowIcon, HomeIcon, QrCodeIcon, UserIcon } from "components/Icons/Icons";
import { authUrl } from "config/path";

interface GetSideBarMenuItems {
  transferCount: number;
}

export const getSideBarMenuItems = ({ transferCount = 0 }: GetSideBarMenuItems): MenuProps["items"] => {
  return [
    {
      label: "Home",
      key: authUrl.Index.Home.path,
      icon: <HomeIcon />,
    },
    {
      label: "Profile",
      key: authUrl.Index.Profile.path,
      icon: <UserIcon />,
    },
    {
      label: "Transactions",
      key: authUrl.Index.Transactions.path,
      icon: <ArrowIcon />,
    },
    {
      label: "QR Code",
      key: authUrl.Index.QrCode.path,
      icon: <QrCodeIcon />,
    },
    // {
    //   label: (
    //     <div className={menuStyle.menu_item}>
    //       <div className={menuStyle.menu_item_text}>Transfers</div>
    //       <div className={menuStyle.menu_item_number}>{transferCount}</div>
    //     </div>
    //   ),
    //   key: authUrl.Index.Transfers.path,
    //   icon: <TransfersIcon />,
    // },
  ];
};
