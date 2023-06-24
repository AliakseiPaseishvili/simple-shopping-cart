import React, { FC } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { ShoppingItem } from "../../types";

export const ShoppingItemView: FC<Omit<ShoppingItem, "id">> = ({
  imageUrl,
  title,
  price,
  description,
}) => {
  return (
    <View>
      {imageUrl ? <Image source={{ uri: imageUrl }} /> : <View>Image</View>}
      <View>
        <Text></Text>
        <Text></Text>
      </View>
    </View>
  );
};
