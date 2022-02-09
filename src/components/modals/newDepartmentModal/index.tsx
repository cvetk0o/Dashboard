/* eslint-disable react/prop-types */
import React from 'react';
import { Modal, Button } from 'antd';
import IntlMessages from '../../../utils/intlMessages/intlMessages';
import { INewDepartmentModal } from './types';
import AddNewDepartmentForm from '../../forms/newDepartmentForm/newDepartmentForm';

const NewDepartmentModal: React.FunctionComponent<INewDepartmentModal> = ({
  modalVisible,
  setModalVisible,
  onSubmit,
  formInstance,
}) => {
  return (
    <Modal
      title={<IntlMessages id="departments.page.addNewDepartment" />}
      visible={modalVisible}
      onCancel={() => {
        setModalVisible(false);
        formInstance.resetFields();
      }}
      footer={[
        <Button
          form="AddNewDepartmentForm"
          key="addNewDepartmentButton"
          type="primary"
          htmlType="submit"
        >
          <IntlMessages id="departments.page.addNewDepartment.submit" />
        </Button>,
      ]}
    >
      <AddNewDepartmentForm onSubmit={onSubmit} formInstance={formInstance} />
    </Modal>
  );
};

export default NewDepartmentModal;
