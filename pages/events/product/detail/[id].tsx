import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { Table, Input, Modal, DatePicker } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { formatCurrency } from '../../../../src/util/Utils';
import { PageHeader, PageTitle, Center, LabelInput, ActionColumn, BtnView, TableBottomRight, BtnDownload, BtnDelete, FlexRow, BtnSave, WrapInput } from '../../../../src/assets/theme/commonStyle';
import { Checkbox } from 'antd';
import AdminPage from '../../../../src/component/admin/Admin';
import { BiPlus } from 'react-icons/bi'
import EventInfo from '../../../../src/component/event/EventInfo';
import AddProductTable from '../../../../src/component/event/AddProductTable';
import Head from 'next/head'
import jaJP from 'antd/lib/calendar/locale/ja_JP';

const data = require('../../../../src/mock/eventProductDetail.json') as DataType[]

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
  displayItems: number;
  displayInput: number;
  displayOricon: number[];
  shelfBin: number;
  replenishment: number;
  item: number;
}

const EventProductDetail = () => {
  // const [data, setData] = useState<DataType[]>([])
  const [isShowModalSetting, showModalSetting] = useState(false)
  const [isShowModalInfo, showModalInfo] = useState(false)

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
      width: 150,
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
      width: 400
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
          <Center><Checkbox defaultChecked /></Center>
        )
      },
    }, {
      title: () => {
        return (
          <Center>有効在庫数</Center>
        )
      },
      dataIndex: 'availableStockQuantity',
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
          <Center>推奨在庫数</Center>
        )
      },
      dataIndex: 'recommendStockQuantity',
      width: 100,
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
          <Center>
            <Input
              style={{ textAlign: 'center' }}
              className='custom-ant-body-cel-input'
              defaultValue={e}
            />
          </Center>
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

    },
    // {
    //   title: '',
    //   dataIndex: 'action',
    //   width: 50,
    //   render: (e, record) => {
    //     return (
    //       <ActionColumn>
    //         <BtnDelete
    //         >詳細</BtnDelete>
    //       </ActionColumn>
    //     )
    //   }
    // },

  ];

  const DisplayButton = ({ value, index, id }) => {
    return (
      <BtnCelValue>
        <span>{value}</span>
        <BtnDeleteCel>x</BtnDeleteCel>
      </BtnCelValue>
    )
  }

  return (
    <AdminPage>
      <Head>
        <title>催事商品詳細(補充)</title>
      </Head>

      <Modal width={300} title="まとめて棚番設定" open={isShowModalSetting} onCancel={() => showModalSetting(false)}
        footer={null}
      >
        <CenterCol>
          <SettingContent>
            <div>
              <LabelInput>開始行</LabelInput>
              <Helper />
              <LabelInput>終了行</LabelInput>
              <LabelInput>棚番</LabelInput>
            </div>

            <div>
              <Input
                className='custom-ant-input'
              />
              <Helper>-</Helper>
              <Input
                className='custom-ant-input'
              />
              <Input
                className='custom-ant-input'
              />
            </div>
          </SettingContent>
          <BtnView onClick={() => showModalSetting(false)}>設定</BtnView>
        </CenterCol>
      </Modal>

      <Modal width={800} title="催事情報" open={isShowModalInfo} onOk={() => showModalInfo(false)} onCancel={() => showModalInfo(false)}
        footer={null}
      >
        <EventInfo />
      </Modal>

      <PageHeader>
        <Header>
          <PageTitle>催事商品詳細(補充)</PageTitle>
          <BtnView style={{ width: 120, height: 32 }}
            onClick={() => showModalInfo(true)}
          >催事情報</BtnView>
          <div>
            <LabelInput>登録日：</LabelInput>
            <DatePicker
              locale={jaJP}
              style={{height: 32}}
              className='sale-date-picker'
              placeholder='yyyymmdd'
              format={'YYYY/MM/DD'}
              allowClear={false}
              suffixIcon={null}
            />
          </div>
        </Header>
      </PageHeader>

      <HeaderTable>
        <span>件数：〇〇</span>
        <FlexRow style={{ alignItems: 'center' }}>
          <BtnView style={{
            background: '#647687',
            borderColor: '#314354',
            color: '#fff',
            width: 120,
            height: 32
          }}>商品追加</BtnView>
          <div style={{ margin: "0px 32px" }}>
            <Checkbox onChange={(e) => { }}><span>ラウンド分利用</span></Checkbox>
          </div>
          <BtnView style={{ width: 120, height: 32 }}
            onClick={() => showModalSetting(true)}
          >棚番一括設定</BtnView>
        </FlexRow>
      </HeaderTable>

      <Table columns={columns} dataSource={data}
        scroll={{ x: 1600, y: 400 }}
        pagination={false}
      />

      <TableFooter>
        <BtnSave style={{ height: 32 }}>保存</BtnSave>
        <TableBottomRight>
          <BtnDownload>ダウンロード</BtnDownload>
          <BtnDownload>ピッキングへ</BtnDownload>
          <BtnDownload
            style={{
              background: '#647687',
              borderColor: '#314354',
              color: '#fff'
            }}
          >出荷へ</BtnDownload>
        </TableBottomRight>
      </TableFooter>

    </AdminPage>
  )
}

const Helper = styled.div`
  width: 4px;
  font-weight: bold;
  text-align: center;
`

const TableFooter = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: center;
`

const SettingContent = styled.div`
  margin-bottom: 20px;

  & > div {
    flex: 1;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4px;
    & > span {
      display: block;
      text-align: center;
      width: 25%;
    }
    & > input {
      text-align: center;
      width: 25%;
    }
  }
`

const CenterCol = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  justify-content: center;
  align-items: center;
`

const HeaderTable = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 12px;
`

const Header = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  margin-bottom: 20px;
`
const BtnCelValue = styled.div`
  width: 60px;
  height: 28px;
  border-radius: 8px;
  border: 1px solid #000;
  background: #BAC8D3;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const BtnDeleteCel = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #808080;
  font-size: 12px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 2px;
  transform: translate(0, -50%);
  color: #fff;
`

export default EventProductDetail