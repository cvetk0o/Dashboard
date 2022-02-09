import { FormInstance } from 'antd';
import { INewDepartmentFormValues } from '../../../../store/departments/types';

/* eslint-disable @typescript-eslint/ban-types */
export interface INewDepartmentModal {
  modalVisible: boolean;
  setModalVisible: Function;
  onSubmit: (values: INewDepartmentFormValues) => void;
  formInstance: FormInstance;
}
