/* eslint-disable react/prop-types */
import { Button, Modal } from 'antd';
import React from 'react';
import EditPartDepartmentForm from '../../forms/edit-part-department-form/editPartDepartmentForm';
import { IEditPartDepartmentModal } from './types';
import IntlMessages from '../../../utils/intlMessages/intlMessages';

const EditPartDepartmentModal: React.FunctionComponent<IEditPartDepartmentModal> = ({
  modalVisible,
  setModalVisible,
  initialValues,
  onSubmit,
  formInstance,
}) => {
  return (
    <Modal
      title={<IntlMessages id="partDepartments.page.editPartDepartment.title" />}
      visible={modalVisible}
      onCancel={() => setModalVisible(false)}
      footer={[
        <Button
          form="updatePartDepartmentForm"
          key="updatePartDepartmentButton"
          type="primary"
          htmlType="submit"
        >
          SubMIT
        </Button>,
      ]}
    >
      <EditPartDepartmentForm
        initialValues={initialValues}
        onSubmit={onSubmit}
        formInstance={formInstance}
      />
    </Modal>
  );
};

export default EditPartDepartmentModal;
