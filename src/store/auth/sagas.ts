import { AxiosResponse } from 'axios';
import { message } from 'antd';
import {
  all,
  call,
  put,
  takeLatest,
  AllEffect,
  ForkEffect,
  getContext,
  GetContextEffect,
  CallEffect,
} from 'redux-saga/effects';
import { IntlShape } from 'react-intl';
import { push } from 'connected-react-router';

import { loginUserFailur, loginUserSuccess, signupUserFailure, signupUserSuccess } from './actions';
import { FORGOT_PASSWORD_REQUEST, LOGIN_USER_REQUEST, SIGNUP_USER_REQUEST } from './actionTypes';
import {
  ForgotPasswordRequest,
  IForgotPasswordResponse,
  ILoggedUser,
  LoginUserRequest,
  SignupUserRequest,
} from './types';

import {
  loginUserRequest,
  signUpUserRequest,
  forgotPasswordRequest,
} from '../../services/AuthService';
import { Roles } from '../../types/roles';

function* loginUserRequestSaga(action: LoginUserRequest) {
  const { email, password } = action;
  try {
    const response: AxiosResponse<ILoggedUser> = yield call(loginUserRequest, email, password);
    yield put(
      loginUserSuccess({
        user: response.data,
      })
    );
    localStorage.setItem('token', response?.data?.token);

    switch (response.data.data.user.role) {
      case Roles.ROOT:
        yield put(push('/departments'));
        break;

      case Roles.ADMIN:
        yield put(push('/partDepartments'));
        break;

      default:
        yield put(push('/'));
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    message.error(e.message);
    yield put(
      loginUserFailur({
        error: e.message,
      })
    );
  }
}

function* signupUserRequestSaga(action: SignupUserRequest) {
  const { payload } = action;
  try {
    const response: AxiosResponse<ILoggedUser> = yield call(signUpUserRequest, payload);
    if (response.status === 201) {
      yield put(signupUserSuccess());
      yield put(push('/'));
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    message.error(e.message);
    yield put(signupUserFailure({ error: e.message }));
  }
}

function* forgotPasswordRequestSaga(
  action: ForgotPasswordRequest
): Generator<
  CallEffect<AxiosResponse<IForgotPasswordResponse>> | GetContextEffect,
  void,
  AxiosResponse<IForgotPasswordResponse> & IntlShape
> {
  const { email } = action;
  const intl = yield getContext('intl');

  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const response: AxiosResponse<IForgotPasswordResponse> = yield call(
      forgotPasswordRequest,
      email
    );

    message.success(intl.formatMessage({ id: 'forgotPassword.page.success' }));
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    message.error(e.message);
  }
}

function* authSaga(): Generator<AllEffect<ForkEffect<never>>> {
  yield all([
    takeLatest(LOGIN_USER_REQUEST, loginUserRequestSaga),
    takeLatest(SIGNUP_USER_REQUEST, signupUserRequestSaga),
    takeLatest(FORGOT_PASSWORD_REQUEST, forgotPasswordRequestSaga),
  ]);
}

export default authSaga;
