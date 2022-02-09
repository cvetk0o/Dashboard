import { FormInstance } from 'antd';
import { IDepartment } from '../../../../store/departments/types';

export interface IEditDepartmentModal {
  modalVisible: boolean;
  setModalVisible: (values: boolean) => void;
  initialValues: IDepartment | undefined;
  onSubmit: (values: IDepartment) => void;
  formInstance: FormInstance;
}
