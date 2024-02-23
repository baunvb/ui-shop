import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { Input } from 'antd';
import Link from 'next/link';
import { LabelInput, WrapInput } from '../../src/assets/theme/commonStyle'
import Image from 'next/image'
import { PAGE_ROUTER } from '../../src/util/Constant';
import Head from 'next/head';
import { userService } from '../../server/user/user.service'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>
      <AppName src={require("../../src/assets/images/app_name.jpg")}
        alt=''
      ></AppName>
      <ImgBg src={require("../../src/assets/images/login_bg.png")}
        alt=''
      ></ImgBg>
      <FormLogin>
        <Title>みのる陶器催事システム</Title>
        <WrapInput style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
          <LabelInput>Eメール</LabelInput>
          <Input
            onChange={(e) => setUsername(e.target.value)}
            type='text'
            style={{ width: 400 }}
            className='custom-ant-input'
            placeholder='Eメール...' />
        </WrapInput>
        <WrapInput style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
          <LabelInput $width={120}>パスワード</LabelInput>
          <Input.Password
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: 400 }}
            className='custom-ant-input'
            placeholder='パスワード...' />
        </WrapInput>
        {/* <Link href={PAGE_ROUTER.CUSTOMER}> */}
          <LoginBtn
            onClick={() => {
              userService.login(username, password)
            }}
          >ログイン</LoginBtn>
        {/* </Link> */}
      </FormLogin>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const AppName = styled(Image)`
  width: 400px;
  height: auto;
  margin: 16px auto;
`

const ImgBg = styled(Image)`
  width: 100%;
  height: auto;
  margin-bottom: 24px;
  object-fit: cover;
  flex: 1;
`

const FormLogin = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.span`
  display: block;
  margin: 0 auto 24px auto;
  font-size: 24px;
  font-weight: 600;
`

const LoginBtn = styled.div`
  padding: 0 24px;
  margin: 24px 0 48px 0;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background: #647687;
  height: 38px;
  cursor: pointer;
  width: fit-content;
  color: #fff;
`

export default Login