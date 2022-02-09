/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import { all, AllEffect, call, put, ForkEffect, takeLatest } from 'redux-saga/effects';
import { message } from 'antd';
import { AxiosResponse } from 'axios';
import {
  deletePartDepartment,
  getAllPartDepartments,
  newPartDepartment,
  updatePartDepartment,
} from '../../services/PartDepartmentsService';
import {
  DELETE_PART_DEPARTMENT_REQUEST,
  GET_ALL_PART_DEPARTMENTS_REQUEST,
  NEW_PART_DEPARTMENT_REQUEST,
  UPDATE_PART_DEPARTMENT_REQUEST,
} from './actionTypes';
import {
  DeletePartDepartmentRequest,
  GetAllPartDepartmentsRequest,
  IGetPartDepartmentsResponse,
  INewPartDepartmentResponse,
  NewPartDepartmentRequest,
  UpdatePartDepartmentRequest,
} from './types';
import {
  deletePartDepartmentSuccess,
  getAllPartDepartmentsSuccess,
  newPartDepartmentSuccess,
  updatePartDepartmentSuccess,
} from './actions';

function* getAllPartDepartmentsRequestSaga(action: GetAllPartDepartmentsRequest) {
  try {
    const response: AxiosResponse<IGetPartDepartmentsResponse> = yield call(
      getAllPartDepartments,
      action.pagination
    );
    yield put(
      getAllPartDepartmentsSuccess(response?.data?.data, {
        ...action?.pagination,
        total: +response.headers['total-elements'],
      })
    );
  } catch (e: any) {
    message.error(e.message);
  }
}

function* deletePartDepartmentSaga(action: DeletePartDepartmentRequest) {
  try {
    yield call(deletePartDepartment, action.partDepartmentId);
    yield put(deletePartDepartmentSuccess(action.partDepartmentId));
  } catch (e: any) {
    message.error(e.message);
  }
}

function* updatePartDepartmentSaga(action: UpdatePartDepartmentRequest) {
  try {
    const response: AxiosResponse<any> = yield call(
      updatePartDepartment,
      action.partDepartmentId,
      action.payload
    );
    yield put(updatePartDepartmentSuccess(response?.data?.data));
  } catch (e: any) {
    message.error(e.message);
  }
}

function* newPartDepartmentRequestSaga(action: NewPartDepartmentRequest) {
  try {
    const response: AxiosResponse<INewPartDepartmentResponse> = yield call(
      newPartDepartment,
      action.payload
    );
    yield put(newPartDepartmentSuccess(response?.data?.data));
  } catch (e: any) {
    message.error(e.message);
  }
}

function* partDepartmentsSaga(): Generator<AllEffect<ForkEffect<never>>> {
  yield all([
    takeLatest(GET_ALL_PART_DEPARTMENTS_REQUEST, getAllPartDepartmentsRequestSaga),
    takeLatest(DELETE_PART_DEPARTMENT_REQUEST, deletePartDepartmentSaga),
    takeLatest(UPDATE_PART_DEPARTMENT_REQUEST, updatePartDepartmentSaga),
    takeLatest(NEW_PART_DEPARTMENT_REQUEST, newPartDepartmentRequestSaga),
  ]);
}

export default partDepartmentsSaga;
