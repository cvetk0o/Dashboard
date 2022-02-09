import IOnfinish from '../../components/forms/signupForm/types/onFinishType';
import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  SIGNUP_USER_REQUEST,
  SIGNUP_USER_FAILURE,
  SIGNUP_USER_SUCCESS,
  FORGOT_PASSWORD_REQUEST,
  LOGOUT_USER,
} from './actionTypes';

export interface ILoggedUser {
  status: string;
  token: string;
  data: {
    user: {
      role: string;
      __id: string;
      name: string;
      email: string;
      __v: number;
      passwordChangedAt: Date;
      passwordResetExpires: Date;
      passwordResetToken: Date;
    };
  };
}

export interface ILoggedUserState {
  pending: boolean;
  user: ILoggedUser;
  error: string | null;
}

export interface LogginUserSuccessPayload {
  user: ILoggedUser;
}

export interface AuthFailurePayload {
  error: string;
}

export interface LoginUserRequest {
  type: typeof LOGIN_USER_REQUEST;
  email: string;
  password: string;
}

export type LoginUserSuccess = {
  type: typeof LOGIN_USER_SUCCESS;
  payload: LogginUserSuccessPayload;
};

export type LoginUserFailure = {
  type: typeof LOGIN_USER_FAILURE;
  payload: AuthFailurePayload;
};

export type SignupUserRequest = {
  type: typeof SIGNUP_USER_REQUEST;
  payload: IOnfinish;
};

export type SignupUserSuccess = {
  type: typeof SIGNUP_USER_SUCCESS;
};

export type SignupUserFailure = {
  type: typeof SIGNUP_USER_FAILURE;
  payload: AuthFailurePayload;
};

export type ForgotPasswordRequest = {
  type: typeof FORGOT_PASSWORD_REQUEST;
  email: string;
};

export interface IForgotPasswordResponse {
  status: string;
  message: string;
}

export type LogoutUser = {
  type: typeof LOGOUT_USER;
};

export type FetchUserActions =
  | LoginUserRequest
  | LoginUserSuccess
  | LoginUserFailure
  | SignupUserRequest
  | SignupUserSuccess
  | SignupUserFailure
  | ForgotPasswordRequest
  | LogoutUser;
