import { useDispatch } from "react-redux";
import { login } from "../../../../redux/user/auth";
import client from "../../../../utils/ApiClient";
import { ToastContainer, toast } from "react-toastify";

export interface ILoginRequest {
  username: string;
  password: string;
}
// export interface ILoginResponse {
//   data: string;
//   statusCode: number;
//   message: string;
// }

const useAdminLogin = () => {
    const dispatch = useDispatch();
    const tryLogin = async (values: ILoginRequest) => {
      try {
        const url = 'https://dummyjson.com/auth/login';
        const response: any = await client.post(url, values);
        if (response?.data) {
            console.log("success")
          dispatch(
            login({
              userInfo: response?.data,
              token: '',
              isLoggedIn: true,
            }),
          );
        }
        return response;
      } catch (err: any) {
        console.log('err', err);
      }
    };
  
    return {
      tryLogin,
    };
  };
  
  export {useAdminLogin};