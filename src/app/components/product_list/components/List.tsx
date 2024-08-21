import { ChildrenProps } from "@/shared/interface";
import Link from "next/link";


const List = ({children}: ChildrenProps) => {
  return (
    <main className="w-full flex pl-10 pr-10">
      {children}
    </main>
  )
}

const Content = ({children}: ChildrenProps) => {
  return (
    <section className="w-full items-center justify-center gap-10  grid grid-cols-3">
      {children}
    </section>
  )
}

interface ItemProps extends ChildrenProps {
  id?: number
}

const Item = ({children, id}: ItemProps) => {
  return (
    <li className="list-none bg-slate-50 py-5 rounded-lg">
      <Link href={`/product/${id}`}>
        <div className="flex items-center justify-center">
          <a className="w-80 h-full flex flex-col items-center justify-between gap-5">{children}</a>
        </div>
      </Link>
    </li>
  )
}

const Info = ({children}: ChildrenProps) => {
  return <div className="w-fit flex flex-col gap-2">{children}</div>
}

const Thumbnail = ({children}: ChildrenProps) => {
  return <div className="relative w-full h-48">{children}</div>
}

const Title = ({children}: ChildrenProps) => {
  return <span className="text-black">{children}</span>
}

const Description = ({children}: ChildrenProps) => {
  return <span className="text-black">{children}</span>
}

const Price = ({children}: ChildrenProps) => {
  return <span className="text-black">{children}</span>
}

List.Content = Content
List.Item = Item
List.Info = Info
List.Thumbnail = Thumbnail
List.Title = Title
List.Description = Description
List.Price = Price

export default List