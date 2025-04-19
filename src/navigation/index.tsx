// import ProtectedRoute from "components/ProtectedRoute";
// import useUserInfo from "hooks/useUserInfo";
// import useDecodedData from "../hooks/useDecodedData";
import useUserInfo from "../hooks/useUserInfo";
import { Route, Routes } from "react-router-dom";
// import * as AdminLoadable from "./ScreenContainer/AdminLoad"
import * as AuthLoadable from "./ScreenContainer/AuthLoad";
import AppRoutes from "./appRoutes";
import { Suspense, useEffect, useState } from "react";
import { Spinner } from "../components/Loader";

function Application() {
  const { isLoggedIn } = useUserInfo();
  console.log(isLoggedIn);
  const [spinnerLoad, setSpinnerLoad] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setSpinnerLoad(false);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  // const decoded = useDecodedData();
  return (
    <Suspense fallback={spinnerLoad ? <Spinner /> : null}>
      <Routes>
        <Route path={AppRoutes.LOGIN} element={<AuthLoadable.Login />} />
      </Routes>
    </Suspense>
  );
}

export default Application;
