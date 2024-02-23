import React from 'react'
import styled, { css } from 'styled-components'
import { Color } from '../../assets/theme/Color'
import { useLocation, useNavigate } from 'react-router-dom'
import { PAGE_ROUTER } from '../../util/Constant'
import { useRouter } from 'next/router'
import { usePathname } from 'next/navigation'

const NavbarStyle = styled.div`
  height: 100vh;
  width: 256px;
  min-width: 256px;
  background: ${Color.navBarBg};
  display: flex;
  flex-direction: column;
`
const NavMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
`
const NavTitle = styled.span`
  font-size: 18px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  color: #fff;
  margin: 32px 0px;
`
const NavFooter = styled.span`
  font-size: 18px;
  display: flex;
  flex-direction: column;
  color: #fff;
  margin: 32px 0px;
`
const Item = styled.div<{ $active?: boolean }>`
  margin: 8px 18px;
  height: 38px;
  font-size: 14px;
  text-align: center;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  :hover {
    color: #000;
    cursor: pointer;
    background: #fff;
    border-radius: 10px;
  }
  ${props => props.$active && css`
    color: #000;
    background: #fff;
    border-radius: 10px;
  `}
`

const NLink = styled.a`
  color: #fff;
  :hover {
    color: #fff;
  }
`

const Navbar = () => {
  const router = useRouter()
  const pathName = router.pathname

  function isActive(path: string) {
    return pathName.includes(path)
  }

  return (
    <NavbarStyle>
      <NavTitle>
        <span>みのる陶器</span>
        <span>催事システム</span>
      </NavTitle>

      <NavMenu>
        <Item $active={isActive(PAGE_ROUTER.CUSTOMER)}
          onClick={() => router.push(PAGE_ROUTER.CUSTOMER)}
        >得意先管理</Item>
        <Item $active={isActive(PAGE_ROUTER.EVENT)}
          onClick={() => router.push(PAGE_ROUTER.EVENT)}>催事管理</Item>
        <Item
        $active={isActive(PAGE_ROUTER.PICKING)}
        onClick={() => router.push(PAGE_ROUTER.PICKING)}
        >ピッキング管理</Item>
        <Item $active={isActive(PAGE_ROUTER.SHIPPING)}
          onClick={() => router.push(PAGE_ROUTER.SHIPPING)}>出荷管理</Item>
        <Item
          $active={isActive(PAGE_ROUTER.PRODUCT)}
          onClick={() => router.push(PAGE_ROUTER.PRODUCT)}
        >商品管理</Item>
        <Item
          $active={isActive(PAGE_ROUTER.SALE)}
          onClick={() => router.push(PAGE_ROUTER.SALE)}
        >売上管理</Item>
      </NavMenu>

      <NavFooter>
        <span>セット太郎</span>
        <NLink href='/'>ログアウト</NLink>
      </NavFooter>
    </NavbarStyle>
  )
}

export default Navbar