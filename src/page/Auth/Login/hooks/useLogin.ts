import { useDispatch } from "react-redux";
import { setUserCredential } from "../../../../redux/user/auth";
import client from "../../../../utils/ApiClient";
import { toast } from "react-toastify";
import { ILoginRequest } from "../../../../interfaces/auth"
import { login } from "services/auth.service";


const useAdminLogin = () => {
  const dispatch = useDispatch();
  const tryLogin = async (values: ILoginRequest) => {
    // API k userName: john@mail.com
    // API k password changeme
    // const url = "https://api.escuelajs.co/api/v1/auth/login";
    try {
      const response = await login(values);
      // const response: any = await client.post(url, values);
      if (response) {
        dispatch(
          setUserCredential({
            userInfo: response.data,
            token: response.data.access_token,
            isLoggedIn: true,
          })
        );
        toast.success("Login successful!");
        return response;
      } else {
        toast.error("Invalid credentials.");
        return null;
      }
    } catch (err: any) {
      console.log("err", err);
      toast.error("Login failed. Please check your credentials.");
      return null;
    }
  };
  return {
    tryLogin,
  };
};

export { useAdminLogin };
