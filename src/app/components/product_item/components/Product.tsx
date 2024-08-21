import { ChildrenProps } from "@/shared/interface";


const Product = ({children}: ChildrenProps) => {

  return <div className="flex gap-10 px-10">{children}</div>
}

const Left = ({children}: ChildrenProps) => {
  return <div className="flex-1 flex justify-center items-center">{children}</div>
}

const Right = ({children}: ChildrenProps) => {
  return <div className="flex-1">{children}</div>
}

const Title = ({children}: ChildrenProps) => {
  return <div className="text-black text-2xl font-bold mb-10">{children}</div>
}

Product.Left = Left
Product.Right = Right
Product.Title = Title

export default Product