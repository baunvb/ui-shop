import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { Table, Input } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { formatCurrency } from '../../src/util/Utils';
import { PageHeader, PageTitle, Center, LabelInput, FlexRow, TableBottomRight } from '../../src/assets/theme/commonStyle';
import AdminPage from '../../src/component/admin/Admin';
import Head from 'next/head';
const data = require('../../src/mock/saleDetail.json') as DataType[]

interface DataType {
  no: number;
  productCode: string;
  productName: string;
  departmentId: string;
  departmentName: string;
  unitPrice: number;
  costPrice: number;
  index: number;
  salesQuantity: number;
  totalSent: number;
  totalDamage: number;
}

const columns: ColumnsType<DataType> = [
  {
    title: () => {
      return (
        <Center>#</Center>
      )
    },
    dataIndex: 'no',
    width: 50,
    render: (e) => {
      return (
        <Center>{e}</Center>
      )
    }
  },
  {
    title: () => {
      return (
        <Center>
          <span>商品コード</span>
          <Input
            className='custom-ant-header-cel-input'
          />
        </Center>
      )
    },
    dataIndex: 'productCode',
    width: '10%',
    showSorterTooltip: false
  },
  {
    title: () => {
      return (
        <Center>
          <span>商品名</span>
          <Input
            className='custom-ant-header-cel-input'
          />
        </Center>
      )
    },
    dataIndex: 'productName',
  },
  {
    title: () => {
      return (
        <Center>
          <span>部門ID</span>
          <Input
            className='custom-ant-header-cel-input'
          />
        </Center>
      )
    },
    dataIndex: 'departmentId',
    width: '6%',
    render: (e) => {
      return (
        <Center>{e}</Center>
      )
    },
  }, {
    title: () => {
      return (
        <Center>
          <span>部門名</span>
          <Input
            className='custom-ant-header-cel-input'
          />
        </Center>
      )
    },
    dataIndex: 'departmentName',
    width: '6%',
    render: (e) => {
      return (
        <Center>{e}</Center>
      )
    },
  },
  {
    title: () => {
      return (
        <Center>単価</Center>
      )
    },
    dataIndex: 'unitPrice',
    width: '10%',
    render: (e) => {
      return (
        <Center>{formatCurrency(e)}</Center>
      )
    },
  }, {
    title: () => {
      return (
        <Center>原価</Center>
      )
    },
    dataIndex: 'costPrice',
    width: '6%',
    render: (e) => {
      return (
        <Center>{formatCurrency(e)}</Center>
      )
    },
  },
  {
    title: () => {
      return (
        <Center>指数</Center>
      )
    },
    dataIndex: 'index',
    width: '6%',
    render: (e) => {
      return (
        <Center>{e}</Center>
      )
    },
  },
  {
    title: () => {
      return (
        <Center>指数</Center>
      )
    },
    dataIndex: 'salesQuantity',
    width: '6%',
    render: (e) => {
      return (
        <Center>{formatCurrency(e)}</Center>
      )
    },
  },
  {
    title: () => {
      return (
        <Center>送付合計</Center>
      )
    },
    dataIndex: 'totalSent',
    width: '6%',
    render: (e) => {
      return (
        <Center>{formatCurrency(e)}</Center>
      )
    },
  },
  {
    title: () => {
      return (
        <Center>破損合計</Center>
      )
    },
    dataIndex: 'totalDamage',
    width: '6%',
    render: (e) => {
      return (
        <Center>{formatCurrency(e)}</Center>
      )
    },
  }
];


const SaleDetail = () => {
  // const [data, setData] = useState<DataType[]>([])

  return (
    <AdminPage>
      <Head>
        <title>売上詳細</title>
      </Head>
      <PageHeader>
        <PageTitle>売上詳細</PageTitle>
      </PageHeader>

      <FlexRow>
        <SaleInfo>
          <LabelInput>店舗ID：</LabelInput>
          <span>011097</span>
        </SaleInfo>
        <SaleInfo>
          <LabelInput>店舗名：</LabelInput>
          <span>イオンモール和歌山</span>
        </SaleInfo>
      </FlexRow>

      <FlexRow>
        <SaleInfo>
          <LabelInput>地域：</LabelInput>
          <span>和歌山</span>
        </SaleInfo>
        <SaleInfo>
          <LabelInput>地方：</LabelInput>
          <span>近畿</span>
        </SaleInfo>
        <SaleInfo>
          <LabelInput>開始日：</LabelInput>
          <span>2023/08/10</span>
        </SaleInfo>
        <SaleInfo>
          <LabelInput>開始日：</LabelInput>
          <span>2023/08/31</span>
        </SaleInfo>
      </FlexRow>

      <TotalItem>{`件数：${data.length}`}</TotalItem>
      <Table columns={columns} dataSource={data}
        scroll={{ x: 1200 }}
        pagination={{
          total: data.length,
          defaultPageSize: 10,
          showSizeChanger: false,
          position: ["bottomCenter"],
          showTotal: () => {
            return (
              <TableBottomRight><BtnDownload>ダウンロード</BtnDownload></TableBottomRight>
            )
          }
        }}
      />
    </AdminPage>
  )
}


const TotalItem = styled.span`
  margin-top: 30px;
  margin-bottom: 20px;
  font-size: 14px;
  text-align: left;
  display: block;
`

const BtnDownload = styled.div`
  position: absolute;
  right: 0;
  width: 120px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-image: linear-gradient(#F5F5F5, #B3B3B3);
  height: 32px;
  border: 1px solid #666666;
  cursor: pointer;
`

const SaleInfo = styled.div`
  width: 200px;
  text-align: left;
`




export default SaleDetail