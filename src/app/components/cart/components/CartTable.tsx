import {Button, Checkbox} from '@mui/material'
import { ProductType } from "../../product_list/interface";
import Cart from "./Cart";
import { ChangeEvent, useEffect, useState } from 'react';
import InfoSection from './InfoSection';
import DeleteIcon from '@mui/icons-material/Delete';
import { useCartContext } from '@/context/CartContext';
import { useCartItem } from '@/hooks/useCartStorage';

interface CartItem extends ProductType {
  isChecked?: boolean
}

const CartTable = () => {
  const [data, setData] = useState<CartItem[] | undefined>()
  const {setCount} = useCartContext()
  const [cartData, setCartData] = useCartItem()

  useEffect(() => {
    const cartDataArr = cartData?.map((c: CartItem) => ({
      ...c,
      isChecked: false
    }))
    setData(cartDataArr)
  }, [cartData, setData])

  const onRemoveItems = (
    value: CartItem[],
    setData: (c: CartItem[]) => void,
    setCount: (count: number) => void,
    setCartData: (v: CartItem[]) => void
  ) => {
    const removedArr = value.filter((item: CartItem) => item.isChecked === true)
    const notRemovedArr = value.filter((item: CartItem) => item.isChecked !== true)

    if (removedArr?.length === 0) return
    setData(notRemovedArr)
    setCount(notRemovedArr?.length!)
    setCartData(notRemovedArr)
  }

  const onChangeCheckItem = (
    e: ChangeEvent<HTMLInputElement>, 
    item: CartItem, 
    value: CartItem[], 
    setData: (v: CartItem[]) => void
  ) => {
    const filteredItem = value.map((c: CartItem) => {
      if (c.id === item.id) c.isChecked = e.target.checked
      else c
      return c
    })
    setData(filteredItem)
  }

  const onCheckAllItem = (
    e: ChangeEvent<HTMLInputElement>,
    value: CartItem[]
  ) => {
    const filteredItem = value.map((c: CartItem) => {
      c.isChecked = e.target.checked
      return c
    })
    setData(filteredItem)
  }

  const onRemoveItem = (
    id: number,
    setData: (v: CartItem[]) => void,
    setCount: (count: number) => void,
    setCartData: (v: CartItem[]) => void,
    value: CartItem[]
  ) => {
    const filteredItem = value.filter((item: CartItem) => item.id !== id)
    setData(filteredItem)
    setCount(filteredItem?.length!)
    setCartData(filteredItem)
  }

  const TableBodyItem = (c: CartItem) => {
    return (
      <Cart.TableRow key={c.id}>
        <Cart.TableCell>
          <Checkbox 
            onChange={e => onChangeCheckItem(e, c, data!, setData)}
            checked={c.isChecked}
            inputProps={{'aria-label': `table-row-checkbox-${c.id}`}}
          />
        </Cart.TableCell>
        <Cart.TableCell>
          <InfoSection item={c} />
        </Cart.TableCell>
        <Cart.TableCell>{c.price}</Cart.TableCell>
        <Cart.TableCell>
          <DeleteIcon className='cursor-pointer' data-testid='remove-button' onClick={() => onRemoveItem(c.id!, setData, setCount, setCartData, data!)} />
        </Cart.TableCell>
      </Cart.TableRow>
    )
  }

  return (
    <div className='flex flex-col gap-8'>
      <Cart.Table data-testid='test-table'>
        <Cart.TableHead>
          <Cart.TableCell>
            <Checkbox inputProps={{'aria-label': 'select-all-checkbox'}} onChange={e => onCheckAllItem(e, data!)} />
          </Cart.TableCell>
          <Cart.TableCell>Info</Cart.TableCell>
          <Cart.TableCell>Price</Cart.TableCell>
          <Cart.TableCell><></></Cart.TableCell>
        </Cart.TableHead>
        <Cart.TableBody>
          {data?.map(c => (
            <TableBodyItem key={c.id} {...c} />
          ))}
        </Cart.TableBody>
      </Cart.Table>
      <div>
        <Cart.RemoveButton onClick={() => onRemoveItems(data!, setData, setCount, setCartData)}>
          Remove
        </Cart.RemoveButton>
      </div>
    </div>
  )
}

export default CartTable