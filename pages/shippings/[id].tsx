import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { Table, Input } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { formatCurrency } from '../../src/util/Utils';
import { PageHeader, PageTitle, Center, LabelInput, ActionColumn, BtnView, TableBottomRight, BtnDownload } from '../../src/assets/theme/commonStyle';
import { Checkbox } from 'antd';
import AdminPage from '../../src/component/admin/Admin';
import Head from 'next/head';


const data = require('../../src/mock/shippingDetail.json') as DataType[]

interface DataType {
  no: number;
  productCode: string;
  productName: string;
  separation: boolean;
  unitPrice: number;
  availableStockQuantity: number;
  recommendStockQuantity: number;
  numberOfAdditions: number;
  pickingNumber: number;
  roundMinutes: number;
  display: number;
  displayInput: number;
  displayOricon: number;
  shelfBin: number;
  replenishment: number;
  item: number;
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
    width: 600
  },
  {
    title: () => {
      return (
        <Center>区切</Center>
      )
    },
    dataIndex: 'separation',
    width: 60,
    render: (e) => {
      return (
        <Center>{"✔︎"}</Center>
      )
    },
  }, {
    title: () => {
      return (
        <Center>有効在庫数</Center>
      )
    },
    dataIndex: 'availableStockQuantity',
    width: 150,
    render: (e) => {
      return (
        <Center>{e}</Center>
      )
    },
  },
  {
    title: () => {
      return (
        <Center>推奨在庫数</Center>
      )
    },
    dataIndex: 'recommendStockQuantity',
    width: 150,
    render: (e) => {
      return (
        <Center>{e}</Center>
      )
    },
  }, {
    title: () => {
      return (
        <Center>追加数</Center>
      )
    },
    dataIndex: 'numberOfAdditions',
    width: 100,
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
    width: 100,
    render: (e) => {
      return (
        <Center>{formatCurrency(e)}</Center>
      )
    },
  },
  {
    title: () => {
      return (
        <Center>ピッキング数</Center>
      )
    },
    dataIndex: 'pickingNumber',
    width: 160,
    render: (e) => {
      return (
        <Center>{e}</Center>
      )
    },
  },
  {
    title: () => {
      return (
        <Center>
          ラウンド分 <br />
          (利用)
        </Center>
      )
    },
    dataIndex: 'roundMinutes',
    width: 150,
    render: (e) => {
      return (
        <Center>{e}</Center>
      )
    },
  },
  {
    title: () => {
      return (
        <Center>陳列</Center>
      )
    },
    dataIndex: 'display',
    width: 100,
    render: (e) => {
      return (
        <Center>{e}</Center>
      )
    },
  },
  {
    title: () => {
      return (
        <Center>陳列 <br /> (入力)</Center>
      )
    },
    dataIndex: 'displayInput',
    width: 100,
    render: (e) => {
      return (
        <Center>{e}</Center>
      )
    },
  },
  {
    title: () => {
      return (
        <Center>陳列 <br />
          (オリコン)</Center>
      )
    },
    dataIndex: 'displayOricon',
    width: 150,
    render: (e) => {
      return (
        <Center>{e}</Center>
      )
    },
  },
  {
    title: () => {
      return (
        <Center>棚番</Center>
      )
    },
    dataIndex: 'shelfBin',
    width: 80,
    render: (e) => {
      return (
        <Center>{e}</Center>
      )
    },
  },
  {
    title: () => {
      return (
        <Center>補充</Center>
      )
    },
    dataIndex: 'replenishment',
    width: 80,
    render: (e) => {
      return (
        <Center>{e}</Center>
      )
    },
  },
  {
    title: () => {
      return (
        <Center>項目X</Center>
      )
    },
    dataIndex: 'item',
    width: 80,
    render: (e) => {
      return (
        <Center>{e > 0 ? e : ''}</Center>
      )
    },

  }, {
    title: '',
    dataIndex: 'action',
    width: 50,
    render: (e, record) => {
      return (
        <ActionColumn>
          <BtnView
          >詳細</BtnView>
        </ActionColumn>
      )
    }
  },

];


const ShippingDetail = () => {
  // const [data, setData] = useState<DataType[]>([])

  return (
    <AdminPage>
      <Head>
        <title>出荷詳細</title>
      </Head>
      <PageHeader>
        <PageTitle>出荷詳細</PageTitle>
        <BtnDownload style={{height: 38}}>ピッキングへ</BtnDownload>
      </PageHeader>

      <FlexRow style={{ marginBottom: 32 }}>
        <LabelInput $width={250}>件数：〇〇</LabelInput>
        <Checkbox onChange={(e) => { }}><LabelInput $width={120}>ラウンド分利用</LabelInput></Checkbox>
      </FlexRow>

      <Table columns={columns} dataSource={data}
        scroll={{ x: 1600 }}
        pagination={{
          total: data.length,
          defaultPageSize: 10,
          showSizeChanger: false,
          position: ["bottomCenter"],
          showTotal: () => {
            return (
              <TableBottomRight>
                <BtnDownload>ダウンロード</BtnDownload>
                <BtnDownload>出荷完了</BtnDownload>
              </TableBottomRight>
            )
          }
        }}
      />
    </AdminPage>
  )
}


const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
`


export default ShippingDetail