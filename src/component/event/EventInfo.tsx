import React from 'react'
import styled, { css } from 'styled-components'

const EventInfo = () => {
  return (
    <div>
      <Grid>
        <div>
          <span>店舗ID： {'011097'}</span>
          <span>地域コード：</span>
          <span>開始日： {'2023/0810'}</span>
        </div>
        <div>
          <span>店舗名：{'イオンモール和歌山'}</span>
          <span>地域名： {'和歌山'}</span>
          <span>終了日： {'2023/08/31'}</span>
        </div>
        <div>
          <span>開催数： {'10'}</span>
          <span>地方名： {'近畿'}</span>
          <span>開催期間： {'21日'}</span>
        </div>
      </Grid>
      <Bottom>
        <span>レイアウト図ファイル： <a>○○.png</a></span>
        <span>ラウンド先店舗： {'イオンモール札幌'}</span>
        <span>算出方法： {'直前5か所日販'}</span>
      </Bottom>
    </div>
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  & span {
    display: block;
    margin-bottom: 6px;
  }
`

const Bottom = styled.div`
  margin-top: 32px;
  & a {
    text-decoration: underline;
  }
  & span {
    display: block;
    margin-bottom: 6px;
  }
`

export default EventInfo