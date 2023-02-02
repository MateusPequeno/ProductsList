import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

export const Container = styled.View`
  flex-direction: row;
  background-color: white;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`;
export const ProductImage = styled.Image`
  width: 120px;
  height: 120px;
`;

export const ContentView = styled.View`
  margin-left: 16px;
  width: 65%;
`;
export const TitleText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: "#6F4E37";
`;
export const DescriptionText = styled.Text.attrs({
  numberOfLines: 5,
})`
  font-size: 16px;
  color: black;
`;
export const PricingText = styled.Text`
  font-size: 17px;
  color: black;
`;
export const RowView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 20px 0px 0px;
`;
export const StarsView = styled.View`
  flex-direction: row;
`;

export const RatingStartIcon = styled(MaterialIcons).attrs(
  (props: { activeStar: Boolean }) => ({
    size: 25,
    name: props.activeStar ? "star" : "star-border",
  })
)`
  color: ${(props: { activeStar: Boolean }) =>
    props.activeStar ? "purple" : "black"};
`;

export const DotsIcon = styled(Entypo).attrs({
  name: "dots-three-horizontal",
  size: 25,
})``;
