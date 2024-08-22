"use client"

import Container from "@/shared/components/Container";
import { ProductType } from "../../product_list/interface";
import Product from "./Product";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";

interface ProductDisplayProps {
  product: ProductType
}

const defaultProduct: ProductType = {
  id: 0,
  title: '',
  image: '',
  price: '0',
  description: ''
};

const ProductDisplay = ({ product }: ProductDisplayProps) => {
  return (
    <Container>
      <Product>
        <Product.Left>
          <ProductImage image={product?.image || ''} />
        </Product.Left>
        <Product.Right>
          <ProductInfo item={product || defaultProduct} />
        </Product.Right>
      </Product>
    </Container>
  );
};

export default ProductDisplay