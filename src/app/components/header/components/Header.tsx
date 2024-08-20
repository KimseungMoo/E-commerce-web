import Cart from "./Cart"
import Categories from "./Categories"
import Logo from "./Logo"


const Header = () => {
  return (
    <header className="flex justify-between items-center pr-10 bg-white">
      {/* 로고 */}
      <Logo />
      {/* 카테고리 */}
      <Categories />
      {/* 장바구니 */}
      <Cart />
    </header>
  )
}

export default Header