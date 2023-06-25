import React, { FC } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../../constants";

type CartSumProps = {
  sum: number;
};

export const CartSum: FC<CartSumProps> = ({ sum }) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>{`Total: ${sum.toFixed(2)}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    bottom: 0,
    width: Dimensions.get("screen").width,
    paddingHorizontal: 16,
    paddingVertical: 32,
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: COLORS.borderColor,
    backgroundColor: COLORS.background,
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
  },
});
