import Header from "@/app/components/header/Header";
import { ChildrenProps } from "../interface";
import Layout from "./Layout";


const Container = ({children}: ChildrenProps) => {
  return (
    <Layout>
      <Header />
      {children}
    </Layout>
  )
}

export default Container