"use client"

import Container from "@/shared/components/Container"
import { getAllProductList, getProductItem } from "@/hooks/product"
import { dehydrate, QueryClient,  } from "@tanstack/react-query"
import { ProductType } from "@/app/components/product_list/interface"
import Product from "@/app/components/product_item/components/Product"
import { useProductItem } from "@/app/components/product_item/remotes"
import ProductImage from "@/app/components/product_item/components/ProductImage"
import ProductInfo from "@/app/components/product_item/components/ProductInfo"
import Loading from "@/shared/components/Loading"
import { useEffect } from "react"

interface ProductPageProps {
  params: {
    id: string
  }
}

// export async function generateStaticParams() {
//   const list = await getAllProductList()
//   return list?.map((x: ProductType) => ({
//     id: x.id?.toString(),
//   }))
// }

const ProductItem = (
  { params }: ProductPageProps
) => {
  // const queryClient = new QueryClient()

  // await queryClient.prefetchQuery({
  //   queryKey: ["product", params.id],
  //   queryFn: () => getProductItem(params.id),
  // });

  // const dehydratedState = dehydrate(queryClient)
  // const data = dehydratedState.queries[0].state.data
  const {data, isLoading, isFetching} = useProductItem(params.id)
  // console.log(data)
  // console.log(isLoading, isFetching)

  return (
    <>
      <title>{data?.title}</title>
      <meta name='description' content={data?.description} />
      <Container>
        {isLoading || isFetching ? <Loading /> : (
          <Product>
            <Product.Left>
              <ProductImage image={data?.image} />
            </Product.Left>
            <Product.Right>
              <ProductInfo item={data} />
            </Product.Right>
          </Product>
        )}
      </Container>
    </>
  )
}

export default ProductItem