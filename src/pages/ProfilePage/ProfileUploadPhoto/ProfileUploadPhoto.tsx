import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { RcFile } from "antd/es/upload";
import Button from "components/Buttons/Button";
import UploadPhoto from "components/UploadPhoto/UploadPhoto";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import style from "pages/ProfilePage/ProfileUploadPhoto/ProfileUploadPhoto.module.scss";
import React, { FC, useState } from "react";
import { useLazyGetUserByIdQuery, useUploadPhotoMutation } from "services/userService";
import { setUser } from "store/slices/userSlice";
import { generatePhotoUrl } from "utils/generatePhotoUrl";

const ProfileUploadPhoto: FC = () => {
  const user = useAppSelector((selector) => selector.user.user);
  const dispatch = useAppDispatch();

  const [fileList, setFileList] = useState<RcFile[]>([]);
  const [uploadPhoto, { isLoading: loadPhoto }] = useUploadPhotoMutation();
  const [getUser, { isLoading: loadUser }] = useLazyGetUserByIdQuery();

  const onSaveFile = async () => {
    const file = fileList[0];

    await uploadPhoto({
      file,
      userId: user?.Id ?? 0,
    });

    const updatedUser = await getUser({ id: user?.Id ?? 0 }).unwrap();

    await dispatch(setUser(updatedUser));

    setFileList([]);
  };

  return (
    <div className={style.wrapper}>
      <Avatar className={style.avatar} size={64} icon={<UserOutlined />} src={generatePhotoUrl(user?.PhotoUrl)} />

      <div className={style.text}>Upload your photo</div>
      <UploadPhoto accept={".png,.jpg,.jpeg"} fileList={fileList} setFileList={setFileList} />

      <Button
        disabled={!fileList.length}
        loading={loadPhoto || loadUser}
        className={style.save}
        onClick={onSaveFile}
        size={"large"}
        type={"primary"}
        block>
        Save
      </Button>
    </div>
  );
};

export default ProfileUploadPhoto;
