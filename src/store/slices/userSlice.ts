import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import User from "models/User";

export interface UserSlice {
  token: string | null;
  user?: User;
  isAuth: boolean;
}

const initialState: UserSlice = {
  token: null,
  isAuth: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
      state.isAuth = true;
    },
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
      state.isAuth = true;
    },
    logout(state) {
      state.user = undefined;
      state.token = null;
      state.isAuth = false;
    },
  },
});

export const { setToken, setUser, logout } = userSlice.actions;

export default userSlice.reducer;
