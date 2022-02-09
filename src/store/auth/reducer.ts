import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  SIGNUP_USER_REQUEST,
  SIGNUP_USER_FAILURE,
  SIGNUP_USER_SUCCESS,
  FORGOT_PASSWORD_REQUEST,
} from './actionTypes';
import { FetchUserActions, ILoggedUserState } from './types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const initialState: ILoggedUserState | any = {
  pending: false,
  isLogged: false,
  user: {
    status: '',
    token: '',
    data: {
      user: {
        role: '',
        __id: '',
        name: '',
        email: '',
        __v: -1,
        passwordChangedAt: new Date(),
        passwordResetExpires: new Date(),
        passwordResetToken: new Date(),
      },
    },
  },
  error: '',
};

// eslint-disable-next-line
export default (state = initialState, action: FetchUserActions) => {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return {
        ...state,
        pending: true,
        isLogged: false,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        pending: false,
        user: action.payload.user,
        error: null,
        isLogged: true,
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        pending: false,
        user: {},
        error: action.payload.error,
        isLogged: false,
      };
    case LOGOUT_USER:
      return {
        ...state,
        pending: false,
        user: {},
        error: null,
        isLogged: false,
      };
    case SIGNUP_USER_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case SIGNUP_USER_SUCCESS:
      return {
        ...state,
        pending: false,
      };
    case SIGNUP_USER_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.payload.error,
      };

    case FORGOT_PASSWORD_REQUEST:
      return {
        ...state,
        pending: true,
      };

    default:
      return state;
  }
};
