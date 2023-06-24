import React, { FC } from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ShoppingItem } from "../../types";
import { COLORS } from "../../constants";

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
    <TouchableOpacity onPress={onPress} disabled={!onPress} style={styles.wrapper}>
      {imageUrl ? (
        <Image source={{ uri: imageUrl }} style={styles.image} />
      ) : (
        <View style={styles.image}>
          <Text style={styles.imagePlaceholderText}>Image</Text>
        </View>
      )}
      <View>
        <Text>{title}</Text>
        <Text style={styles.price}>{`$${price}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 6,
    marginBottom: 16,
    padding: 16,
    flexDirection: 'row',
    borderColor: COLORS.borderColor,
    borderWidth: 1,
  },
  image: {
    width: 64,
    height: 64,
    backgroundColor: COLORS.placeholderColor,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  imagePlaceholderText: {
    fontSize: 18,
    fontWeight: '700',
  },
  price: {
    marginTop: 16,
  }
});
