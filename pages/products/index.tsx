import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { Table, Select, Input } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import { PAGE_ROUTER } from '../../src/util/Constant';
import { PageBtnAdd, PageTitle, PageHeader, BtnView, BtnSearch, BtnDownload, Center, WrapInput, LabelInput, ActionColumn, TableBottomRight } from '../../src/assets/theme/commonStyle';
import { useRouter } from 'next/router';
import AdminPage from '../../src/component/admin/Admin';
import Head from 'next/head';
const data = require('../../src/mock/products.json') as DataType[]
console.log("Data::", data)
const { Option } = Select;

interface DataType {
  code: string;
  productName: string;
  departmentName: string;
  quantityInStock: number;
  status: string;
  unitPrice: number;
  costPrice: number;
  minimumLot: number;

}

const Products = () => {
  const [selected, setSelected] = useState(null)
  // const [data, setData] = useState<DataType[]>([])
  const router = useRouter()

  const columns: ColumnsType<DataType> = [
    {
      title: () => {
        return (
          <Center>JANコード</Center>
        )
      },
      dataIndex: 'code',
      width: '10%',
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
          <Center>在庫数</Center>
        )
      },
      dataIndex: 'quantityInStock',
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
          <Center>ステータス</Center>
        )
      },
      dataIndex: 'status',
      width: '10%',
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
    {
      title: () => {
        return (
          <Center>陳列可能数</Center>
        )
      },
      dataIndex: 'minimumLot',
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
      title: '',
      dataIndex: 'action',
      width: 50,
      render: (e, record) => {
        return (
          <ActionColumn>
            <BtnView onClick={() => router.push(`${PAGE_ROUTER.PRODUCT}/${record.code}}`)}>詳細</BtnView>
          </ActionColumn>
        )
      }
    },
  ];

  return (
    <AdminPage>
      <Head>
        <title>商品検索</title>
      </Head>
      <PageHeader>
        <PageTitle>商品検索</PageTitle>
        <PageBtnAdd
          onClick={() => router.push(PAGE_ROUTER.CREATE_PRODUCT)}
        >新規作成</PageBtnAdd>
      </PageHeader>

      <WrapInput>
        <div>
          <LabelInput $width={90}>商品コード：</LabelInput>
          <Input
            className='custom-ant-input'
            placeholder='商品コード...'
          />
        </div>
        <div>
          <LabelInput>商品ID：</LabelInput>
          <Input
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
              className='custom-ant-input'
              placeholder='商品名...'
            />
          </div>
          <div>
            <LabelInput>部門名：</LabelInput>
            <Select
              style={{ width: 250, height: 38, borderRadius: 5 }}
              value={selected}
              placeholder="部門名"
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
        <BtnSearch>検索</BtnSearch>
      </SearchWrap>

      <TotalItem>{`件数：${data.length}`}</TotalItem>
      <Table columns={columns} dataSource={data}
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
      <FooterWrapBtn>
        <FooterBtn>商品マスタ選択</FooterBtn>
        <span style={{ margin: '0 12px' }}>〇〇.csv</span>
        <FooterBtn>一括更新</FooterBtn>
      </FooterWrapBtn>
    </AdminPage>
  )
}

const SearchWrap = styled.div`
  width: 780px;
  display: flex;
  justify-content: space-between;
  marginBottom: 18px
`

const TotalItem = styled.span`
  margin-bottom: 20px;
  font-size: 14px;
  text-align: left;
  display: block;
`

const FooterBtn = styled.div`
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

const FooterWrapBtn = styled.div`
  display: flex;
  margin-top: 20px;
  align-items: center;
`

export default Products