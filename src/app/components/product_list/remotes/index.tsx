import { useSearchContext } from "@/context/SearchContext";
import { QueryClient, useQuery } from "@tanstack/react-query";
import { CategoryEnum, ProductType } from "../interface";
import { AxiosError } from "axios";
import { getProductList } from "@/hooks/product";


const queryClient = new QueryClient()
export const getPrefetchProductList = () => {
  queryClient.prefetchQuery({
    queryKey: ['product_list'],
    queryFn: () => getProductList({category: CategoryEnum.electronics})
  })
}

export const useProductList = () => {
  const {category} = useSearchContext()
  return useQuery<ProductType[], AxiosError>({
    queryKey: ['product_list', category],
    queryFn: () => getProductList({category}),
    enabled: !!category
  })
}