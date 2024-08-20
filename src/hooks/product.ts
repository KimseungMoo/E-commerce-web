import { ProductListType, ProductType } from "@/app/components/product_list/interface"
import { axiosGet } from "@/remotes/axios"

interface Props {
  // keyword?: string
  category?: string
}

export const getProductList = async ({
  // keyword,
  category
}: Props): Promise<ProductListType> => {
  const baseQuery = '/products'
  let url = `${baseQuery}/category/${category}`

  const {data} = await axiosGet(url)
  return data
}

export const getAllProductList = async (): Promise<ProductListType> => {
  const url = '/products'
  const {data} = await axiosGet(url)
  return data
}
export const getProductItem = async (id: string): Promise<ProductType> => {
  const {data} = await axiosGet(`/products/${id}`)
  return data
}
export const getCategories = async (): Promise<Array<string>> => {
  const {data} = await axiosGet('/products/categories')
  return data
}