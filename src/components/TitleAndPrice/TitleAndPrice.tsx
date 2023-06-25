import React, { FC } from "react";
import { View, Text, StyleSheet, ViewStyle } from "react-native";

type TitleAndPriceProps = {
  title: string;
  price: number;
  wrapperStyle?: ViewStyle;
};

export const TitleAndPrice: FC<TitleAndPriceProps> = ({
  title,
  price,
  wrapperStyle,
}) => (
  <View style={wrapperStyle}>
    <Text>{title}</Text>
    <Text style={styles.price}>{`$${price.toFixed(2)}`}</Text>
  </View>
);

const styles = StyleSheet.create({
  price: {
    marginTop: 16,
  },
});
