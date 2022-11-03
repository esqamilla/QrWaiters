import { Form } from "antd";
import { useForm } from "antd/es/form/Form";
import Button from "components/Buttons/Button";
import FormItem from "components/FormControls/FormItem/FormItem";
import Input from "components/FormControls/Input/Input";
import openNotification from "components/openNotification/openNotification";
import { formDefaultProps } from "config/form";
import { useAppSelector } from "hooks/reduxHooks";
import styleProfileEdit from "pages/ProfilePage/ProfileEdit/ProfileEdit.module.scss";
import React, { FC } from "react";
import { useChangeUserMutation } from "services/userService";
import { UserChangeData } from "types/contracts/user";
import { userMutationFields } from "utils/fieldsForPutRequest";
import { rulePassword } from "utils/inputValidation";

const ProfileChangePassword: FC = () => {
  const user = useAppSelector((selector) => selector.user.user);
  const [form] = useForm<UserChangeData>();

  const [changeUser, { isLoading }] = useChangeUserMutation();

  const onFinish = async (values: UserChangeData) => {
    await changeUser({
      ...userMutationFields({ user }),
      ...values,
    })
      .then(() => {
        openNotification({
          title: "Success!",
          description: "Password was updated",
          layout: "horizontal",
          type: "success",
        });

        form.setFieldValue("password", "");
      })
      .catch(() => {
        openNotification({
          title: "Error!",
          description: "Something went wrong",
          layout: "horizontal",
          type: "warning",
        });
      });
  };

  return (
    <Form form={form} onFinish={onFinish} {...formDefaultProps}>
      <div className={styleProfileEdit.wrapper}>
        <div className={styleProfileEdit.block}>
          <FormItem label={"Password"} name={"password"} rules={rulePassword()}>
            <Input.Password placeholder={"Password"} />
          </FormItem>
        </div>
      </div>

      <Form.Item className={styleProfileEdit.footer_btn}>
        <Button
          htmlType={"submit"}
          loading={isLoading}
          className={styleProfileEdit.save}
          type={"primary"}
          size={"large"}>
          Save
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ProfileChangePassword;
