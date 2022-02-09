/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable no-underscore-dangle */
import { Button, Form, Popconfirm } from 'antd';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { PlusOutlined } from '@ant-design/icons';
import {
  deleteDepartmentRequest,
  getAllDepartmentsRequest,
  newDepartmentRequest,
  updateDepartmentRequest,
} from '../store/departments/actions';
import IntlMessages from '../utils/intlMessages/intlMessages';
import { getPendingDepartmentsSelector } from '../store/departments/selectors';
import {
  IDepartment,
  INewDepartmentFormValues,
  UpdateDepartmentData,
} from '../store/departments/types';
import DataTable from '../components/tables';
import NewDepartmentModal from '../components/modals/newDepartmentModal';
import EditDepartmentModal from '../components/modals/editDepartmentModal';
import withAuth from '../hoc/withAuth';
import { Roles } from '../types/roles';

const ButtonDivWrapper = styled.div`
  margin: 20px 5% 20px 5%;
`;

const columns = [
  {
    title: 'id',
    dataIndex: '_id',
    key: '_id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Created at',
    dataIndex: 'createdAt',
    key: 'createdAt',
  },
  {
    title: 'State',
    dataIndex: 'state',
    key: 'state',
  },
];

const Departments: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editDepartment, setEditDepartment] = useState<IDepartment>();
  const pending = useSelector(getPendingDepartmentsSelector);

  const [form] = Form.useForm();
  const [addForm] = Form.useForm();

  const onSubmit = (values: INewDepartmentFormValues) => {
    dispatch(newDepartmentRequest(values));
    setModalVisible(false);
  };

  const deleteAction = (
    event: React.MouseEvent<HTMLElement, MouseEvent> | undefined,
    record: IDepartment
  ) => {
    dispatch(deleteDepartmentRequest(record._id));
  };

  const getColumns = () => {
    const columnDelete = {
      title: 'DELETE',
      dataIndex: 'delete',
      key: 'delete',
      render: (text: string, record: IDepartment) => (
        <div onClick={e => e.stopPropagation()}>
          <Popconfirm
            title={<IntlMessages id="departments.page.deleteDepartment.question" />}
            onConfirm={e => deleteAction(e, record)}
          >
            <Button loading={pending}>
              <IntlMessages id="departments.page.delete" />
            </Button>
          </Popconfirm>
        </div>
      ),
    };

    return [...columns, columnDelete];
  };

  const showEditModal = (rowData: IDepartment) => {
    setEditModalVisible(true);
    setEditDepartment(rowData);
  };

  React.useEffect(() => {
    form.setFieldsValue({ ...editDepartment });
  }, [editDepartment]);

  const updateDepartment = (values: UpdateDepartmentData) => {
    if (editDepartment) dispatch(updateDepartmentRequest(editDepartment._id, values));
    if (!pending) setEditModalVisible(false);
  };

  return (
    <div>
      <ButtonDivWrapper>
        <Button
          type="primary"
          htmlType="submit"
          onClick={() => setModalVisible(true)}
          style={{ width: '10%', height: '45px' }}
          icon={<PlusOutlined />}
        >
          <IntlMessages id="departments.page.addNewDepartment" />
        </Button>
      </ButtonDivWrapper>
      <DataTable
        columns={getColumns()}
        fetchData={getAllDepartmentsRequest}
        dataType="departments"
        onRowClick={showEditModal}
      />

      <NewDepartmentModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        onSubmit={onSubmit}
        formInstance={addForm}
      />

      <EditDepartmentModal
        modalVisible={editModalVisible}
        setModalVisible={setEditModalVisible}
        initialValues={editDepartment}
        onSubmit={updateDepartment}
        formInstance={form}
      />
    </div>
  );
};

export default withAuth(Departments, [Roles.ROOT]);
