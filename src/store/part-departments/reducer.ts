/* eslint-disable no-underscore-dangle */
import {
  DELETE_PART_DEPARTMENT_REQUEST,
  DELETE_PART_DEPARTMENT_SUCCESS,
  GET_ALL_PART_DEPARTMENTS_REQUEST,
  GET_ALL_PART_DEPARTMENTS_SUCCESS,
  NEW_PART_DEPARTMENT_REQUEST,
  NEW_PART_DEPARTMENT_SUCCESS,
  UPDATE_PART_DEPARTMENT_REQUEST,
  UPDATE_PART_DEPARTMENT_SUCCESS,
} from './actionTypes';
import { IPartDepartmentsState, FetchPartDepartmentsActions } from './types';

const partDepartmentsState: IPartDepartmentsState = {
  pending: false,
  partDepartments: [],
  error: null,
  pagination: {
    limit: 10,
    page: 1,
    total: 50,
  },
};

// eslint-disable-next-line
export default (state = partDepartmentsState, action: FetchPartDepartmentsActions) => {
  switch (action.type) {
    case GET_ALL_PART_DEPARTMENTS_REQUEST:
      return {
        ...state,
        pending: true,
      };

    case GET_ALL_PART_DEPARTMENTS_SUCCESS:
      return {
        ...state,
        pending: false,
        partDepartments: action.payload,
        pagination: { ...action?.pagination },
      };

    case DELETE_PART_DEPARTMENT_REQUEST:
      return {
        ...state,
        pending: true,
      };

    case DELETE_PART_DEPARTMENT_SUCCESS:
      return {
        ...state,
        pending: false,
        partDepartments: state.partDepartments.map(partDepartment => {
          if (partDepartment._id === action.partDepartmentId)
            return { ...partDepartment, state: 'REMOVED' };
          return partDepartment;
        }),
      };

    case UPDATE_PART_DEPARTMENT_REQUEST:
      return {
        ...state,
        pending: true,
      };

    case UPDATE_PART_DEPARTMENT_SUCCESS:
      return {
        ...state,
        pending: false,
        partDepartments: state.partDepartments.map(partDepartment => {
          if (partDepartment._id === action.payload._id) return action.payload;
          return partDepartment;
        }),
      };

    case NEW_PART_DEPARTMENT_REQUEST:
      return {
        ...state,
        pending: true,
      };

    case NEW_PART_DEPARTMENT_SUCCESS:
      return {
        ...state,
        pending: false,
        partDepartments: [action.payload, ...state.partDepartments],
        pagination: { ...state.pagination, total: state.pagination.total + 1 },
      };

    default:
      return state;
  }
};
