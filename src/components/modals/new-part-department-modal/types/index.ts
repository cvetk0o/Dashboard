import { FormInstance } from 'antd';
import { INewPartDepartmentFormValues } from '../../../../store/part-departments/types';

/* eslint-disable @typescript-eslint/ban-types */
export interface INewPartDepartmentModal {
  modalVisible: boolean;
  setModalVisible: Function;
  onSubmit: (values: INewPartDepartmentFormValues) => void;
  formInstance: FormInstance;
}
