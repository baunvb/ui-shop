import styled, { css } from 'styled-components'

export const AdminPageContent = styled.div`
    width: 100%;
`

export const PageHeader = styled.div`
    margin: 16px 0 30px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between
`

export const PageTitle = styled.span`
    font-size: 16px;
    font-weight: 600;
    color: #000;
`

export const PageBtnAdd = styled.div`
    width: 100px;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background-image: linear-gradient(#DAE8FC, #7EA6E0);
    height: 38px;
    border: 1px solid #6C8EBF;
    cursor: pointer;
`

export const BtnView = styled.div`
    width: 50px;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background-image: linear-gradient(#F5F5F5, #B3B3B3);
    height: 26px;
    border: 1px solid #000;
    cursor: pointer;
`

export const BtnShow = styled.div`
    width: 50px;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background-image: linear-gradient(#FFF2CC, #FFD966);
    height: 26px;
    border: 1px solid #B85450;
    cursor: pointer;
`

export const BtnDelete = styled.div`
    width: 50px;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background-image: linear-gradient(rgb(248, 206, 204), rgb(234, 107, 102));
    height: 26px;
    border: 1px solid #B85450;
    cursor: pointer;
`

export const BtnSearch = styled.div`
    margin-left: 32px;
    width: 70px;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background-image: linear-gradient(#F5F5F5, #B3B3B3);
    height: 38px;
    border: 1px solid #000;
    cursor: pointer;
`


export const BtnSave = styled.div`
    width: 100px;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background-image: linear-gradient(#D5E8D4, #97D077);
    height: 40px;
    border: 1px solid #82B366;
    cursor: pointer;
`

export const BtnCancel = styled.div`
    margin-left: 20px;
    width: 100px;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background-image: linear-gradient(#F8CECC, #EA6B66);
    height: 40px;
    border: 1px solid #B85450;
    cursor: pointer;
`

export const TableBottomRight = styled.div`
    position: absolute;
    right: 0;
    display: flex;
    & > div:not(first-child) {
        margin-left: 20px;
    }

`

export const TableBottomLeft = styled.div`
    position: absolute;
    left: 0;
    display: flex;
    & > div {
        margin-right: 20px;
    }
`

export const BtnDownload = styled.div`
    width: fit-content;
    min-width: 120px;
    padding: 0 8px;
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
export const Center = styled.div`
    text-align: center
`

export const LabelInput = styled.span<{ $width?: number }>`
    font-size: 14px;
    min-width: 60px;
    width: fit-content;
    display: inline-flex;
    color: #000;
    ${props => props.$width && css`
        width: ${props.$width}px
    `}
`

export const WrapInput = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    flex-direction: row;
    width: 100%;
    & > div:not(:first-child) {
        text-align: center;
        margin-left: 24px;
    }
    & > div {
        display: flex;
        align-items: center;
    }
`

export const ActionColumn = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: space-evenly;
    gap: 10px;
`

export const NewWrapBtn = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 30px;
`
export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
`
export const WrapRow = styled.div`
    margin: 28px 0;
`
export const TotalItem = styled.span`
  font-size: 14px;
  text-align: left;
  display: block;
  margin-right: 20px;
`