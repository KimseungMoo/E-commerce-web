"use client"

import Container from "@/shared/components/Container"
import Cart from "../components/cart/components/Cart"
import { useCartContext } from "@/context/CartContext"
import CartTable from "../components/cart/components/CartTable"
import Divider from "@/shared/components/Divider"


const CartPage = () => {
  const {count} = useCartContext()

  return (
    <>
      <title>장바구니</title>
      <meta name='description' content='장바구니 목록입니다.' />
      <Container>
        <Cart>
          <Cart.Title>{count}</Cart.Title>
          <Divider height={3} />
          <CartTable />
        </Cart>
      </Container>
    </>
  )
}

export default CartPage