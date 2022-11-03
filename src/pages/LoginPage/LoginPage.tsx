import { Form } from "antd";
import { useForm } from "antd/es/form/Form";
import BlockShadow from "components/Blocks/BlockShadow";
import Button from "components/Buttons/Button";
import Input from "components/FormControls/Input/Input";
import openNotification from "components/openNotification/openNotification";
import { authUrl, publicUrl } from "config/path";
import { useAppDispatch } from "hooks/reduxHooks";
import React, { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "services/authService";
import { useLazyGetUserQuery } from "services/userService";
import { setToken, setUser } from "store/slices/userSlice";
import { IAuthRequest } from "types/auth";
import { ErrorType } from "types/error";
import { ruleNumber, rulePassword } from "utils/inputValidation";
import style from "./LoginPage.module.scss";

const LoginPage: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [form] = useForm<IAuthRequest>();

  const [getUser] = useLazyGetUserQuery();

  const [login, { isLoading }] = useLoginMutation();

  const onFinish = async (values: IAuthRequest) => {
    const loginData = await login({
      ...values,
      remember: false,
      returnUrl: authUrl.Index.Home.url,
    })
      .unwrap()
      .catch((error) => {
        if (error?.data?.Error === ErrorType.InvalidLoginInformation) {
          openNotification({
            title: "Error!",
            description: "Wrong login or password",
            layout: "horizontal",
            type: "error",
          });
        } else {
          openNotification({
            title: "Error!",
            description: "Something went wrong",
            layout: "horizontal",
            type: "error",
          });
        }
      });

    if (loginData?.Token) {
      dispatch(setToken(loginData.Token));

      getUser({ token: loginData.Token }).then(({ data: user }) => {
        user && dispatch(setUser(user));

        navigate(loginData.ReturnUrl, { replace: true });
      });
    }
  };

  return (
    <BlockShadow className={style.block} hideForMobile>
      <div className={style.title}>Log in</div>

      <Form form={form} onFinish={onFinish}>
        <Form.Item name={"phone"} className={style.input} rules={ruleNumber()}>
          <Input placeholder={"Number phone"} maxLength={11} />
        </Form.Item>
        <Form.Item name={"password"} className={style.password} rules={rulePassword()}>
          <Input.Password placeholder={"Password"} />
        </Form.Item>
        <Link className={style.link} to={publicUrl.User.PasswordRecovery.path}>
          Forgot password?
        </Link>

        <Form.Item>
          <Button loading={isLoading} htmlType={"submit"} block type={"primary"} size={"large"}>
            Log in
          </Button>
        </Form.Item>

        <span className={style.info}>
          Is this your first time here?
          <Link to={publicUrl.User.Registration.path}>Quick registration</Link>
        </span>
      </Form>
    </BlockShadow>
  );
};

export default LoginPage;
