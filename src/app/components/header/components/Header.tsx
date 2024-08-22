"use client"

import CartButton from "./CartButton"
import Categories from "./Categories"
import HamburgerMenu from "./HamburgerMenu"
import Logo from "./Logo"
import styled from '@emotion/styled'

const CategoriesWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
  @media (max-width: 1024px) {
    display: none;
  }
`

const Header = () => {
  return (
    <header className="flex justify-between items-center pr-10 bg-white">
      {/* 로고 */}
      <Logo />
      {/* 카테고리 */}
      <CategoriesWrapper>
        <Categories />
      </CategoriesWrapper>
      <div className="flex gap-3">
        {/* 장바구니 */}
        <CartButton />
        {/* 햄버거 메뉴 */}
        <HamburgerMenu />
      </div>
    </header>
  )
}

export default Header