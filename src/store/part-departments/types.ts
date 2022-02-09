import { IPagination } from '../../types/types';
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

export interface IPartDepartment {
  state: string;
  createdAt: string;
  _id: string;
  name: string;
  year: [];
  department: string;
}

export interface IPartDepartmentsState {
  pending: boolean;
  partDepartments: IPartDepartment[];
  error: string | null;
  pagination: IPagination;
}

export interface INewPartDepartmentFormValues {
  name: string;
  department: string;
}

export interface INewPartDepartmentResponse {
  status: string;
  data: IPartDepartment;
}

export interface IGetPartDepartmentsResponse {
  status: string;
  data: IPartDepartment[];
}

export type GetAllPartDepartmentsRequest = {
  type: typeof GET_ALL_PART_DEPARTMENTS_REQUEST;
  pagination: IPagination;
};

export type GetAllPartDepartmentsSuccess = {
  type: typeof GET_ALL_PART_DEPARTMENTS_SUCCESS;
  payload: IPartDepartment[];
  pagination: IPagination;
};

export type DeletePartDepartmentRequest = {
  type: typeof DELETE_PART_DEPARTMENT_REQUEST;
  partDepartmentId: string;
};

export type DeletePartDepartmentSuccess = {
  type: typeof DELETE_PART_DEPARTMENT_SUCCESS;
  partDepartmentId: string;
};

export type UpdatePartDepartmentRequest = {
  type: typeof UPDATE_PART_DEPARTMENT_REQUEST;
  partDepartmentId: string;
  payload: IPartDepartment;
};

export type UpdatePartDepartmentSuccess = {
  type: typeof UPDATE_PART_DEPARTMENT_SUCCESS;
  payload: IPartDepartment;
};

export type NewPartDepartmentRequest = {
  type: typeof NEW_PART_DEPARTMENT_REQUEST;
  payload: INewPartDepartmentFormValues;
};

export type NewPartDepartmentSuccess = {
  type: typeof NEW_PART_DEPARTMENT_SUCCESS;
  payload: IPartDepartment;
};

export type FetchPartDepartmentsActions =
  | GetAllPartDepartmentsRequest
  | GetAllPartDepartmentsSuccess
  | DeletePartDepartmentRequest
  | DeletePartDepartmentSuccess
  | UpdatePartDepartmentRequest
  | UpdatePartDepartmentSuccess
  | NewPartDepartmentRequest
  | NewPartDepartmentSuccess;
