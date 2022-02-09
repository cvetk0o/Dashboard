import { AxiosResponse } from 'axios';
import IOnfinish from '../components/forms/signupForm/types/onFinishType';
import { IForgotPasswordResponse, ILoggedUser } from '../store/auth/types';

import axiosInstance from '../config/axios';
import BACK_URL from '../utils/urls';

export const loginUserRequest = (
  email: string,
  password: string
): Promise<AxiosResponse<ILoggedUser>> =>
  axiosInstance.post<ILoggedUser>(`${BACK_URL}/auth/login`, {
    email,
    password,
  });

export default loginUserRequest;

export const signUpUserRequest = (payload: IOnfinish): Promise<AxiosResponse<ILoggedUser>> =>
  axiosInstance.post<ILoggedUser>(`${BACK_URL}/auth/signup`, payload);

export const forgotPasswordRequest = (
  email: string
): Promise<AxiosResponse<IForgotPasswordResponse>> =>
  axiosInstance.post<IForgotPasswordResponse>(`${BACK_URL}/auth/forgotPassword`, { email });
