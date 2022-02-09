import { AxiosResponse } from 'axios';
import axiosInstance from '../config/axios';
import {
  IDepartment,
  IGetDepartmentsResponse,
  INewDepartmentFormValues,
  INewDepartmentResponse,
  IUpdateDepartmentResponse,
  UpdateDepartmentData,
} from '../store/departments/types';
import { IPagination } from '../types/types';
import BACK_URL from '../utils/urls';

export const getAllDepartmentsRequest = (
  pagination: IPagination
): Promise<AxiosResponse<IGetDepartmentsResponse>> =>
  axiosInstance.get<IGetDepartmentsResponse>(`${BACK_URL}/departments`, {
    params: { limit: pagination.limit, page: pagination.page },
  });

export const newDepartment = (
  values: INewDepartmentFormValues
): Promise<AxiosResponse<INewDepartmentResponse>> =>
  axiosInstance.post<INewDepartmentResponse>(`${BACK_URL}/departments`, values);

export const getDepartmentByIdRequest = (id: number): Promise<AxiosResponse<IDepartment>> =>
  axiosInstance.get(`${BACK_URL}/departments/${id}`);

export const updateDepartment = (
  departmentId: string,
  data: UpdateDepartmentData
): Promise<AxiosResponse<IUpdateDepartmentResponse>> =>
  axiosInstance.patch(`${BACK_URL}/departments/${departmentId}`, data);

export const deleteDepartment = (departmentId: string): Promise<AxiosResponse<null>> =>
  axiosInstance.delete(`${BACK_URL}/departments/${departmentId}`);
