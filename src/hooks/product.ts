import { ProductType } from "@/app/components/product_list/interface"
import { axiosGet } from "@/remotes/axios"

interface Props {
  // keyword?: string
  category?: string
}

export const getProductList = async ({
  // keyword,
  category
}: Props): Promise<ProductType[]> => {
  const baseQuery = '/products'
  let url = `${baseQuery}/category/${category}`

  const {data} = await axiosGet(url)
  return data
}

export const getAllProductList = async (): Promise<ProductType[]> => {
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
export const fetchAllProductList = async (): Promise<ProductType[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_FAKE_STORE_BASE_URL}/products`)
  const data = res.json()

  return data
}

export const fetchProductItem = async (id: string): Promise<ProductType> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_FAKE_STORE_BASE_URL}/products/${id}`)
  const data = res.json()

  return data
}