import React, { useState } from "react";
import db from "../../db.json";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";

import { Container, ProductsFlatList } from "./styles";
export default () => {
  return (
    <Container>
      <Header title={"Products"} />
      <ProductsFlatList
        keyExtractor={(item, index: number) => index}
        data={db}
        renderItem={({ item, index }) => <ProductCard {...item} />}
      />
    </Container>
  );
};
