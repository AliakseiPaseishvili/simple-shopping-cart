import React, { FC, useState } from "react";
import { Button } from "../../../components/Button";
import { Dimensions, StyleSheet, View } from "react-native";
import { COLORS } from "../../../constants";
import { Controllers } from "../../../components/Controllers";

type ItemControllersProps = {
  id: number;
};

export const ItemControllers: FC<ItemControllersProps> = () => {
  const [count, toggleCount] = useState(0);
  return (
    <View style={styles.wrapper}>
      <Controllers
        wrapperStyle={styles.controllersWrapper}
        count={count}
        onIncrease={() => toggleCount(count + 1)}
        onDecrease={() => toggleCount(count - 1)}
      />
      <Button style={styles.addToCartButton} title="Add to cart" />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    bottom: 0,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  addToCartButton: {
    borderRadius: 8,
    width: Dimensions.get("screen").width - 32,
    borderWidth: 1,
    borderColor: COLORS.borderColor,
    backgroundColor: COLORS.background,
    paddingVertical: 16,
    alignItems: "center",
  },
  controllersWrapper: {
    marginBottom: 32,
  },
});
