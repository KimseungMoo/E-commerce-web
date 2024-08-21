import Image from "next/image"
import { ProductType } from "../interface"
import List from "./List"
import { blurImageUrl } from "@/shared/data/url"

interface Props {
  value: ProductType
}

const ListItem = ({value}: Props) => {
  return (
    <List.Item id={value.id}>
      <List.Thumbnail>
        <Image 
          src={value?.image || ''}
          // width={250}
          // height={350}
          alt="product_thumbnail"
          placeholder='blur'
          layout="fill"
          // objectFit="cover"
          blurDataURL={blurImageUrl}
        />
      </List.Thumbnail>
      <List.Info>
        <List.Title>{value?.title}</List.Title>
        {/* <List.Description>{value?.description}</List.Description> */}
        <List.Price>{value?.price}$</List.Price>
      </List.Info>
    </List.Item>
  )
}

export default ListItem