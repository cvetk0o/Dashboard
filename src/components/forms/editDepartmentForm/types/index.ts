import { FormInstance } from 'antd';
import { IDepartment } from '../../../../store/departments/types';

export interface IEditDepartmentForm {
  initialValues: IDepartment | undefined;
  onSubmit: (values: IDepartment) => void;
  formInstance: FormInstance;
}
