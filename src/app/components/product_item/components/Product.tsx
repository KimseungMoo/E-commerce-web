"use client"

import { ChildrenProps } from "@/shared/interface";
import styled from '@emotion/styled'

const TitleDiv = styled.div`
  color: black;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2rem;
  @media (max-width: 1024px) {
    font-size: 1.2rem;
    line-height: 1.5rem;
  }
`

const Product = ({children}: ChildrenProps) => {

  return <div className="flex gap-10 p-10">{children}</div>
}

const Left = ({children}: ChildrenProps) => {
  return <div className="flex-1 flex justify-center items-center">{children}</div>
}

const Right = ({children}: ChildrenProps) => {
  return <div className="flex-1">{children}</div>
}

const Title = ({children}: ChildrenProps) => {
  return <TitleDiv>{children}</TitleDiv>
}

Product.Left = Left
Product.Right = Right
Product.Title = Title

export default Product