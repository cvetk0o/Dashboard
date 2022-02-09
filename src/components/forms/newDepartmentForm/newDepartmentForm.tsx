/* eslint-disable react/prop-types */
import React from 'react';

import { Form, Input } from 'antd';
import styled from 'styled-components';
import IntlMessages from '../../../utils/intlMessages/intlMessages';
import { INewDepartmentForm } from './types';

const StyledInput = styled(Input)`
  height: 45px;
  font-size: 15px;
`;

const AddNewDepartmentForm: React.FunctionComponent<INewDepartmentForm> = ({
  onSubmit,
  formInstance,
}) => {
  return (
    <Form name="AddNewDepartmentForm" onFinish={onSubmit} layout="vertical" form={formInstance}>
      <Form.Item
        label={<IntlMessages id="departments.page.addNewDepartment.label" />}
        name="name"
        rules={[{ required: true }]}
      >
        <StyledInput />
      </Form.Item>
    </Form>
  );
};

export default AddNewDepartmentForm;
