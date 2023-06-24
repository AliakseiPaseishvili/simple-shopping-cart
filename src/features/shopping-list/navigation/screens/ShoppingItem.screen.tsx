import React, { FC } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { shallowEqual, useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { ShoppingItem } from "../../../../types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import { COLORS } from "../../../../constants";
import { Image } from "../../../../components/Image";
import { TitleAndPrice } from "../../../../components/TitleAndPrice";
import { ItemControllers } from "../../components/ItemControllers";

const mapStateToProps =
  (id: number) =>
  (state: RootState): ShoppingItem => {
    const {
      shoppingList: { dataByMap },
    } = state;

    return dataByMap[id];
  };

export const ShoppingItemScreen: FC<
  NativeStackScreenProps<RootStackParamList, "Shopping_item">
> = ({ route }) => {
  const itemId = route.params.id;
  const shoppingItem = useSelector(mapStateToProps(itemId), shallowEqual);
  const { imageUrl, title, price, description } = shoppingItem;

  return (
    <>
      <ScrollView style={styles.wrapper}>
        <View style={styles.imageAndTitle}>
          <Image
            url={imageUrl}
            imageStyle={styles.image}
            placeholderTextStyle={styles.imagePlaceholderText}
          />
          <TitleAndPrice
            title={title}
            price={price}
            wrapperStyle={styles.titleAndPrice}
          />
        </View>
        <Text style={styles.description}>{description}</Text>
      </ScrollView>
      <ItemControllers id={itemId} />
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  imageAndTitle: {
    flexDirection: "row",
  },
  titleAndPrice: {
    justifyContent: "space-around",
  },
  image: {
    width: 128,
    height: 80,
  },
  imagePlaceholderText: {
    fontSize: 24,
  },
  description: {
    marginTop: 32,
  },
});
