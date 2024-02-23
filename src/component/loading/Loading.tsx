import React from 'react'
import styled, { css } from 'styled-components'
import { Spin } from 'antd';


const LoadingWrap: any = styled.div`
  position: fixed;
  z-index: 1000;
  background: #000;
  opacity: 0.8;
  width: 100vw;   
  height: 100%;
  top: 0;
  left: 0;
`

const LoadingContent: any = styled.div`
  top: 50%;
  transform: translate(0, -50%);
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const Img1: any = styled.img`
  width: 150px;
  animation: ld-spin infinite 3s linear;
`

const Img2: any = styled.img`
  position: absolute;
  width: 150px;
`

const Loading = () => {
  return (
    <LoadingWrap>
      <LoadingContent>
        <Spin />
      </LoadingContent>
    </LoadingWrap>
  )
}

export default Loading