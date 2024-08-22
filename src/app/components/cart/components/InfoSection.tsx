import Image from "next/image"
import { ProductType } from "../../product_list/interface"

interface Props {
  item: ProductType
}

const InfoSection = ({item}: Props) => {
  return (
    <div className="flex items-center gap-4">
      <div className="relative w-20 h-36">
        <Image 
          src={item?.image ?? ''} 
          // width={100} 
          // height={150} 
          alt='tableProductImg'
          layout="fill"
        />
      </div>
      <span className="text-black">{item?.title}</span>
    </div>
  )
}

export default InfoSection