import React, { useEffect, useState } from "react";
import { productsList } from "../../src/data/index";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";

import { Container, ProductsFlatList } from "./styles";
export default () => {
  const [prodcuts, setProducts] = useState(productsList);
  return (
    <Container>
      <Header title={"Products"} />
      <ProductsFlatList
        keyExtractor={(item, index: number) => index}
        data={prodcuts}
        renderItem={({ item, index }) => <ProductCard {...item} />}
      />
    </Container>
  );
};
