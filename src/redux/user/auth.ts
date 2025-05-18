import { createSlice } from "@reduxjs/toolkit";

export interface IUserState {
  userInfo: string;
  token: string;
  isLoggedIn: boolean;
}

const initialState: IUserState = {
  userInfo: "",
  token: "",
  isLoggedIn: false,
};

interface IPayload {
  isLoggedIn: boolean;
  token: string;
  userInfo?: any;
}

interface IAction {
  payload: IPayload;
  type: string;
}
const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserCredential: (state: any, action: IAction) => {
      state.userInfo = action.payload.userInfo;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    logout: (state: any) => {
      state.userInfo = "";
      state.token = "";
      state.isLoggedIn = false;
    },
  },
});

export const { setUserCredential, logout } = AuthSlice.actions;

export default AuthSlice.reducer;
