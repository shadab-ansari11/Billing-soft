export interface ILogin {
  email: string;
  password: string;
  fcmToken?: string;
}

export interface IForgetPassword {
  email: string;
}
export interface IResetPassword {
  email: string;
}

export interface IFirstStep {
  email: string;
  password: string;
  roleId?: number | string;
}

export interface IStudent {
  email: string;
  password: string;
  roleId?: number;
}

export interface IOrganization {
  email?: string;
  password: string;
  roleId?: number;
}
