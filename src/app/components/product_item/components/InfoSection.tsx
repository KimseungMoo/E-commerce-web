import { ChildrenProps } from "@/shared/interface"
import { ProductType } from "../../product_list/interface"


const InfoSection = ({children}: ChildrenProps) => {

  return <div className="flex gap-3">{children}</div>
}

const Label = ({children}: ChildrenProps) => {

  return <div className="">{children}</div>
}

const Content = ({children}: ChildrenProps) => {

  return <div className="font-bold">{children}</div>
}

const Price = ({price}: ProductType) => {

  return <div>{price}$</div>
}

InfoSection.Label = Label
InfoSection.Content = Content
InfoSection.Price = Price

export default InfoSection