"use client"

import { createContext, Dispatch, SetStateAction, useContext, useState } from "react"
import { ChildrenProps } from "@/shared/interface"

interface ISearchContext {
  category: string | undefined
  setCategory: Dispatch<SetStateAction<string | undefined>>
  keyword: string | undefined
  setKeyword: Dispatch<SetStateAction<string | undefined>>;
}
export const SearchContext = createContext<ISearchContext | null>({
  category: '',
  keyword: '',
  setCategory: () => {},
  setKeyword: () => {}
})
export const useSearchContext = () => {
  const ctx = useContext(SearchContext)
  if (!ctx) throw Error('useSearchContext must be used within a SearchProvider')
  return ctx
}
export const SearchProvider = ({children}: ChildrenProps) => {
  const [category, setCategory] = useState<string | undefined>()
  const [keyword, setKeyword] = useState<string | undefined>()

  return (
    <SearchContext.Provider
      value={{
        category,
        setCategory,
        keyword,
        setKeyword
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}