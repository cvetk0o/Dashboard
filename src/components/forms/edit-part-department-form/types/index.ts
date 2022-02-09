import { FormInstance } from 'antd';
import { IPartDepartment } from '../../../../store/part-departments/types';

export interface IEditPartDepartmentForm {
  initialValues: IPartDepartment | undefined;
  onSubmit: (values: IPartDepartment) => void;
  formInstance: FormInstance;
}
