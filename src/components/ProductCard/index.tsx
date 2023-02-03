import React from "react";
import { ImageProps } from "react-native";
import {
  Container,
  ContentView,
  DescriptionText,
  ProductImage,
  PricingText,
  TitleText,
  RowView,
  RatingStartIcon,
  StarsView,
  DotsIcon,
} from "./styles";

export default function ProductCard(item: {
  title: String;
  description: String;
  rating: number;
  price: number;
  filename: ImageProps["source"];

}) {
  return (
    <Container>
      <ProductImage source={item?.filename} />
      <ContentView>
        <RowView>
          <TitleText>{item?.title}</TitleText>
          <DotsIcon />
        </RowView>
        <DescriptionText>{item?.description}</DescriptionText>
        <RowView>
          <StarsView>
            <RatingStartIcon activeStar={item?.rating > 0} />
            <RatingStartIcon activeStar={item?.rating > 1} />
            <RatingStartIcon activeStar={item?.rating > 2} />
            <RatingStartIcon activeStar={item?.rating > 3} />
            <RatingStartIcon activeStar={item?.rating > 4} />
          </StarsView>
          <PricingText>R${item?.price}</PricingText>
        </RowView>
      </ContentView>
    </Container>
  );
}
