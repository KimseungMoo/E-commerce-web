"use client"

import Divider from "@/shared/components/Divider"
import { ProductType } from "../../product_list/interface"
import InfoSection from "./InfoSection"
import AddButton from "./AddButton"
import Product from "./Product"

interface Props {
  item: ProductType
}

const ProductInfo = ({item}: Props) => {
  const {title, description, price, id} = item

  return (
    <div className="flex flex-col gap-5">
      <Product.Title>{title}</Product.Title>
      <InfoSection>
        <InfoSection.Label>price</InfoSection.Label>
        <InfoSection.Content>
          <InfoSection.Price price={price} />
        </InfoSection.Content>
      </InfoSection>
      <Divider height={3} />
      <InfoSection>
        <InfoSection.Label>description</InfoSection.Label>
        <InfoSection.Content>{description}</InfoSection.Content>
      </InfoSection>
      <AddButton item={item} />
    </div>
  )
}

export default ProductInfo