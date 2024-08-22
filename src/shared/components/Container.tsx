"use client"

import { ChildrenProps } from "../interface";
import Layout from "./Layout";
import { Suspense } from "react";
import Loading from "./Loading";
import dynamic from "next/dynamic";

const Header = dynamic(() => import('@/app/components/header/components/Header'), {
  ssr: false
})

const Container = ({children}: ChildrenProps) => {
  return (
    <Suspense fallback={<Loading />}>
      <Layout>
        <Header />
        {children}
      </Layout>
    </Suspense>
  )
}

export default Container