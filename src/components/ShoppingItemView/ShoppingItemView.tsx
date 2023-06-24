import React, { FC } from "react";
import { StyleSheet } from "react-native";
import { ShoppingItem } from "../../types";
import { COLORS } from "../../constants";
import { Image } from "../Image";
import { TitleAndPrice } from "../TitleAndPrice";
import { Button } from "../Button";

export interface ShoppingItemViewProps extends ShoppingItem {
  onPress?: () => void;
}

export const ShoppingItemView: FC<ShoppingItemViewProps> = ({
  imageUrl,
  title,
  price,
  onPress,
}) => {
  return (
    <Button onPress={onPress} disabled={!onPress} style={styles.wrapper}>
      <Image url={imageUrl} />
      <TitleAndPrice title={title} price={price} />
    </Button>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 6,
    marginBottom: 16,
    padding: 16,
    flexDirection: "row",
    borderColor: COLORS.borderColor,
    borderWidth: 1,
  },
  price: {
    marginTop: 16,
  },
});
