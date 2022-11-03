import buildUrl from "utils/buildUrl";

export enum PublicPath {
  User = "/User",

  Login = "Login",

  PasswordRecovery = "PasswordRecovery",

  Registration = "Registration",
  RegAdministration = "Administration",
  RegTipRecipient = "TipRecipient",
}

export enum AuthorizedPath {
  Index = "",
  Home = "/",

  Profile = "/Profile",
  ProfileUploadFile = "UploadFile",
  ProfileChangePassword = "ChangePassword",
  ProfileEdit = "Edit",
  ProfileGoals = "Goals",
  ProfileCard = "Card",

  Transactions = "/Transactions",

  QrCode = "/QrCode",

  Transfers = "/Transfers",

  NotFound = "/404",
  All = "/*",
}

export const authUrl = buildUrl(AuthorizedPath, {
  Index: {
    Home: {},
    Profile: {
      ProfileChangePassword: {},
      ProfileEdit: {},
      ProfileUploadFile: {},
      ProfileGoals: {},
      ProfileCard: {},
    },
    Transactions: {},
    QrCode: {},
    Transfers: {},
  },

  NotFound: {},
  All: {},
});

export const publicUrl = buildUrl(PublicPath, {
  User: {
    Login: {},
    PasswordRecovery: {},
    Registration: {
      RegAdministration: {},
      RegTipRecipient: {},
    },
  },
});
