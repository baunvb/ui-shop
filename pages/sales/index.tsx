import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { Table, Select, Input } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import { Radio, DatePicker } from 'antd';
import jaJP from 'antd/lib/calendar/locale/ja_JP';
import { formatCurrency } from '../../src/util/Utils';
import { PageHeader, PageTitle, BtnView, BtnSearch, BtnDownload, Center, WrapInput, LabelInput, ActionColumn, TableBottomRight } from '../../src/assets/theme/commonStyle';
import AdminPage from '../../src/component/admin/Admin';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
const data = require('../../src/mock/sales.json') as DataType[]

const { Option } = Select;
const dateFormat = 'YYYY/MM/DD';

interface DataType {
  storeId: string;
  storeName: string;
  regionName: string;
  localName: string;
  startDate: string;
  endDate: string;
  eventPeriod: string;
  salesQuantity: number;
  totalSent: number;
  totalDamage: number;
}

const Sales = () => {
  const [region, setRegion] = useState(1)
  const [selected, setSelected] = useState(null)
  const [selectedCustomer, setSelectedCustomer] = useState("1")

  // const [data, setData] = useState<DataType[]>([])
  const router = useRouter()

  const columns: ColumnsType<DataType> = [
    {
      title: () => {
        return (
          <Center>店舗ID</Center>
        )
      },
      dataIndex: 'storeId',
      width: '8%',
      showSorterTooltip: false,
      sorter: (a, b) => parseFloat(a.storeId) - parseFloat(b.storeId)
    },
    {
      title: () => {
        return (
          <Center>店舗名</Center>
        )
      },
      dataIndex: 'storeName',
      showSorterTooltip: false,
      sorter: (a, b) => (a > b ? -1 : 1)
    },
    {
      title: () => {
        return (
          <Center>地域名</Center>
        )
      },
      dataIndex: 'regionName',
      width: '8%',
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
          <Center>地方名</Center>
        )
      },
      dataIndex: 'localName',
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
    },
    {
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
    }, {
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
          <Center>{e}</Center>
        )
      },
    },
    {
      title: () => {
        return (
          <Center>売上数量</Center>
        )
      },
      dataIndex: 'salesQuantity',
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
          <Center>送付合計</Center>
        )
      },
      dataIndex: 'totalSent',
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
          <Center>破損合計</Center>
        )
      },
      dataIndex: 'totalDamage',
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
      width: 50,
      render: (e, record) => {
        return (
          <ActionColumn>
            <BtnView
              onClick={() => router.push(`/sales/${record.storeId}`)}
            >詳細</BtnView>
          </ActionColumn>
        )
      }
    },
  ];

  return (
    <AdminPage>
      <Head>
        <title>売上検索</title>
      </Head>
      <PageHeader>
        <PageTitle>売上検索</PageTitle>
      </PageHeader>

      <WrapInput>
        <div>
          <LabelInput>得意先：</LabelInput>
          <Select
            showSearch
            onSearch={(e) => {
              console.log("Search: ", e)
            }}
            onChange={(e) => setSelectedCustomer(e)}
            className='custom-ant-input'
            placeholder=''
          >
            <Option value="1">011148　湘南モールフィル</Option>
            <Option value="2">011017　〇〇</Option>
          </Select>
        </div>
        <div>
          <LabelInput>店舗ID：</LabelInput>
          {/* 250px */}
          <Input
            className='custom-ant-input'
            placeholder='99...'
          />
        </div>
      </WrapInput>

      <WrapRegion>
        {/* 70px */}
        <LabelInput>場所：</LabelInput>
        {/* 170px */}
        <Region
          style={{ width: 170 }}
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
                style={{ width: 80, height: 38, borderRadius: 5 }}
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
                style={{ width: 80, height: 38, borderRadius: 5 }}
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
      </WrapRegion>

      <WrapDate>
        <WrapInput>
          <div>
            <LabelInput>開始日：</LabelInput>
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
          </div>
          <div>
            <LabelInput>終了日：</LabelInput>
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
          </div>
        </WrapInput>
        <BtnSearch>検索</BtnSearch>
      </WrapDate>

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

const DateStartEnd = styled.div`
  width: 250px;
  display: flex;
  align-items: center;
`

const DateSpace = styled.div`
  flex: 1;
`
export default Sales