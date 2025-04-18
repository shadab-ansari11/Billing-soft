import Loadable from "react-loadable";
import { Spinner } from "../../components/Loader";

export const Login = Loadable({
  loader: () => import("../../page/Auth/Login"),
  loading: () => <Spinner />,
});