import {createSlice} from "@reduxjs/toolkit";
import {useAppDispatch} from "../../redux/store";

export interface IUserState {
  token: string;
  fullName?: string;
  isLoggedIn: boolean;

  userInfo?: any;
}

const initialState: IUserState = {
  token: "",
  isLoggedIn: false,
  userInfo: null,
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
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserCredential: (state, action: IAction) => {
      const newState = state;
      newState.isLoggedIn = action.payload.isLoggedIn;
      newState.token = action.payload.token;
    },
    setUserInfo: (state, action: IAction) => {
      const newState = state;
      const { userInfo } = action.payload;
      let newData: any = null;

      if (userInfo?.role === 1) {
        newData = {
          ...userInfo,
          profilePic: userInfo?.additionalData?.profilePic,
          about: userInfo?.additionalData?.about,
          degree: userInfo?.additionalData?.degree,
          accessPrivacy: userInfo?.additionalData?.accessPrivacy,
        };
      }
      if (userInfo?.role === 2) {
        newData = {
          ...userInfo,
          profilePic: userInfo?.additionalData?.profilePic,
          coverPic: userInfo?.additionalData?.coverPic,
          about: userInfo?.additionalData?.about,
          degree: userInfo?.additionalData?.degree,
          accessPrivacy: userInfo?.additionalData?.accessPrivacy,
        };
      }
      newState.userInfo = newData;
    },
  },
});

export const { setUserCredential, setUserInfo } = authSlice.actions;

export const useAuthActions = () => {
  const dispatch = useAppDispatch();
  return {
    setUserCredential: (payload: IPayload) =>
      dispatch(setUserCredential(payload)),
    setUserInfo: (payload: IPayload) => dispatch(setUserInfo(payload)),
  };
};
const { reducer } = authSlice;
export default reducer;
