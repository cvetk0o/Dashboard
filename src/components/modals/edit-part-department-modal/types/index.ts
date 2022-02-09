import { FormInstance } from 'antd';
import { IPartDepartment } from '../../../../store/part-departments/types';

export interface IEditPartDepartmentModal {
  modalVisible: boolean;
  setModalVisible: (values: boolean) => void;
  initialValues: IPartDepartment | undefined;
  onSubmit: (values: IPartDepartment) => void;
  formInstance: FormInstance;
}
