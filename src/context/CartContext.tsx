"use client"

import { createContext, Dispatch, SetStateAction, useContext, useState } from "react"
import { ChildrenProps } from "@/shared/interface"

interface ICartContext {
  count: number | undefined
  setCount: Dispatch<SetStateAction<number | undefined>>
  isOpen: boolean | undefined
  setIsOpen: Dispatch<SetStateAction<boolean | undefined>>
}

export const CartContext = createContext<ICartContext | null>({
  count: 0,
  setCount: () => {},
  isOpen: false,
  setIsOpen: () => {}
})

export const useCartContext = () => {
  const ctx = useContext(CartContext)
  if (!ctx) throw Error('useCartContext must be used within a CartProvider')
  return ctx
}

export const CartProvider = ({children}: ChildrenProps) => {
  const [count, setCount] = useState<number | undefined>()
  const [isOpen, setIsOpen] = useState<boolean | undefined>()

  return (
    <CartContext.Provider
      value={{
        count,
        setCount,
        isOpen,
        setIsOpen
      }}
    >
      {children}
    </CartContext.Provider>
  )

}