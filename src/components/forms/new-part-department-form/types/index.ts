import { FormInstance } from 'antd';
import { INewPartDepartmentFormValues } from '../../../../store/part-departments/types';

export interface INewPartDepartmentForm {
  onSubmit: (values: INewPartDepartmentFormValues) => void;
  formInstance: FormInstance;
}
