import Link from "next/link"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCartContext } from "@/context/CartContext";
import { useEffect } from "react";


const Cart = () => {
  const {count, setCount} = useCartContext()

  // useEffect(() => {

  // }, [setCount])

  return (
    <div>
      <Link href={'/cart'} className="cursor-default">
        <div>
          <a>
            <ShoppingCartIcon fontSize='large' color='action' className="cursor-pointer w-12 h-12" />
            {/* <span>{count}</span> */}
          </a>
        </div>
      </Link>
    </div>
  )
}

export default Cart