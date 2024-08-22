"use client"

import { useCartContext } from "@/context/CartContext"
import { Button } from "@mui/material"
import { ProductType } from "../../product_list/interface"
// import { useRouter } from "next/navigation"

interface Props {
  item: ProductType
}

const AddButton = ({item}: Props) => {
  const {id, price, title, description, category, image} = item
  const {count, setCount} = useCartContext()
  // const router = useRouter()

  const onClick = () => {
    const res = JSON.parse(localStorage.getItem('cart')!) || []
    const found = res.find((c: ProductType) => c.id === id)
    console.log(count, res)
    if (found) {
      alert("상품이 이미 추가되었습니다.")
    } else {
      localStorage.setItem('cart', JSON.stringify([...res, item]))
      setCount!(res.length + 1)
      // router.push('/cart')
    }
  }
  
  return (
    <Button
      size="large"
      variant='contained'
      onClick={onClick}
    >
      Add to Cart
    </Button>
  )
}

export default AddButton