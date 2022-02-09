/* eslint-disable react/prop-types */
import { Button, Modal } from 'antd';
import React from 'react';
import AddNewPartDepartmentForm from '../../forms/new-part-department-form';
import IntlMessages from '../../../utils/intlMessages/intlMessages';
import { INewPartDepartmentModal } from './types';

const NewPartDepartmentModal: React.FunctionComponent<INewPartDepartmentModal> = ({
  modalVisible,
  setModalVisible,
  onSubmit,
  formInstance,
}) => {
  return (
    <div>
      <Modal
        visible={modalVisible}
        onCancel={() => {
          setModalVisible(false);
          formInstance.resetFields();
        }}
        title={<IntlMessages id="partDepartments.page.addNewPartDepartment" />}
        footer={[
          <Button
            form="AddNewPartDepartmentForm"
            key="addNewPartDepartmentButton"
            type="primary"
            htmlType="submit"
          >
            <IntlMessages id="departments.page.addNewDepartment.submit" />
          </Button>,
        ]}
      >
        <AddNewPartDepartmentForm onSubmit={onSubmit} formInstance={formInstance} />
      </Modal>
    </div>
  );
};

export default NewPartDepartmentModal;
