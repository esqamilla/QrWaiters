import App from "App";
import LayoutWithHeader from "components/Layouts/LayoutWithHeader";
import { AuthorizedPath, authUrl, PublicPath, publicUrl } from "config/path";
import HomePage from "pages/HomePage/HomePage";
import LoginPage from "pages/LoginPage/LoginPage";
import NotFoundPage from "pages/NotFoundPage/NotFoundPage";
import ProfileChangePassword from "pages/ProfilePage/ProfileChangePassword/ProfileChangePassword";
import ProfileEdit from "pages/ProfilePage/ProfileEdit/ProfileEdit";
import ProfilePage from "pages/ProfilePage/ProfilePage";
import ProfileUploadPhoto from "pages/ProfilePage/ProfileUploadPhoto/ProfileUploadPhoto";
import QrCodePage from "pages/QrCodePage/QrCodePage";
import RecoveryPasswordPage from "pages/RecoveryPasswordPage/RecoveryPasswordPage";
import RegistrationPage from "pages/RegistrationPage/RegistrationPage";
import RegistrationTipRecipient from "pages/RegistrationPage/RegistrationTipRecipient/RegistrationTipRecipient";
import TransactionsPage from "pages/TransactionsPage/TransactionsPage";
import TransfersPage from "pages/TransfersPage/TransfersPage";
import { RouteObject } from "react-router-dom";

export type Route<Path extends PublicPath | AuthorizedPath = PublicPath | AuthorizedPath> = RouteObject & {
  path: Path;
};

export type PublicRoute = Route<PublicPath>;
export type AuthRoute = Route<AuthorizedPath>;

/**
 * Чтобы добавить новые роуты: <br/>
 * Надо добавить путь в PublicPath (если роут доступен для неавторизованного пользователя)
 * или в AuthorizedPath (если роут недоступен для неавторизованного юзера) <br/>
 * Добавить объект типа Route в соответствующий массив роутов (rootRoutes для корневых роутов)
 * */

const registrationRoutes: PublicRoute[] = [
  {
    path: publicUrl.User.Registration.RegTipRecipient.path,
    element: <RegistrationTipRecipient />,
  },
  {
    path: publicUrl.User.Registration.RegAdministration.path,
    element: <RegistrationTipRecipient /> /*<RegistrationAdministration />*/,
  },
];

/**
 * Роуты для неавторизованных пользователей
 * */
export const publicRoutes: PublicRoute[] = [
  {
    path: publicUrl.User.path,
    element: <LayoutWithHeader />,
    children: [
      {
        path: publicUrl.User.Login.path,
        element: <LoginPage />,
        index: true,
      },
      {
        path: publicUrl.User.PasswordRecovery.path,
        element: <RecoveryPasswordPage />,
      },
      {
        path: publicUrl.User.Registration.path,
        element: <RegistrationPage />,
        children: registrationRoutes,
      },
    ],
  },
];

const profileRoutes: AuthRoute[] = [
  {
    path: authUrl.Index.Profile.ProfileUploadFile.path,
    element: <ProfileUploadPhoto />,
  },
  {
    path: authUrl.Index.Profile.ProfileChangePassword.path,
    element: <ProfileChangePassword />,
  },
  {
    path: authUrl.Index.Profile.ProfileEdit.path,
    element: <ProfileEdit />,
  },
];

/**
 * Рутовые роуты для авторизованных пользователей
 * */
export const rootRoutes: AuthRoute[] = [
  {
    path: authUrl.Index.path,
    element: <App />,
    children: [
      {
        path: authUrl.Index.Home.path,
        element: <HomePage />,
        index: true,
      },
      {
        path: authUrl.Index.Profile.path,
        element: <ProfilePage />,
        children: profileRoutes,
      },
      {
        path: authUrl.Index.Transactions.path,
        element: <TransactionsPage />,
      },
      {
        path: authUrl.Index.QrCode.path,
        element: <QrCodePage />,
      },
      {
        path: authUrl.Index.Transfers.path,
        element: <TransfersPage />,
      },
      {
        path: authUrl.All.path,
        element: <NotFoundPage />,
      },
      {
        path: authUrl.NotFound.path,
        element: <NotFoundPage />,
      },
    ],
  },
];
