/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-console */
import { Button, Popconfirm, Form } from 'antd';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { PlusOutlined } from '@ant-design/icons';
import IntlMessages from '../utils/intlMessages/intlMessages';
import DataTable from '../components/tables';
import { fetchAllDepartmentsRequest } from '../store/departments/actions';
import {
  deletePartDepartmentRequest,
  getAllPartDepartmentsRequest,
  newPartDepartmentRequest,
  updatePartDepartmentRequest,
} from '../store/part-departments/actions';
import { INewPartDepartmentFormValues, IPartDepartment } from '../store/part-departments/types';
import EditPartDepartmentModal from '../components/modals/edit-part-department-modal';
import NewPartDepartmentModal from '../components/modals/new-part-department-modal';
import { getUserRoleSelector } from '../store/auth/selectors';
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
    title: 'State',
    dataIndex: 'state',
    key: 'state',
  },
];

const PartDepartments: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editPartDepartment, setEditPartDepartment] = useState<IPartDepartment>();
  const [modalVisible, setModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [addForm] = Form.useForm();
  const userRole = useSelector(getUserRoleSelector);

  const deleteAction = (
    event: React.MouseEvent<HTMLElement, MouseEvent> | undefined,
    record: IPartDepartment
  ) => {
    dispatch(deletePartDepartmentRequest(record._id));
  };

  const showEditModal = (rowData: IPartDepartment) => {
    setEditModalVisible(true);
    setEditPartDepartment(rowData);
  };

  React.useEffect(() => {
    if (userRole === 'ROOT') dispatch(fetchAllDepartmentsRequest());
  }, []);

  React.useEffect(() => {
    form.setFieldsValue({ ...editPartDepartment });
  }, [editPartDepartment]);

  const updatePartDepartment = (values: IPartDepartment) => {
    if (editPartDepartment) dispatch(updatePartDepartmentRequest(editPartDepartment._id, values));
    setEditModalVisible(false);
  };

  const addNewPartDepartment = (values: INewPartDepartmentFormValues) => {
    dispatch(newPartDepartmentRequest(values));
    setModalVisible(false);
  };

  const getColumns = () => {
    const columnDelete = {
      title: 'DELETE',
      dataIndex: 'delete',
      key: 'delete',
      render: (text: string, record: IPartDepartment) => (
        <div onClick={e => e.stopPropagation()}>
          <Popconfirm
            title={<IntlMessages id="partDepartments.page.deletePartDepartment.question" />}
            onConfirm={e => deleteAction(e, record)}
          >
            <Button>
              <IntlMessages id="partDepartments.page.delete" />
            </Button>
          </Popconfirm>
        </div>
      ),
    };
    return [...columns, columnDelete];
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
        fetchData={getAllPartDepartmentsRequest}
        dataType="partDepartments"
        onRowClick={showEditModal}
      />

      <EditPartDepartmentModal
        modalVisible={editModalVisible}
        setModalVisible={setEditModalVisible}
        initialValues={editPartDepartment}
        onSubmit={updatePartDepartment}
        formInstance={form}
      />

      <NewPartDepartmentModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        onSubmit={addNewPartDepartment}
        formInstance={addForm}
      />
    </div>
  );
};

export default withAuth(PartDepartments, [Roles.ROOT, Roles.ADMIN]);
