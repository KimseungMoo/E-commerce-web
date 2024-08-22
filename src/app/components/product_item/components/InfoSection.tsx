"use client"

import { ChildrenProps } from "@/shared/interface"
import { ProductType } from "../../product_list/interface"
import styled from '@emotion/styled'

const InfoSectionDiv = styled.div`
  display: flex;
  gap: 0.75rem;
  @media (max-width: 1024px) {
    flex-direction: column
  }
`

const InfoSection = ({children}: ChildrenProps) => {

  return <InfoSectionDiv>{children}</InfoSectionDiv>
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