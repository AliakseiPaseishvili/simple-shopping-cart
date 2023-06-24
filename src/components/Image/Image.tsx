import React, { FC } from "react";
import { Image as RNImage, View, Text, StyleSheet, ViewStyle, ImageStyle, TextStyle } from "react-native";
import { COLORS } from "../../constants";

type ImageProps = { url?: string, imageStyle?: ViewStyle & ImageStyle, placeholderTextStyle?: TextStyle };

export const Image: FC<ImageProps> = ({ url, imageStyle, placeholderTextStyle }) =>
  url ? (
    <RNImage source={{ uri: url }} style={[styles.image, imageStyle]} />
  ) : (
    <View style={[styles.image, imageStyle]}>
      <Text style={[styles.imagePlaceholderText, placeholderTextStyle]}>Image</Text>
    </View>
  );

const styles = StyleSheet.create({
  image: {
    width: 64,
    height: 64,
    backgroundColor: COLORS.placeholderColor,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  imagePlaceholderText: {
    fontSize: 18,
    fontWeight: "700",
  },
});
