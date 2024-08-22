import { useQuery } from "@tanstack/react-query"
import { ProductType } from "../../product_list/interface"
import { AxiosError } from "axios"
import { getProductItem } from "@/hooks/product"


export const useProductItem = (productId: string) => {
  return useQuery<ProductType, AxiosError>({
    queryKey: ['product'], 
    queryFn: () => getProductItem(productId)
  })
}