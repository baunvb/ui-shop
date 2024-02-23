import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { Table, Select, Input, Checkbox } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import { Radio, DatePicker } from 'antd';
import jaJP from 'antd/lib/calendar/locale/ja_JP';
import { formatCurrency } from '../../src/util/Utils';
import { PageHeader, PageTitle, BtnView, BtnSearch, BtnDownload, Center, WrapInput, LabelInput, ActionColumn, TableBottomRight, FlexRow } from '../../src/assets/theme/commonStyle';
import AdminPage from '../../src/component/admin/Admin';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
const data = require('../../src/mock/picking.json') as DataType[]

const dateFormat = 'YYYY/MM/DD';

interface DataType {
  registrationDate: string;
  storeId: string;
  storeName: string;
  regionName: string;
  localName: string;
  isNew: boolean;
  status: string;
}

const Picking = () => {
  // const [data, setData] = useState<DataType[]>([])
  const router = useRouter()

  const columns: ColumnsType<DataType> = [
    {
      title: () => {
        return (
          <Center>登録日</Center>
        )
      },
      dataIndex: 'registrationDate',
      width: '10%',
      showSorterTooltip: false,
      sorter: (a, b) => parseFloat(a.storeId) - parseFloat(b.storeId)
    },
    {
      title: () => {
        return (
          <Center>店舗ID</Center>
        )
      },
      dataIndex: 'storeId',
      width: '10%',
      showSorterTooltip: false,
      sorter: (a, b) => (a > b ? -1 : 1)
    },
    {
      title: () => {
        return (
          <Center>店舗名</Center>
        )
      },
      dataIndex: 'storeName',
      showSorterTooltip: false,
      sorter: (a, b) => (a > b ? -1 : 1),
    },
    {
      title: () => {
        return (
          <Center>地域名</Center>
        )
      },
      dataIndex: 'regionName',
      width: '10%',
      showSorterTooltip: false,
      sorter: (a, b) => (a > b ? -1 : 1),
      render: (e) => {
        return (
          <Center>{e}</Center>
        )
      },
    }, {
      title: () => {
        return (
          <Center>地方名</Center>
        )
      },
      dataIndex: 'localName',
      width: 110,
      showSorterTooltip: false,
      sorter: (a, b) => (a > b ? -1 : 1),
      render: (e) => {
        return (
          <Center>{e}</Center>
        )
      },
    },
    {
      title: () => {
        return (
          <Center>新規</Center>
        )
      },
      dataIndex: 'isNew',
      width: '10%',
      showSorterTooltip: false,
      sorter: (a, b) => (a > b ? -1 : 1),
      render: (e) => {
        return (
          <Center>{e ? '⚫︎' : ''}</Center>
        )
      },
    }, {
      title: () => {
        return (
          <Center>状態</Center>
        )
      },
      dataIndex: 'status',
      width: '10%',
      showSorterTooltip: false,
      sorter: (a, b) => (a > b ? -1 : 1),
      render: (e) => {
        return (
          <Center>{e}</Center>
        )
      },
    },
    {
      title: '',
      dataIndex: 'action',
      width: 50,
      render: (e, record) => {
        return (
          <ActionColumn>
            <BtnView
              onClick={() => router.push(`/picking/${record.storeId}`)}
            >詳細</BtnView>
          </ActionColumn>
        )
      }
    },
  ];

  return (
    <AdminPage>
      <Head>
        <title>ピッキング検索</title>
      </Head>
      <PageHeader>
        <PageTitle>ピッキング検索</PageTitle>
      </PageHeader>

      <SearchForm>
        <LabelInput>登録日：</LabelInput>
        <DateStartEnd>
          <DatePicker
            locale={jaJP}
            className='sale-date-picker'
            placeholder='yyyymmdd'
            format={dateFormat}
            allowClear={false}
            suffixIcon={null}
          />
          <DateSpace>〜</DateSpace>
          <DatePicker
            locale={jaJP}
            className='sale-date-picker'
            placeholder='yyyymmdd'
            format={dateFormat}
            allowClear={false}
            suffixIcon={null}
          />
        </DateStartEnd>
        <WrapCheckbox>
        <Checkbox onChange={(e) => { }}><span>ピッキング未完のみ</span></Checkbox>
        </WrapCheckbox>
        <BtnSearch>検索</BtnSearch>
      </SearchForm>

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
    </AdminPage>
  )
}

const SearchForm = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`

const WrapCheckbox = styled.div`
  margin: 0 32px;
`

const TotalItem = styled.span`
  margin-bottom: 20px;
  font-size: 14px;
  text-align: left;
  display: block;
`

const DateStartEnd = styled.div`
  width: 250px;
  display: flex;
  align-items: center;
`

const DateSpace = styled.div`
  flex: 1;
`
export default Picking