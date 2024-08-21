import { ChildrenProps } from "@/shared/interface";
import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Button,
} from "@mui/material"

const Cart = ({children}: ChildrenProps) => {
  return <div>{children}</div>
}

const Title = ({children}: ChildrenProps) => {
  return <div>장바구니 ({children})</div>
}

const TableWrapper = ({children}: ChildrenProps) => {
  return <Table>{children}</Table>
}

const TableHeadWrapper = ({children}: ChildrenProps) => {
  return (
    <TableHead>
      <TableRow>{children}</TableRow>
    </TableHead>
  )
}

const TableCellItem = ({children}: ChildrenProps) => {
  return <TableCell>{children}</TableCell>
}
const TableBodyWrapper = ({children}: ChildrenProps) => {
  return <TableBody>{children}</TableBody>
}
const TableRowWrapper = ({children}: ChildrenProps) => {
  return <TableRow data-testid="cart-row">{children}</TableRow>
}

interface removeProps extends ChildrenProps {
  onClick: () => void
}

const TableRemoveButton = ({children, onClick}: removeProps) => {
  return (
    <Button
      variant='contained'
      size="large"
      data-testid='cart-selected-remove-btn'
      onClick={onClick}
    >
      {children}
    </Button>
  )
}

Cart.Title = Title
Cart.Table = TableWrapper
Cart.TableHead = TableHeadWrapper
Cart.TableCell = TableCellItem
Cart.TableBody = TableBodyWrapper
Cart.TableRow = TableRowWrapper
Cart.RemoveButton = TableRemoveButton

export default Cart