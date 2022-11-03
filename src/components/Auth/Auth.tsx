import Router from "components/Router/Router";
import { publicUrl } from "config/path";
import { publicRoutes, Route } from "config/routes";
import useAuth from "hooks/useAuth";
import React, { FC, ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface AuthProps {
  children?: ReactNode;
  unAuthorizedPath?: string;
  unAuthorizedRoutes?: Route[];
}

// todo: в компоненте не работает редирект с роутом, которые доступны только неавторизованному пользователю
const Auth: FC<AuthProps> = ({
  children,
  unAuthorizedPath = publicUrl.User.Login.url,
  unAuthorizedRoutes = publicRoutes,
}) => {
  const { isAuth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    !isAuth && navigate(unAuthorizedPath);
  }, [isAuth]);

  if (!isAuth) {
    return <Router routes={unAuthorizedRoutes} />;
  }

  return <>{children}</>;
};

export default Auth;
