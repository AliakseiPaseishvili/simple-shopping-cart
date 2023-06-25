import React, { FC, ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { ShoppingItem } from "../../types";
import { COLORS } from "../../constants";
import { Image } from "../Image";
import { TitleAndPrice } from "../TitleAndPrice";
import { Button } from "../Button";

export interface ShoppingItemViewProps extends ShoppingItem {
  onPress?: () => void;
  actions?: ReactNode;
}

export const ShoppingItemView: FC<ShoppingItemViewProps> = ({
  imageUrl,
  title,
  price,
  onPress,
  actions,
}) => {
  return (
    <Button onPress={onPress} disabled={!onPress} style={styles.wrapper}>
      <View style={styles.content}>
        <Image url={imageUrl} />
        <TitleAndPrice title={title} price={price} />
      </View>
      {actions}
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
    justifyContent: "space-between",
  },
  content: {
    flexDirection: "row",
  },
  price: {
    marginTop: 16,
  },
});
