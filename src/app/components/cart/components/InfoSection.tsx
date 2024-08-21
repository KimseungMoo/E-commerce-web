import Image from "next/image"
import { ProductType } from "../../product_list/interface"

interface Props {
  item: ProductType
}

const InfoSection = ({item}: Props) => {
  return (
    <div>
      <Image src={item?.image ?? ''} width={100} height={150} alt='tableProductImg'/>
      <span>{item?.title}</span>
    </div>
  )
}

export default InfoSection