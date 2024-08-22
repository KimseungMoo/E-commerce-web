import { fetchAllProductList, fetchProductItem } from "@/hooks/product"
import { ProductType } from "@/app/components/product_list/interface"
import Loading from "@/shared/components/Loading"
import { Metadata } from "next"
import ProductDisplay from "@/app/components/product_item/components/ProductDIsplay"

interface ProductPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = await fetchProductItem(params.id);
  return {
    title: `${product.title} - Product Details`,
    description: `${product.description} ${product.title}`,
  };
}

export async function generateStaticParams() {
  const products = await fetchAllProductList()

  return products?.map((product: ProductType) => ({
    id: product?.id?.toString()
  }))
}

const ProductItem = async (
  { params }: ProductPageProps
) => {
  
  const product = await fetchProductItem(params.id)
  // console.log(product)

  if (!product) {
    return <Loading />
  }

  return (
    <ProductDisplay product={product} />
  )
}

export default ProductItem