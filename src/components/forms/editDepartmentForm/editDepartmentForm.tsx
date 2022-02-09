/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { Form, Select, Input } from 'antd';
import IntlMessages from '../../../utils/intlMessages/intlMessages';
import { IEditDepartmentForm } from './types';

const StyledInput = styled(Input)`
  height: 45px;
  font-size: 15px;
`;

const EditDepartmentForm: React.FunctionComponent<IEditDepartmentForm> = ({
  initialValues,
  onSubmit,
  formInstance,
}) => {
  return (
    <Form
      name="updateDepartmentForm"
      initialValues={initialValues}
      form={formInstance}
      layout="vertical"
      onFinish={onSubmit}
    >
      <Form.Item
        label={<IntlMessages id="departments.page.addNewDepartment.label" />}
        name="name"
        rules={[{ required: true }]}
      >
        <StyledInput />
      </Form.Item>
      <Form.Item
        label={<IntlMessages id="departments.page.updateDepartment.stateLabel" />}
        name="state"
      >
        <Select>
          <Select.Option value="REMOVED">REMOVED</Select.Option>
          <Select.Option value="ACTIVE">ACTIVE</Select.Option>
          <Select.Option value="INACTIVE">INACTIVE</Select.Option>
        </Select>
      </Form.Item>
    </Form>
  );
};

export default EditDepartmentForm;
