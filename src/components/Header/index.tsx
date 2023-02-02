import React from "react";
import { Container, TitleText, ViewTextTitle } from "./styles";

const Header = ({ title }) => {
  return (
    <Container>
      <ViewTextTitle>
        <TitleText>{title}</TitleText>
      </ViewTextTitle>
    </Container>
  );
};

export default Header;
