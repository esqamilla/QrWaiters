import { TabsProps } from "antd";
import { authUrl } from "config/path";
import { Outlet } from "react-router-dom";

export const profileTabs: TabsProps["items"] = [
  {
    label: "Upload photo",
    key: authUrl.Index.Profile.ProfileUploadFile.url,
  },
  {
    label: "Change password",
    key: authUrl.Index.Profile.ProfileChangePassword.url,
  },
  {
    label: "Edit",
    key: authUrl.Index.Profile.ProfileEdit.url,
  },
  {
    label: "Goals",
    key: authUrl.Index.Profile.ProfileGoals.url,
  },
  {
    label: "Card",
    key: authUrl.Index.Profile.ProfileCard.url,
  },
].map((item) => ({
  ...item,
  children: <Outlet />,
}));
