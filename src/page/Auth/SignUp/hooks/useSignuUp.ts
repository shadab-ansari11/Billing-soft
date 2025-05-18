import React from "react";
import { toast } from "react-toastify";
import { signup } from "services/auth.service";
import { ISignUpRequest } from "../../../../interfaces/auth"

const useAdminSignUp  = () => {
    const trySignup = async (values: ISignUpRequest) => {
    try {
      const response: any = await signup(values); // login service
      console.log("response", response)
      if (response) {
      toast.success("SignUp successful!");
      }
      return response;
    } catch (err: any) {
     toast.error("SignUp error!");
      return false;
    }
  }; 
  return {
    trySignup,
  };
}

export default useAdminSignUp;
