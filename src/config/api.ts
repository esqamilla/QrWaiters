export const api = {
  User: process.env.REACT_APP_QRWAITERS_USER_API,
  Admin: process.env.REACT_APP_QRWAITERS_ADMIN_API,
};

export enum entityApi {
  Users = "Users",
  Tips = "Tips",
  Restaurants = "Restaurants",
  Positions = "Positions",
  OneTimePasswords = "OneTimePasswords",
}

export const apiPath = {
  Users: `${api.User}/${entityApi.Users}`,
  Tips: `${api.User}/${entityApi.Tips}`,
  Restaurants: `${api.User}/${entityApi.Restaurants}`,
  Positions: `${api.User}/${entityApi.Positions}`,
  OneTimePasswords: `${api.User}/${entityApi.OneTimePasswords}`,
};

export const baseUrl = {
  User: process.env.REACT_APP_QRWAITERS_USER_API_WITHOUT_VERSION,
  Admin: process.env.REACT_APP_QRWAITERS_ADMIN_API_WITHOUT_VERSION,
};
