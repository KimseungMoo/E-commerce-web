"use client"

import { useSearchContext } from "@/context/SearchContext"
import { category_list } from "../data/category_list"
import Category from "./Category"
import { useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { CategoryEnum } from "../../product_list/interface"


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
    <div className="flex gap-3">
      {category_list?.map(c => (
        <Category.Item
          key={c?.id}
          category={c?.id}
        >
          {c?.value}
        </Category.Item>
      ))}
    </div>
  )
}

export default Categories