// import ProtectedRoute from "components/ProtectedRoute";
// import useUserInfo from "hooks/useUserInfo";
// import useDecodedData from "../hooks/useDecodedData";
import useUserInfo from "../hooks/useUserInfo";
import { Route, Routes } from "react-router-dom";
// import * as AdminLoadable from "./ScreenContainer/AdminLoad"
import * as AuthLoadable from "./ScreenContainer/AuthLoad";
import AppRoutes from "./appRoutes";

function Application() {
  const { isLoggedIn } = useUserInfo();
  console.log(isLoggedIn)
  // const decoded = useDecodedData();
  return (
    <Routes>
          <Route
              element={<AuthLoadable.Login/>}
              path={AppRoutes.LOGIN}
            />
    </Routes>
  );
}

export default Application;
