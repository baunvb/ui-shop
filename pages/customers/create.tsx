import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { Select, Input } from 'antd';
import { AdminPageContent, PageHeader, PageTitle, BtnSave, BtnCancel, WrapInput, LabelInput, ActionColumn, NewWrapBtn } from '../../src/assets/theme/commonStyle';
import AdminPage from '../../src/component/admin/Admin';
import { useRouter } from 'next/router';
import Head from 'next/head';
const { Option } = Select;

const NewShop = () => {
  const [selected, setSelected] = useState(null)
  const router = useRouter()
  return (
    <AdminPage>
      <Head>
        <title>得意先作成</title>
      </Head>
      <AdminPageContent>
        <PageHeader
          style={{ flexDirection: 'column', alignItems: 'flex-start' }}
        >
          <PageTitle>得意先作成</PageTitle>
          <NewPTitle>※ 得意先などは奉行で作成されてから、同様の情報を入力してください。</NewPTitle>
        </PageHeader>

        <WrapInput>
          <div>
            <LabelInput $width={70}>得意先ID：</LabelInput>
            <Input
              style={{ width: 250 }}
              className='custom-ant-input'
              placeholder='99999...'
            />
          </div>
          <div>
            <LabelInput>得意先名：</LabelInput>
            <Input
              style={{ width: 250 }}
              className='custom-ant-input'
              placeholder='得意先名...'
            />
          </div>
        </WrapInput>

        <WrapInput>
          <div>
            <LabelInput $width={70}>店舗ID：</LabelInput>
            <Input
              style={{ width: 250 }}
              className='custom-ant-input'
              placeholder='99...'
            />
          </div>
        </WrapInput>

        <WrapInput>
          <LabelInput $width={70}>場所：</LabelInput>
          <Select
            style={{ width: 80, height: 30, borderRadius: 5, marginLeft: 0 }}
            placeholder="愛知"
            onChange={(e) => setSelected(e)}
            value={selected}
          >
            <Option value="0">&nbsp;</Option>
            <Option value="1">愛知</Option>
            <Option value="2">青森</Option>
            <Option value="3">愛媛</Option>
          </Select>
          <Text>地方：〇〇</Text>

        </WrapInput>

        <NewWrapBtn>
          <BtnSave>保存</BtnSave>
          <BtnCancel>削除</BtnCancel>
          <BtnHidden>非表示</BtnHidden>
        </NewWrapBtn>
      </AdminPageContent>
    </AdminPage>
  )
}


const NewPTitle = styled.span`
  margin: 12px 0 0 0;
  display: block;
`

const Text = styled.span`
  font-size: 14px;
  margin-left: 12px;
`

export const BtnHidden = styled.div`
    margin-left: 20px;
    width: 100px;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background: #BAC8D3;
    height: 40px;
    border: 1px solid #23445D;
    cursor: pointer;
`

export default NewShop

