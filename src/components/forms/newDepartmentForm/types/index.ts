import { FormInstance } from 'antd';
import { INewDepartmentFormValues } from '../../../../store/departments/types';

/* eslint-disable @typescript-eslint/ban-types */
export interface INewDepartmentForm {
  onSubmit: (values: INewDepartmentFormValues) => void;
  formInstance: FormInstance;
}
