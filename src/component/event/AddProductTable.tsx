import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { Table, Select, Input, Checkbox } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import { Radio } from 'antd';
import { PAGE_ROUTER } from '../../util/Constant';
import { AdminPageContent, PageBtnAdd, PageTitle, PageHeader, BtnView, BtnSearch, BtnDownload, Center, WrapInput, LabelInput, ActionColumn, TableBottomRight, FlexRow } from '../../assets/theme/commonStyle';
import { useRouter } from 'next/router';
import AdminPage from '../admin/Admin';
const data = require('../../mock/products.json') as DataType[]
console.log("Data::", data)
const { Option } = Select;

interface DataType {
  code: string;
  productName: string;
  departmentName: string;
  unitPrice: number;
  costPrice: number;
}

const AddProductTable = ({ action }) => {
  const { innerHeight } = window
  console.log({ innerHeight })
  const [selected, setSelected] = useState(null)
  // const [data, setData] = useState<DataType[]>([])
  const router = useRouter()

  const columns: ColumnsType<DataType> = [
    {
      title: "",
      dataIndex: 'checkbox',
      width: 50,
      render: (e) => {
        return (
          <Center>
            <Checkbox></Checkbox>
          </Center>
        )
      },
    },
    {
      title: () => {
        return (
          <Center>JANコード</Center>
        )
      },
      dataIndex: 'code',
      width: '15%',
      showSorterTooltip: false,
      sorter: (a, b) => parseFloat(a.code) - parseFloat(b.code)
    },
    {
      title: () => {
        return (
          <Center>商品名</Center>
        )
      },
      dataIndex: 'productName',
      showSorterTooltip: false,
      sorter: (a, b) => (a > b ? -1 : 1)
    },
    {
      title: () => {
        return (
          <Center>部門名</Center>
        )
      },
      dataIndex: 'departmentName',
      width: '8%',
      render: (e, record) => {
        return (
          <Center>{e}</Center>
        )
      },
      showSorterTooltip: false,
      sorter: (a, b) => (a > b ? -1 : 1)
    },
    {
      title: () => {
        return (
          <Center>単価</Center>
        )
      },
      dataIndex: 'unitPrice',
      width: '8%',
      render: (e) => {
        return (
          <Center>{e}</Center>
        )
      },
      showSorterTooltip: false,
      sorter: (a, b) => (a > b ? -1 : 1)
    },
    {
      title: () => {
        return (
          <Center>原価</Center>
        )
      },
      dataIndex: 'costPrice',
      width: '8%',
      render: (e) => {
        return (
          <Center>{e}</Center>
        )
      },
      showSorterTooltip: false,
      sorter: (a, b) => (a > b ? -1 : 1)
    },
  ];

  return (
    <AdminPageContent>
      <WrapInput>
        <div>
          <LabelInput $width={90}>商品コード：</LabelInput>
          <Input
            style={{ height: 32 }}
            className='custom-ant-input'
            placeholder='商品コード...'
          />
        </div>
        <div>
          <LabelInput>商品ID：</LabelInput>
          <Input
            style={{ height: 32 }}

            className='custom-ant-input'
            placeholder='商品ID...'
          />
        </div>
      </WrapInput>

      <SearchWrap>
        <WrapInput>
          <div>
            <LabelInput $width={90}>商品名：</LabelInput>
            <Input
              style={{ height: 32 }}

              className='custom-ant-input'
              placeholder='商品名...'
            />
          </div>
          <div>
            <LabelInput>部門名：</LabelInput>
            <Select
              style={{ width: 250, height: 32, borderRadius: 5 }}
              value={selected}
              placeholder="愛知"
              onChange={(e) => setSelected(e)}

            >
              <Option value="0">&nbsp;</Option>
              <Option value="1">KUKKA</Option>
              <Option value="2">MOCO</Option>
              <Option value="3">Albee</Option>
              <Option value="3">プランタリー</Option>

            </Select>
          </div>
        </WrapInput>
        <BtnSearch style={{ height: 32 }}>検索</BtnSearch>
      </SearchWrap>

      <HeaderTable >
        <TotalItem>{`件数：${data.length}`}</TotalItem>
        <BtnDownload style={{ width: 100 }} onClick={() => action()}>商品追加</BtnDownload>
      </HeaderTable>

      <Table columns={columns} dataSource={data}
        // scroll={{ y: innerHeight < 800 ? 300 : 400 }}
        pagination={{
          total: data.length,
          defaultPageSize: 10,
          showSizeChanger: false,
          position: ["bottomCenter"],
        }}
      />

    </AdminPageContent>
  )
}

const TotalItem = styled.span`
  font-size: 14px;
  text-align: left;
  display: block;
`

const SearchWrap = styled.div`
  width: 780px;
  display: flex;
  justify-content: space-between;
  marginBottom: 18px
`

const HeaderTable = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 12px;
`

export default AddProductTable