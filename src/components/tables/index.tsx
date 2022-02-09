/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';
import { Table, TablePaginationConfig } from 'antd';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { ITable } from '../../store/departments/types';
import Colors from '../../utils/colors/colors';
import {
  getDataPendingSelector,
  getTableDataSelector,
  getTablePaginationSelector,
} from '../../store/table/selector';

const TableWrapper = styled.div`
  width: 90%;
  margin-left: 5%;
  .ant-table th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: ${Colors.linkTextColor};
    color: white;
  }
`;
const DataTable: React.FunctionComponent<ITable> = ({
  columns,
  fetchData,
  dataType,
  onRowClick,
}) => {
  const dispatch = useDispatch();
  const data = useSelector(state => getTableDataSelector(state, dataType));
  const pagination = useSelector(state => getTablePaginationSelector(state, dataType));
  const pending = useSelector(state => getDataPendingSelector(state, dataType));

  React.useEffect(() => {
    dispatch(fetchData(pagination));
  }, []);

  const handleTableChange = (tablePagination: TablePaginationConfig) => {
    dispatch(
      fetchData({
        total: tablePagination.total,
        page: tablePagination.current,
        limit: tablePagination.pageSize,
      })
    );
  };

  return (
    <div>
      <TableWrapper>
        <Table
          loading={pending}
          columns={columns}
          dataSource={data}
          rowKey="_id"
          pagination={pagination}
          onChange={handleTableChange}
          onRow={record => {
            return {
              onClick: () => {
                if (onRowClick) onRowClick(record);
              },
            };
          }}
        />
      </TableWrapper>
    </div>
  );
};

export default DataTable;
