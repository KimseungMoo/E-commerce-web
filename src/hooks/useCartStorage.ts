import { ProductType } from "@/app/components/product_list/interface";
import { useLocalStorage } from "./useLocalStorage";

interface CartItem extends ProductType {
  isChecked: boolean
}
const defaultData: CartItem[] = []

export const useCartItem = () => {
  const [cartData, setCartData] = useLocalStorage('cart', defaultData)

  return [cartData, setCartData] as const
}