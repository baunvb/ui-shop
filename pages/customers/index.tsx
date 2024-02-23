import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { Table, Select, Input, Checkbox } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import { Radio } from 'antd';
import { PageBtnAdd, PageHeader, PageTitle, BtnView, BtnSearch, BtnShow, BtnDownload, Center, WrapInput, LabelInput, ActionColumn, TableBottomRight } from '../../src/assets/theme/commonStyle';
import { useRouter } from 'next/router';
import AdminPage from '../../src/component/admin/Admin';
import Head from 'next/head';
import { PAGE_ROUTER } from '../../src/util/Constant';
const data = require('../../src/mock/shops.json') as DataType[]

const { Option } = Select;

interface DataType {
  name: string;
  id: string;
  region: string;
  local: string;
}

const Shop = () => {
  const [region, setRegion] = useState(1)
  const [selectedPlace, setSelectedPlace] = useState(null)
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
      sorter: (a, b) => parseFloat(a.id) - parseFloat(b.id)
    },
    {
      title: () => {
        return (
          <Center>得意先名</Center>
        )
      },
      dataIndex: 'name',
      showSorterTooltip: false,
      sorter: (a, b) => (a > b ? -1 : 1)
    },
    {
      title: () => {
        return (
          <Center>店舗ID</Center>
        )
      },
      dataIndex: 'id',
      width: '11%',
      showSorterTooltip: false,
      sorter: (a, b) => parseFloat(a.id) - parseFloat(b.id)
    },
    {
      title: () => {
        return (
          <Center>地域名</Center>
        )
      },
      dataIndex: 'region',
      width: '11%',
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
          <Center>地方名</Center>
        )
      },
      dataIndex: 'local',
      width: '11%',
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
      width: 160,
      render: (record) => {
        return (
          <ActionColumn>
            <BtnView>詳細</BtnView>
            <BtnShow onClick={() => router.push(`${PAGE_ROUTER.EVENT}/0110970`)}>催事</BtnShow>
          </ActionColumn>
        )
      }
    },
  ];
  

  return (
    <AdminPage>
      <Head>
        <title>得意先検索</title>
      </Head>
      <PageHeader>
        <PageTitle>得意先検索</PageTitle>
        <PageBtnAdd
          onClick={() => router.push(PAGE_ROUTER.CREATE_CUSTOMER)}
        >新規作成</PageBtnAdd>
      </PageHeader>

      <WrapInput>
        <div>
          <LabelInput>得意先：</LabelInput>
          <Select
            // showSearch
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
          <LabelInput $width={80}>得意先名：</LabelInput>
          <Input
            className='custom-ant-input'
            placeholder='店舗名...'
          />
        </div>
      </WrapInput>

      <WrapInput>
        <div>
          <LabelInput>場所：</LabelInput>
          <WrapLocalSelecter>
            <Region>
              <Radio.Group onChange={(e) => {
                setRegion(e.target.value)
                setSelectedPlace(null) //reset selector
              }} value={region}>
                <Radio value={1}>地域</Radio>
                <Radio value={2}>地方</Radio>
              </Radio.Group>
            </Region>
            {
              region == 1 ?
                <Select
                  style={{ width: 80, height: 38, borderRadius: 5 }}
                  value={selectedPlace}
                  placeholder="愛知"
                  onChange={(e) => setSelectedPlace(e)}

                >
                  <Option value="0">&nbsp;</Option>
                  <Option value="1">愛知</Option>
                  <Option value="2">青森</Option>
                  <Option value="3">愛媛</Option>
                </Select>
                :
                <Select
                  style={{ width: 80, height: 38, borderRadius: 5 }}
                  value={selectedPlace}
                  placeholder="愛知"
                  onChange={(e) => setSelectedPlace(e)}

                >
                  <Option value="0">&nbsp;</Option>
                  <Option value="1">中部</Option>
                  <Option value="2">中国</Option>
                  <Option value="3">四国</Option>
                </Select>
            }
          </WrapLocalSelecter>
        </div>
        <div>
          <LabelInput $width={80}>店舗ID：</LabelInput>
          <Input
            className='custom-ant-input'
            placeholder='99...'
          />
        </div>
      </WrapInput>

      <WrapInput>
        <WrapCheckbox>
          <Checkbox>非表示を含む</Checkbox>
        </WrapCheckbox>
        <BtnSearch>検索</BtnSearch>

      </WrapInput>

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

const WrapCheckbox = styled.div`
  margin-left: 60px;
  width: 650px;
`

const WrapLocalSelecter = styled.div`
  width: 250px;
  display: flex;
  align-items: center;
`

const Region = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`
const TotalItem = styled.span`
  margin-bottom: 20px;
  font-size: 14px;
  text-align: left;
  display: block;
`

export default Shop