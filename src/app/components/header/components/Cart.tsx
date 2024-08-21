import Link from "next/link"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCartContext } from "@/context/CartContext";
import { useEffect } from "react";


const Cart = () => {
  const {count, setCount} = useCartContext()

  useEffect(() => {
    const itemCount = JSON.parse(localStorage.getItem('cart')!) || []
    setCount!(itemCount.length)
  }, [setCount])

  return (
    <div>
      <Link href={'/cart'} className="cursor-default">
        <div>
          <a className="flex flex-col items-center justify-center">
            <ShoppingCartIcon fontSize='large' color='action' className="cursor-pointer w-12 h-12" />
            <span className="text-slate-700">{count}</span>
          </a>
        </div>
      </Link>
    </div>
  )
}

export default Cart