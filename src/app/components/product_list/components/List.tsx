import { ChildrenProps } from "@/shared/interface";
import Link from "next/link";
import styled from '@emotion/styled'

const ListMain = styled.main`
  width: 100%;
  display: flex;
  padding: 0 5rem;
  @media (max-width: 1024px) {
    padding: 0 2rem;
  }
`

const ContentSection = styled.section`
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  @media (max-width: 1024px) {
    gap: 1rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`

const List = ({children}: ChildrenProps) => {
  return (
    <ListMain>
      {children}
    </ListMain>
  )
}

const Content = ({children}: ChildrenProps) => {
  return (
    <ContentSection>
      {children}
    </ContentSection>
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
          <span className="w-80 h-full flex flex-col items-center justify-between gap-5">{children}</span>
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