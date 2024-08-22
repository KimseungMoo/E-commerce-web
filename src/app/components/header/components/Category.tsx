"use client"

import { useSearchContext } from "@/context/SearchContext";
import { ChildrenProps } from "@/shared/interface";
import Link from "next/link";
import { useEffect, useState } from "react";
import styled from '@emotion/styled'
import { useCartContext } from "@/context/CartContext";

const ItemDiv = styled.div<{isSelected: boolean}>`
  padding: 0.5rem;
  border-radius: 0.375rem;
  span {
    color: black;
  }
  ${({isSelected}) => isSelected && `
    background-color: rgb(96 165 250);
    span {
      color: white;
    }
  `}
  @media (max-width: 1024px) {
    background-color: initial;
    span {
      color: black;
    }
  }
`

const Category = ({children}: ChildrenProps) => {
  return (
    <nav>
      <ul>{children}</ul>
    </nav>
  )
}

interface Props extends ChildrenProps {
  category: string | undefined
}

const Item = ({children, category}: Props) => {
  const {category: _category} = useSearchContext()
  const {setIsOpen} = useCartContext()
  const [isSelected, setIsSelected] = useState(false)

  const onClick = () => {
    setIsOpen(prev => !prev)
  }

  useEffect(() => {
    setIsSelected(category === _category)
  }, [category, _category])

  const selectedClassName = isSelected ? 'bg-blue-400' : ''
  const selectedTextClassName = isSelected ? 'text-white' : ''

  return (
    <li className="list-none">
      <Link href={`/?category=${category}`} onClick={onClick}
      >
        {/* <div className={`p-2 hover:bg-blue-50 rounded-md ${selectedClassName}`}>
          <span className={`font-roboto text-black ${selectedTextClassName}`}>{children}</span>
        </div> */}
        <ItemDiv isSelected={isSelected}>
          <span>{children}</span>
        </ItemDiv>
      </Link>
    </li>
  )
}

Category.Item = Item

export default Category