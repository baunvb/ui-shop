import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { Table, Input, Modal } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { formatCurrency } from '../../src/util/Utils';
import { PageHeader, PageTitle, Center, LabelInput, ActionColumn, BtnView, TableBottomRight, BtnDownload, BtnDelete, FlexRow, BtnSave, TableBottomLeft, TotalItem } from '../../src/assets/theme/commonStyle';
import { Checkbox } from 'antd';
import AdminPage from '../../src/component/admin/Admin';
import { BiPlus } from 'react-icons/bi'
import EventInfo from '../../src/component/event/EventInfo';
import AddProductTable from '../../src/component/event/AddProductTable';
import Head from 'next/head'
import { useRouter } from 'next/navigation';

const data = require('../../src/mock/eventProductDetail.json') as DataType[]

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


const PickingDetail = () => {
  // const [data, setData] = useState<DataType[]>([])
  const [isShowModalAdd, showModalAdd] = useState(false)
  const [isShowModalInfo, showModalInfo] = useState(false)
  const [isShowModalSetting, showModalSetting] = useState(false)

  const router = useRouter()
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
          <Center>単価</Center>
        )
      },
      dataIndex: 'unitPrice',
      width: 80,
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
          <Center>
            ラウンド分 <br />
            (利用)
          </Center>
        )
      },
      dataIndex: 'roundMinutes',
      width: 100,
      render: (e) => {
        return (
          <Center>{e}</Center>
        )
      },
    }, {
      title: () => {
        return (
          <Center>陳列可能数</Center>
        )
      },
      dataIndex: 'displayItems',
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
          <Center>陳列</Center>
        )
      },
      dataIndex: 'display',
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
          <Center>陳列 <br /> (入力)</Center>
        )
      },
      dataIndex: 'displayInput',
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
          <Center>陳列 <br />
            (オリコン)</Center>
        )
      },
      dataIndex: 'displayOricon',
      width: 200,
      render: (e, record) => {
        return (
          <RowItem>
            {
              e.map((value, index) =>
                <DisplayButton value={value} index={index} id={record.no} />
              )
            }
            <BiPlus size={20} onClick={() => showModalAdd(true)} />
          </RowItem>
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

    }, {
      title: '',
      dataIndex: 'action',
      width: 70,
      render: (e, record) => {
        return (
          <ActionColumn>
            <BtnView>詳細</BtnView>
          </ActionColumn>
        )
      }
    },

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
        <title>ピッキング詳細</title>
      </Head>
      <Modal width={250} title="オリコン追加" open={isShowModalAdd} onCancel={() => showModalAdd(false)}
        footer={null}
      >
        <CenterCol>
          <PopupLabel>商品数</PopupLabel>
          <Input
            style={{ width: 120, marginBottom: 24 }}
            className='custom-ant-input'
          />

          <BtnView onClick={() => showModalAdd(false)}>設定</BtnView>
        </CenterCol>
      </Modal>
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
      <PageHeader style={{
        marginBottom: 8
      }}>
        <Header>
          <PageTitle>ピッキング詳細</PageTitle>
          <BtnView style={{ width: 120, height: 32 }}
            onClick={() => showModalInfo(true)}
          >催事情報</BtnView>
          <BtnView style={{ width: 120, height: 32 }}>出荷へ</BtnView>
          <BtnView style={{ width: 120, height: 32 }}>催事へ</BtnView>
        </Header>
      </PageHeader>

      <HeaderTable>
        <FlexRow>
          <TotalItem>件数：〇〇</TotalItem>
          <TotalItem>伝票枚数：〇〇</TotalItem>
        </FlexRow>

        <FlexRow style={{ alignItems: 'center' }}>
          <Checkbox>ラウンド分利用</Checkbox>
          <BtnView style={{ width: 120, height: 32, marginLeft: 20 }}
            onClick={() => showModalSetting(true)}
          >棚番一括設定</BtnView>
        </FlexRow>
      </HeaderTable>

      <Table columns={columns} dataSource={data}
        scroll={{ x: 100, y: 450 }}
        pagination={false}
      />

      <TableFooter>
        <TableBottomLeft>
          <BtnDownload>ダウンロード</BtnDownload>
        </TableBottomLeft>
        <BtnSave style={{ height: 32 }}>保存</BtnSave>
        <TableBottomRight>
          <BtnDownload>オリコン用指示書</BtnDownload>
          <BtnDownload>戻し→陳列バーコードリスト</BtnDownload>
          <BtnDownload>ピッキング完了</BtnDownload>
        </TableBottomRight>
      </TableFooter>

    </AdminPage>
  )
}


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

const Helper = styled.div`
  width: 4px;
  font-weight: bold;
  text-align: center;
`

const CenterCol = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  justify-content: center;
  align-items: center;
`

const PopupLabel = styled.span`
  margin-bottom: 12px;
  display: block;
`

const TableFooter = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: center;
`

const RowItem = styled.div`
  display: flex;
  gap: 8px;
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
  // margin-bottom: 20px;
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

export default PickingDetail