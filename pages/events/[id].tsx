import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import {  Input, Radio, Select } from 'antd';
import {  PageHeader, PageTitle, Center, LabelInput, FlexRow, TableBottomRight, WrapInput, NewWrapBtn, BtnSave, BtnCancel } from '../../src/assets/theme/commonStyle';
import AdminPage from '../../src/component/admin/Admin';
import Head from 'next/head';

const { Option } = Select

const SaleDetail = () => {
  // const [data, setData] = useState<DataType[]>([])
  const [file1, setFile1] = useState<FileList | null>(null)
  const [file2, setFile2] = useState<FileList | null>(null)
  const[desStore, setDesStore] = useState("0")

  const FileItem = ({ name }) => {
    return (
      <FileSelected>
        <span>{name}</span>
        <FileDelete>x</FileDelete>
      </FileSelected>
    )
  }


  return (
    <AdminPage>
      <Head>
        <title>催事詳細</title>
      </Head>
      <PageHeader>
        <PageTitle>催事詳細</PageTitle>
      </PageHeader>

      <FlexRow>
        <ColInfo style={{ width: 450 }}>
          <LabelInput $width={120}>催事得意先：</LabelInput>
          <span>011097 <span style={{ marginLeft: 20 }}>イオンモール和歌山</span></span>
        </ColInfo>

        <ColInfo>
          <LabelInput>登録日：</LabelInput>
          <span>2023/08/07</span>
        </ColInfo>
      </FlexRow>
      <BreakLine />
      <FlexRow>
        <ColInfo>
          <LabelInput $width={120}>店舗ID：</LabelInput>
          <span>011097</span>

        </ColInfo>
        {/* <ColInfo style={{ width: 250 }}>
          <LabelInput $width={80}>店舗名：</LabelInput>
          <span>イオンモール和歌山</span>
        </ColInfo> */}
        <ColInfo>
          <LabelInput>開催数：</LabelInput>
          <span>10</span>
        </ColInfo>
      </FlexRow>
      <FlexRow>
        <ColInfo>
          <LabelInput $width={120}>地域コード：</LabelInput>
          <span>30</span>
        </ColInfo>
        <ColInfo style={{ width: 250 }}>
          <LabelInput $width={80}>地域名：</LabelInput>
          <span>和歌山</span>
        </ColInfo>
        <ColInfo>
          <LabelInput>地方名：</LabelInput>
          <span>近畿</span>
        </ColInfo>
      </FlexRow>
      <FlexRow>
        <ColInfo>
          <LabelInput $width={120}>売上数：</LabelInput>
          <span>300</span>
        </ColInfo>
        <ColInfo style={{ width: 250 }}>
          <LabelInput $width={80}>送付合計：</LabelInput>
          <span>200</span>
        </ColInfo>
        <ColInfo>
          <LabelInput $width={90}>破損合計：</LabelInput>
          <span>12</span>
        </ColInfo>
      </FlexRow>
      <BreakLine />

      <WrapInput>
        <div>
          <LabelInput $width={120}>場所：</LabelInput>
          <Input
            value={"2階 A23"}
            style={{ width: 500 }}
            className='custom-ant-input'
            placeholder='99999...'
          />
        </div>
      </WrapInput>

      <FlexRow>
        <WrapInput>
          <div>
            <LabelInput $width={120}>開始日：</LabelInput>
            <Input
              className='sale-date-picker'
              disabled
              value={'20230810'}
            />
          </div>
          <div>
            <LabelInput>終了日：</LabelInput>
            <Input
              className='sale-date-picker'
              disabled
              value={'20230831'}
            />
          </div>
        </WrapInput>
      </FlexRow>
      <BreakLine />

      <WrapInput>
        <div>
          <LabelInput $width={120}>算出方法：</LabelInput>
          <Radio.Group defaultValue={1}>
            <Radio value={1}>直前5か所日販</Radio>
            <Radio disabled value={2}>前回日販</Radio>
          </Radio.Group>
        </div>
      </WrapInput>

      <WrapInput>
        <div>
          <LabelInput $width={120}>ラウンド先店舗：</LabelInput>
          <Select
            className='custom-ant-input'
            placeholder='ラウンド先店舗選択...'
            value={desStore}
            onChange={(e) => setDesStore(e)}
          >
            <Option value="0">011148　湘南モールフィル</Option>
            <Option value="1">011017　〇〇</Option>
          </Select>
        </div>
      </WrapInput>
      <BreakLine />

      <WrapInput>
        <div>
          <LabelInput $width={120}>レイアウト：</LabelInput>
          <UploadFile>
            <InputFile type='file' title="" multiple
              onChange={(e) => {
                if (e.target.files) setFile1(e.target.files)
              }}
            />
            <BtnUpload>レイアウト図</BtnUpload>
          </UploadFile>
          {
            file1 != null && <List>
              {
                [...file1].map((file, i) =>
                  <FileItem name={file.name} />
                )
              }
            </List>
          }

        </div>
      </WrapInput>

      <WrapInput>
        <div>
          <LabelInput $width={120}></LabelInput>
          <UploadFile>
            <InputFile type='file' title="" multiple
              onChange={(e) => {
                if (e.target.files) setFile2(e.target.files)
              }}
            />
            <BtnUpload>レイアウト図参考</BtnUpload>
          </UploadFile>
          {
            file2 != null && <List>
              {
                [...file2].map((file, i) =>
                <FileItem name={file.name} />
              )
              }
            </List>
          }
        </div>
      </WrapInput>
      <NewWrapBtn>
        <BtnSave>保存</BtnSave>
        <BtnCancel>削除</BtnCancel>
      </NewWrapBtn>
    </AdminPage>
  )
}

const BreakLine = styled.div`
  height: 20px;
`

const BtnUpload = styled.div`
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

const ColInfo = styled.div`
  width: 200px;
  text-align: left;
`
const UploadFile = styled.div`
  position: relative;
`

const List = styled.div`
  display: flex;
`

const FileSelected = styled.div`
  margin: 0 12px;
  position: relative;
  padding-right: 15px;
`

const FileDelete = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #E5E5E5;
  font-size: 12px;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
`

const InputFile = styled.input`
  outline: none;
  border: none;
  background: transparent;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity:0;
  cursor: pointer;
`


export default SaleDetail