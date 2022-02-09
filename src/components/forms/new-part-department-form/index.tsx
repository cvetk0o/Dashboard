/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
import { Form, Input, Select } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import IntlMessages from '../../../utils/intlMessages/intlMessages';
import { getAllDepartmentsSelector } from '../../../store/departments/selectors';
import { INewPartDepartmentForm } from './types';
import { getUserRoleSelector } from '../../../store/auth/selectors';

const StyledInput = styled(Input)`
  height: 45px;
  font-size: 15px;
`;
const AddNewPartDepartmentForm: React.FunctionComponent<INewPartDepartmentForm> = ({
  onSubmit,
  formInstance,
}) => {
  const departments = useSelector(getAllDepartmentsSelector);
  const userRole = useSelector(getUserRoleSelector);

  const selections = departments.map(department => (
    <Select.Option key={department._id} value={department._id}>
      {department.name}
    </Select.Option>
  ));

  return (
    <Form name="AddNewPartDepartmentForm" layout="vertical" onFinish={onSubmit} form={formInstance}>
      <Form.Item
        name="name"
        label={<IntlMessages id="partDepartments.page.addNewPartDepartment.label" />}
        rules={[{ required: true }]}
      >
        <StyledInput />
      </Form.Item>
      {userRole === 'ROOT' ? (
        <Form.Item
          name="department"
          label={
            <IntlMessages id="partDepartments.page.addNewPartDepartment.selectDepartmentLabel" />
          }
          rules={[{ required: true }]}
        >
          <Select>{selections}</Select>
        </Form.Item>
      ) : (
        <div />
      )}
    </Form>
  );
};

export default AddNewPartDepartmentForm;
