/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-underscore-dangle */
import {
  DELETE_DEPARTMENT_REQUEST,
  DELETE_DEPARTMENT_SUCCESS,
  FETCH_ALL_DEPARTMENTS_REQUEST,
  FETCH_ALL_DEPARTMENTS_SUCCESS,
  GET_ALL_DEPARTMENTS_REQUEST,
  GET_ALL_DEPARTMENTS_SUCCESS,
  GET_DEPARTMENT_BY_ID_REQUEST,
  NEW_DEPARTMENT_REQUEST,
  NEW_DEPARTMENT_REQUEST_SUCCESS,
  UPDATE_DEPARTMENT_REQUEST,
  UPDATE_DEPARTMENT_SUCCESS,
} from './actionTypes';
import { IDepartmentsState, FetchDepartmentsActions } from './types';

const departmentsState: IDepartmentsState = {
  pending: false,
  departments: [],
  error: null,
  pagination: {
    limit: 10,
    page: 1,
    total: 50,
  },
  allDepartments: [],
};
// eslint-disable-next-line
export default (state = departmentsState, action: FetchDepartmentsActions) => {
  switch (action.type) {
    case GET_ALL_DEPARTMENTS_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case GET_ALL_DEPARTMENTS_SUCCESS:
      return {
        ...state,
        pending: false,
        departments: action.payload?.data,
        pagination: { ...action?.pagination },
      };
    case NEW_DEPARTMENT_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case NEW_DEPARTMENT_REQUEST_SUCCESS:
      return {
        ...state,
        pending: false,
        departments: [action.payload, ...state.departments],
        pagination: { ...state.pagination, total: state.pagination.total + 1 },
      };
    case GET_DEPARTMENT_BY_ID_REQUEST:
      return {
        ...state,
        pending: true,
      };

    case UPDATE_DEPARTMENT_REQUEST:
      return {
        ...state,
        pending: true,
      };

    case UPDATE_DEPARTMENT_SUCCESS:
      return {
        ...state,
        pending: false,
        departments: state.departments.map(department => {
          if (action.payload._id === department._id) return action.payload;
          return department;
        }),
      };

    case DELETE_DEPARTMENT_REQUEST:
      return {
        ...state,
        pending: true,
      };

    case DELETE_DEPARTMENT_SUCCESS:
      return {
        ...state,
        pending: false,
        departments: state.departments.map(department => {
          if (department._id === action.departmentId) return { ...department, state: 'REMOVED' };
          return department;
        }),
      };

    case FETCH_ALL_DEPARTMENTS_REQUEST:
      return {
        ...state,
      };

    case FETCH_ALL_DEPARTMENTS_SUCCESS:
      return {
        ...state,
        allDepartments: action.departments
          .filter(department => {
            if (department.state === 'ACTIVE') return department;
          })
          .map(dep => {
            return { _id: dep._id, name: dep.name };
          }),
      };

    default:
      return state;
  }
};
