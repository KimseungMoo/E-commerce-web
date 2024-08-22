import Link from "next/link"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCartContext } from "@/context/CartContext";
import { useEffect } from "react";
import styled from '@emotion/styled'

const CartIcon = styled(ShoppingCartIcon)`
  cursor: pointer;
  width: 3rem;
  height: 3rem;
  @media (max-width: 1024px) {
    width: 2rem;
    height: 2rem;
  }
`

const CartButton = () => {
  const {count, setCount} = useCartContext()

  useEffect(() => {
    const itemCount = JSON.parse(localStorage.getItem('cart')!) || []
    setCount!(itemCount.length)
  }, [setCount])

  return (
    <div>
      <Link href={'/cart'} className="cursor-default">
        <div className="flex flex-col items-center justify-center">
          <CartIcon fontSize='large' color='action'/>
          <span className="text-slate-700">{count}</span>
        </div>
      </Link>
    </div>
  )
}

export default CartButton