import { Layout, Space } from "antd";
import logo from "assets/images/logo.svg";
import Button from "components/Buttons/Button";
import { publicUrl } from "config/path";
import React, { FC, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import style from "./Header.module.scss";

const { Header: HeaderAntd } = Layout;

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === publicUrl.User.path) {
      navigate(publicUrl.User.Login.path);
    }
  }, [location.pathname]);

  const onLogIn = () => {
    navigate(publicUrl.User.Login.path);
  };

  const onSignUp = () => {
    navigate(publicUrl.User.Registration.path);
  };

  return (
    <HeaderAntd className={style.header}>
      <a href={"https://google.com/"} className={style.link}>
        <img src={logo} alt="logo" className={style.logo} />
      </a>

      <Space>
        <Button size={"large"} type={"primary"} className={style.btn} onClick={onLogIn}>
          Log in
        </Button>
        <Button size={"large"} className={style.btn} onClick={onSignUp}>
          Sign up
        </Button>
      </Space>
    </HeaderAntd>
  );
};

export default Header;
