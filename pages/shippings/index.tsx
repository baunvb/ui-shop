import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { Table, Select, Input, Checkbox, Modal } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import { Radio, DatePicker } from 'antd';
import jaJP from 'antd/lib/calendar/locale/ja_JP';
import { PageHeader, PageTitle, BtnView, BtnSearch, BtnDownload, Center, WrapInput, LabelInput, ActionColumn, PageBtnAdd } from '../../src/assets/theme/commonStyle';
import { PAGE_ROUTER } from '../../src/util/Constant';
import { useRouter } from 'next/router';
import AdminPage from '../../src/component/admin/Admin';
import Head from 'next/head';
import EventInfo from '../../src/component/event/EventInfo';
const data = require('../../src/mock/shipping.json') as DataType[]

const { Option } = Select;
const dateFormat = 'YYYY/MM/DD';

interface DataType {
  pickingId: string;
  eventDate: string;
  storeName: string;
  number: number;
  numberOfPices: number;
  status: string;
}

const Shipping = () => {
  const [isShowModalInfo, showModalInfo] = useState(false)

  const router = useRouter()

  const columns: ColumnsType<DataType> = [
    {
      title: () => {
        return (
          <Center>ピッキングID</Center>
        )
      },
      dataIndex: 'pickingId',
      width: 130,
      showSorterTooltip: false,
      sorter: (a, b) => parseFloat(a.pickingId) - parseFloat(b.pickingId),
      render: (e) => {
        return (
          <Center>{e}</Center>
        )
      },
    },
    {
      title: () => {
        return (
          <Center>催事日</Center>
        )
      },
      width: 110,
      dataIndex: 'eventDate',
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
          <Center>件数</Center>
        )
      },
      dataIndex: 'number',
      width: '8%',
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
          <Center>総ピース数</Center>
        )
      },
      dataIndex: 'numberOfPices',
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
      title: () => {
        return (
          <Center>出荷日</Center>
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
      width: 400,
      render: (e, record) => {
        return (
          <ActionColumn>
            <BtnView
              onClick={() => router.push(`${PAGE_ROUTER.SHIPPING}/${record.pickingId}`)}
            >詳細</BtnView>
            <BtnView
              style={{ width: 75 }}
              onClick={() => showModalInfo(true)}
            >催事詳細</BtnView>
            <BtnView
              style={{width: 110, ...record.status == '未' ? {background: "#647687", color: "#fff"} : {}}}
            >連絡ファイル</BtnView>
            <BtnView
              style={{width: 110, ...record.status == '未' ? {background: "#647687", color: "#fff"} : {}}}
              >スマ在庫アップ</BtnView>
          </ActionColumn>
        )
      }
    },
  ];

  return (
    <AdminPage>
      <Head>
        <title>出荷検索</title>
      </Head>
      <Modal width={800} title="催事情報" open={isShowModalInfo} onOk={() => showModalInfo(false)} onCancel={() => showModalInfo(false)}
        footer={null}
      >
        <EventInfo />
      </Modal>
      <PageHeader>
        <PageTitle>出荷検索</PageTitle>
        <BtnDownload style={{ height: 38 }}>奉行ファイル取込実行</BtnDownload>
      </PageHeader>

      <WrapDate>
        <WrapInput>
          <div>
            <LabelInput>開始日：</LabelInput>
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
          </div>
          <WrapCheckbox>
            <Checkbox onChange={(e) => { }}><LabelInput>出荷未完</LabelInput></Checkbox>
          </WrapCheckbox>

        </WrapInput>
        <BtnSearch>検索</BtnSearch>
      </WrapDate>

      <TotalItem>{`件数：${data.length}`}</TotalItem>
      <Table columns={columns} dataSource={data}
        pagination={{
          total: data.length,
          defaultPageSize: 10,
          showSizeChanger: false,
          position: ["bottomCenter"]
        }}
      />
    </AdminPage>
  )
}

const WrapCheckbox = styled.div`
  margin-left: 70px;
`

const TotalItem = styled.span`
  margin-bottom: 20px;
  font-size: 14px;
  text-align: left;
  display: block;
`

const WrapDate = styled.div`
  width: 520px;
  margin: 18px 0;
  display: flex;
  justify-content: flex-start;
`

const DateSpace = styled.div`
  margin: 0 8px;
`
export default Shipping