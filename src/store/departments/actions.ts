import { IPagination } from '../../types/types';
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
import {
  DeleteDepartmentRequest,
  DeleteDepartmentSuccess,
  FetchAllDepartmentsRequest,
  FetchAllDepartmentsSuccess,
  GetAllDepartmentsRequest,
  GetAllDepartmentsSuccess,
  GetAllDepartmentsSuccessPayload,
  GetDepartmentByIdRequest,
  IDepartment,
  INewDepartmentFormValues,
  NewDepartmentRequest,
  NewDepartmentRequestSuccess,
  UpdateDepartmentData,
  UpdateDepartmentRequest,
  UpdateDepartmentSuccess,
} from './types';

export const getAllDepartmentsRequest = (pagination: IPagination): GetAllDepartmentsRequest => ({
  type: GET_ALL_DEPARTMENTS_REQUEST,
  pagination,
});

export const getDepartmentByIdRequest = (payload: number): GetDepartmentByIdRequest => ({
  type: GET_DEPARTMENT_BY_ID_REQUEST,
  payload,
});

export const newDepartmentRequest = (payload: INewDepartmentFormValues): NewDepartmentRequest => ({
  type: NEW_DEPARTMENT_REQUEST,
  payload,
});

export const newDepartmentRequestSuccess = (payload: IDepartment): NewDepartmentRequestSuccess => ({
  type: NEW_DEPARTMENT_REQUEST_SUCCESS,
  payload,
});

export const getAllDepartmentsSuccess = (
  payload: GetAllDepartmentsSuccessPayload,
  pagination: IPagination
): GetAllDepartmentsSuccess => ({
  type: GET_ALL_DEPARTMENTS_SUCCESS,
  payload,
  pagination,
});

export const deleteDepartmentRequest = (departmentId: string): DeleteDepartmentRequest => ({
  type: DELETE_DEPARTMENT_REQUEST,
  departmentId,
});

export const deleteDepartmentSuccess = (departmentId: string): DeleteDepartmentSuccess => ({
  type: DELETE_DEPARTMENT_SUCCESS,
  departmentId,
});

export const updateDepartmentRequest = (
  idDepartment: string,
  payload: UpdateDepartmentData
): UpdateDepartmentRequest => ({
  type: UPDATE_DEPARTMENT_REQUEST,
  idDepartment,
  payload,
});

export const updateDepartmentSuccess = (payload: IDepartment): UpdateDepartmentSuccess => ({
  type: UPDATE_DEPARTMENT_SUCCESS,
  payload,
});

export const fetchAllDepartmentsRequest = (): FetchAllDepartmentsRequest => ({
  type: FETCH_ALL_DEPARTMENTS_REQUEST,
});

export const fetchAllDepartmentsSuccess = (
  departments: IDepartment[]
): FetchAllDepartmentsSuccess => ({
  type: FETCH_ALL_DEPARTMENTS_SUCCESS,
  departments,
});
