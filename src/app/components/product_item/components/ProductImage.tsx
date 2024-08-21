import { blurImageUrl } from "@/shared/data/url"
import Image from "next/image"

interface Props {
  image: string
}

const ProductImage = ({image}: Props) => {

  return (
    <div className="relative w-3/5 h-96">
      <Image 
        src={image || ''}
        alt="product_detail_thumbnail"
        placeholder='blur'
        layout="fill"
        blurDataURL={blurImageUrl}
      />
    </div>
  )
}

export default ProductImage