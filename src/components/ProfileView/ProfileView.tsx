import { UserOutlined } from "@ant-design/icons";
import { Avatar, Space } from "antd";
import Button from "components/Buttons/Button";
import { DoorOpenIcon } from "components/Icons/Icons";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import React, { FC } from "react";
import { logout } from "store/slices/userSlice";
import concatClasses from "utils/concatClasses";
import { generatePhotoUrl } from "utils/generatePhotoUrl";
import style from "./ProfileView.module.scss";

interface ProfileViewProps {
  className?: string;
}

const ProfileView: FC<ProfileViewProps> = ({ className }) => {
  const dispatch = useAppDispatch();

  const user = useAppSelector((selector) => selector.user.user);

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <Space className={concatClasses(style.wrapper, className)}>
      <Space>
        <Avatar size={48} icon={<UserOutlined />} src={generatePhotoUrl(user?.PhotoUrl)} />
        <div className={style.info}>
          <div className={style.name}>
            {user?.Firstname} {user?.Lastname}
          </div>
          <div className={style.status}>Waiter</div>
        </div>
      </Space>
      <Button className={style.exit} icon={<DoorOpenIcon />} onlyIcon onClick={onLogout} type={"link"} />
    </Space>
  );
};

export default ProfileView;
