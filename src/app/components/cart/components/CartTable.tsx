import {Button, Checkbox} from '@mui/material'
import { ProductType } from "../../product_list/interface";
import Cart from "./Cart";
import { ChangeEvent } from 'react';

interface CartItem extends ProductType {
  isChecked?: boolean
}

const CartTable = () => {

  const onChangeCheckItem = (e: ChangeEvent<HTMLInputElement>, item: CartItem, value: CartItem[], setData: () => void ) => {

  }

  const TableBodyItem = (c: CartItem) => {
    return (
      <Cart.TableRow key={c.id}>
        <Cart.TableCell>
          <></>
          {/* <Checkbox 
            onChange={e => }
          /> */}
        </Cart.TableCell>
      </Cart.TableRow>
    )
  }

  return (
    <></>
  )
}