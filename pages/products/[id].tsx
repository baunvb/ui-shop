import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { Select, Input } from 'antd';
import { PageHeader, PageTitle, BtnSave, BtnCancel, WrapInput, LabelInput, ActionColumn, NewWrapBtn } from '../../src/assets/theme/commonStyle';
import { useRouter } from 'next/router';
import AdminPage from '../../src/component/admin/Admin';
import Head from 'next/head';
import { formatCurrency } from '../../src/util/Utils';
const { Option } = Select;

const ProductDetail = () => {
  const [selected, setSelected] = useState("1")
  const router = useRouter()
  return (
    <AdminPage>
      <Head>
        <title>商品詳細</title>
      </Head>
      <PageHeader>
        <PageTitle>商品詳細</PageTitle>
      </PageHeader>

      <WrapInput>
        <div>
          <LabelInput $width={90}>商品コード：</LabelInput>
          <Input
            style={{ width: 300 }}
            className='custom-ant-input'
            placeholder='商品コード...'
            defaultValue={"4546088023747"}
          />
        </div>
        <div>
          <LabelInput>商品ID：</LabelInput>
          <Input
            style={{ width: 300 }}
            className='custom-ant-input'
            placeholder='商品ID...'
            defaultValue={"120"}
          />
        </div>
      </WrapInput>

      <WrapInput>
        <div>
          <LabelInput $width={90}>商品名：</LabelInput>
          <Input
            style={{ width: 300 }}
            className='custom-ant-input'
            placeholder='商品名...'
            defaultValue={"RACHE(ラチェ) 130"}
          />
        </div>
        <div>
          <LabelInput>部門名：</LabelInput>
          <Select
            style={{ width: 300, height: 38, borderRadius: 5 }}
            value={selected}
            placeholder="部門名..."
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
      <br /><br />
      <WrapInput>
        <div>
          <LabelInput $width={90}>単価：</LabelInput>
          <Input
            style={{ width: 150 }}
            className='custom-ant-input'
            placeholder='999...'
            defaultValue={"700"}
          />
        </div>
        <div>
          <LabelInput $width={90}>原価：</LabelInput>
          <Input
            style={{ width: 150 }}
            className='custom-ant-input'
            placeholder='999...'
            defaultValue={"250"}
          />
        </div>
      </WrapInput>

      <WrapInput>
        <div>
          <LabelInput $width={90}>全在庫：</LabelInput>
          <Input
            style={{ width: 150 }}
            className='custom-ant-input'
            placeholder='999...'
            defaultValue={formatCurrency(1000)}
          />
        </div>
        <div>
          <LabelInput $width={90}>有効在庫：</LabelInput>
          <Input
            style={{ width: 150 }}
            className='custom-ant-input'
            placeholder='999...'
            defaultValue={formatCurrency(250)}
          />
        </div>
        <div>
          <LabelInput style={{textAlign: 'left'}} $width={100}>無効在庫 <br/> (破損・盗難):</LabelInput>
          <Input
            style={{ width: 150 }}
            className='custom-ant-input'
            placeholder='999...'
            defaultValue={12}
          />
        </div>
      </WrapInput>
      <WrapInput>
        <div>
          <LabelInput $width={90}>販売数：</LabelInput>
          <Input
            style={{ width: 150 }}
            className='custom-ant-input'
            placeholder='999...'
            defaultValue={588}
          />
        </div>
      </WrapInput>
      <WrapInput>
        <div>
          <LabelInput $width={90}>陳列可能数：</LabelInput>
          <Input
            style={{ width: 150 }}
            className='custom-ant-input'
            placeholder='999...'
            defaultValue={10}
          />
        </div>
      </WrapInput>
      <NewWrapBtn>
        <BtnSave>保存</BtnSave>
      </NewWrapBtn>
    </AdminPage>
  )
}

export default ProductDetail

