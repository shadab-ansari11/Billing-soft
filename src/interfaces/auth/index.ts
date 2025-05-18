export interface ILoginRequest {
  email: string;
  password: string;
}

export interface IForgetPassword {
  email: string;
}
export interface IResetPassword {
  email: string;
}

export interface ISignUpRequest {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}
