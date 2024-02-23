import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { Table, Select, Input } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import { Radio, DatePicker } from 'antd';
import jaJP from 'antd/lib/calendar/locale/ja_JP';
import { formatCurrency } from '../../src/util/Utils';
import { PageHeader, PageTitle, BtnView, BtnSearch, BtnDownload, Center, WrapInput, LabelInput, ActionColumn, TableBottomRight, PageBtnAdd, BtnShow, BtnDelete } from '../../src/assets/theme/commonStyle';
import AdminPage from '../../src/component/admin/Admin';
import { useRouter } from 'next/navigation';
import { PAGE_ROUTER } from '../../src/util/Constant';
import Head from 'next/head';
const data = require('../../src/mock/events.json') as DataType[]

const { Option } = Select;
const dateFormat = 'YYYY/MM/DD';

interface DataType {
  customerCode: string;
  customerName: string;
  storeId: string;
  regionName: string;
  localName: string;
  startDate: string;
  endDate: string;
  place: string;
  eventPeriod: string;
}

const Events = () => {
  const [region, setRegion] = useState(1)
  const [selected, setSelected] = useState(null)
  const [selectedCustomer, setSelectedCustomer] = useState("1")

  // const [data, setData] = useState<DataType[]>([])
  const router = useRouter()

  const columns: ColumnsType<DataType> = [
    {
      title: () => {
        return (
          <Center>得意先コード</Center>
        )
      },
      dataIndex: 'customerCode',
      width: 140,
      showSorterTooltip: false,
      sorter: (a, b) => parseFloat(a.storeId) - parseFloat(b.storeId)
    },
    {
      title: () => {
        return (
          <Center>得意先名</Center>
        )
      },
      dataIndex: 'customerName',
      showSorterTooltip: false,
      sorter: (a, b) => (a > b ? -1 : 1)
    },
    {
      title: () => {
        return (
          <Center>店舗ID</Center>
        )
      },
      dataIndex: 'storeId',
      width: 150,
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
          <Center>地域名</Center>
        )
      },
      dataIndex: 'regionName',
      width: 150,
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
      width: 150,
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
          <Center>開始日</Center>
        )
      },
      dataIndex: 'startDate',
      width: 110,
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
          <Center>終了日</Center>
        )
      },
      dataIndex: 'endDate',
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
          <Center>場所</Center>
        )
      },
      dataIndex: 'place',
      width: '8%',
      showSorterTooltip: false,
      sorter: (a, b) => (a > b ? -1 : 1),
      render: (e) => {
        return (
          <Center>{formatCurrency(e)}</Center>
        )
      },
    },
    {
      title: () => {
        return (
          <Center>開催期間</Center>
        )
      },
      dataIndex: 'eventPeriod',
      width: '8%',
      showSorterTooltip: false,
      sorter: (a, b) => (a > b ? -1 : 1),
      render: (e) => {
        return (
          <Center>{formatCurrency(e)}</Center>
        )
      },
    },
    {
      title: '',
      dataIndex: 'action',
      width: 270,
      render: (e, record) => {
        return (
          <ActionColumn
            style={{
              justifyContent: 'flex-end'
            }}
          >
            {
              record.customerCode == "01105" ?
                <div></div> :
                <Select placeholder="10/18"
                  style={{ height: 26, width: 86 }}
                  defaultValue={"0"}
                  onSelect={(e) => {
                    if (e == "0") router.push(`${PAGE_ROUTER.EVENT}/product/detail/1`)
                  }}
                >
                  <Option value="0">10/18</Option>
                </Select>
            }

            <BtnShow
              onClick={() => router.push(`/events/product/${record.storeId}`)}
            >商品</BtnShow>
            <BtnDelete>削除</BtnDelete>
            <BtnView
              onClick={() => router.push(`/events/${record.storeId}`)}
            >詳細</BtnView>
          </ActionColumn>
        )
      }
    },
  ];

  return (
    <AdminPage>
      <Head>
        <title>催事検索</title>
      </Head>
      <PageHeader>
        <PageTitle>催事検索</PageTitle>
        <PageBtnAdd onClick={() => router.push(PAGE_ROUTER.CREATE_EVENT)}>新規作成</PageBtnAdd>
      </PageHeader>

      <WrapInput>
        <div>
          <LabelInput>得意先：</LabelInput>
          <Select
            className='custom-ant-input'
            onChange={(e) => setSelectedCustomer(e)}
            placeholder=''
          >
            <Option value="0">011148　湘南モールフィル</Option>
            <Option value="1">011017　〇〇</Option>
          </Select>
        </div>
        <div>
          {/* 70px */}
          <LabelInput>場所：</LabelInput>
          {/* 170px */}
          <Region
            style={{ width: 139 }}
          >
            <Radio.Group onChange={(e) => {
              setRegion(e.target.value)
              setSelected(null) //reset selector
            }} value={region}>
              <Radio value={1}>地域</Radio>
              <Radio value={2}>地方</Radio>
            </Radio.Group>
          </Region>
          {/* 80px */}
          <div>
            {
              region == 1 ?
                <Select
                  style={{ width: 109, height: 38, borderRadius: 5 }}
                  value={selected}
                  placeholder="愛知"
                  onChange={(e) => setSelected(e)}

                >
                  <Option value="0">&nbsp;</Option>
                  <Option value="1">愛知</Option>
                  <Option value="2">青森</Option>
                  <Option value="3">愛媛</Option>
                </Select>
                :
                <Select
                  style={{ width: 109, height: 38, borderRadius: 5 }}
                  value={selected}
                  placeholder="愛知"
                  onChange={(e) => setSelected(e)}

                >
                  <Option value="0">&nbsp;</Option>
                  <Option value="1">中部</Option>
                  <Option value="2">中国</Option>
                  <Option value="3">四国</Option>
                </Select>
            }
          </div>
        </div>
      </WrapInput>

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
          <div>
            <LabelInput>終了日：</LabelInput>
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
        </WrapInput>
        <BtnSearch>検索</BtnSearch>
      </WrapDate>

      <TotalItem>{`件数：${data.length}`}</TotalItem>
      <Table columns={columns} dataSource={data}
        scroll={{ x: 1600 }}
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

const WrapRegion = styled.div`
  display: flex;
  width: 50%;
  flex-direction: row;
  align-items: center;
`
const Region = styled.div`
  display: flex;
  flex-direction: row;
`
const TotalItem = styled.span`
  margin-bottom: 20px;
  font-size: 14px;
  text-align: left;
  display: block;
`

const WrapDate = styled.div`
  width: 780px;
  margin: 18px 0;
  display: flex;
  justify-content: flex-start;
`

const DateSpace = styled.div`
  margin: 0 8px;
`
export default Events