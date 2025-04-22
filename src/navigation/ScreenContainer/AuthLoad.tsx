import React, { lazy } from "react";

// Lazy load Login page
export const Login = lazy(() => import("../../page/Auth/Login"));

export const SignUp = lazy (()=> import ("../../page/Auth/SignUp"));