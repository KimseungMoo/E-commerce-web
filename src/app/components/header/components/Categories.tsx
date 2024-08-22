"use client"

import { useSearchContext } from "@/context/SearchContext"
import { category_list } from "../data/category_list"
import Category from "./Category"
import { useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { CategoryEnum } from "../../product_list/interface"
import styled from '@emotion/styled'

const CategoriesWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
  @media (max-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`

const Categories = () => {
  const {category, setCategory} = useSearchContext()
  const router = useRouter()
  const searchParams = useSearchParams()
  const categoryParams = searchParams.get('category')
  // console.log(category, categoryParams)
  useEffect(() => {
    if (categoryParams) {
      setCategory(categoryParams)
    } else if (!category) {
      const params = new URLSearchParams(searchParams.toString())
      params.set('category', CategoryEnum.electronics)
      router.push(`/?${params.toString()}`)
    }
  }, [categoryParams])
  
  return (
    <CategoriesWrapper>
      {category_list?.map(c => (
        <Category.Item
          key={c?.id}
          category={c?.id}
        >
          {c?.value}
        </Category.Item>
      ))}
    </CategoriesWrapper>
  )
}

export default Categories