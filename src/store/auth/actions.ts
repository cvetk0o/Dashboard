import IOnfinish from '../../components/forms/signupForm/types/onFinishType';
import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  SIGNUP_USER_REQUEST,
  SIGNUP_USER_FAILURE,
  SIGNUP_USER_SUCCESS,
  FORGOT_PASSWORD_REQUEST,
  LOGOUT_USER,
} from './actionTypes';
import {
  LoginUserRequest,
  LoginUserSuccess,
  LogginUserSuccessPayload,
  LoginUserFailure,
  AuthFailurePayload,
  SignupUserRequest,
  SignupUserFailure,
  SignupUserSuccess,
  ForgotPasswordRequest,
} from './types';

export const loginUserRequest = (email: string, password: string): LoginUserRequest => ({
  type: LOGIN_USER_REQUEST,
  email,
  password,
});

export const loginUserSuccess = (payload: LogginUserSuccessPayload): LoginUserSuccess => ({
  type: LOGIN_USER_SUCCESS,
  payload,
});

export const loginUserFailur = (payload: AuthFailurePayload): LoginUserFailure => ({
  type: LOGIN_USER_FAILURE,
  payload,
});

export const signupUserRequest = (payload: IOnfinish): SignupUserRequest => ({
  type: SIGNUP_USER_REQUEST,
  payload,
});

export const signupUserSuccess = (): SignupUserSuccess => ({
  type: SIGNUP_USER_SUCCESS,
});

export const signupUserFailure = (payload: AuthFailurePayload): SignupUserFailure => ({
  type: SIGNUP_USER_FAILURE,
  payload,
});

export const forgotPasswordRequest = (payload: string): ForgotPasswordRequest => ({
  type: FORGOT_PASSWORD_REQUEST,
  email: payload,
});

export const logoutUser = (): { type: string } => ({
  type: LOGOUT_USER,
});
