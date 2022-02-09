/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { Form, Input, Select } from 'antd';
import { IEditPartDepartmentForm } from './types';

const StyledInput = styled(Input)`
  height: 45px;
  font-size: 15px;
`;

const EditPartDepartmentForm: React.FunctionComponent<IEditPartDepartmentForm> = ({
  initialValues,
  onSubmit,
  formInstance,
}) => {
  return (
    <Form
      name="updatePartDepartmentForm"
      initialValues={initialValues}
      form={formInstance}
      layout="vertical"
      onFinish={onSubmit}
    >
      <Form.Item label="Edit part department name" name="name" rules={[{ required: true }]}>
        <StyledInput />
      </Form.Item>
      <Form.Item name="state" label="Edit part department state">
        <Select>
          <Select.Option value="REMOVED">REMOVED</Select.Option>
          <Select.Option value="ACTIVE">ACTIVE</Select.Option>
          <Select.Option value="INACTIVE">INACTIVE</Select.Option>
        </Select>
      </Form.Item>
    </Form>
  );
};

export default EditPartDepartmentForm;
