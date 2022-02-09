/* eslint-disable react/prop-types */
import { Button, Modal } from 'antd';
import React from 'react';
import { IEditDepartmentModal } from './types';
import IntlMessages from '../../../utils/intlMessages/intlMessages';
import EditDepartmentForm from '../../forms/editDepartmentForm/editDepartmentForm';

const EditDepartmentModal: React.FunctionComponent<IEditDepartmentModal> = ({
  modalVisible,
  setModalVisible,
  initialValues,
  onSubmit,
  formInstance,
}) => {
  return (
    <Modal
      title={<IntlMessages id="departments.page.editDepartment.title" />}
      visible={modalVisible}
      onCancel={() => setModalVisible(false)}
      footer={[
        <Button
          form="updateDepartmentForm"
          key="updateDepartmentButton"
          type="primary"
          htmlType="submit"
        >
          <IntlMessages id="departments.page.editDepartment.submit" />
        </Button>,
      ]}
    >
      <EditDepartmentForm
        initialValues={initialValues}
        onSubmit={onSubmit}
        formInstance={formInstance}
      />
    </Modal>
  );
};

export default EditDepartmentModal;
