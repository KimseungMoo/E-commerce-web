import { Divider as DividerLine } from "@mui/material";

interface Props {
  color?: string
  height?: number
}

const Divider = ({
  color = 'color: rgb(8 47 73)',
  height = 1
}: Props) => {

  return (
    <DividerLine color={color} style={{height}} />
  )
}

export default Divider