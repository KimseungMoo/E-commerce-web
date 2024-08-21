"use client"

import Container from "@/shared/components/Container";
import { NextPage } from "next";
import ListContent from "./components/product_list/components/ListContent";

const Home: NextPage = () => {

  return (
    <Container>
      <ListContent />
    </Container>
  )
}

export default Home
