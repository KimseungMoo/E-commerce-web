import { ChildrenProps } from "../interface";


const Layout = ({children}: ChildrenProps) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  )
}

export default Layout