import React, { FC, useCallback } from "react";
import { FlatList, StyleSheet } from "react-native";
import { shallowEqual, useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { ShoppingItem } from "../../../../types";
import { ShoppingItemView } from "../../../../components/ShoppingItemView";
import { COLORS, SCREENS } from "../../../../constants";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";

const mapStateToProps = (state: RootState): ShoppingItem[] => {
  const {
    shoppingList: { dataById, dataByMap },
  } = state;
  return dataById.map((id) => dataByMap[id]);
};

export const ShoppingListScreen: FC<NativeStackScreenProps<RootStackParamList, 'Shopping_list'>> = ({ navigation }) => {
  const shopingListData = useSelector(mapStateToProps, shallowEqual);

  const onItemPress = useCallback(
    (id: number) => {
      navigation.navigate(SCREENS.SHOPPING_LIST_STACK.SHOPPING_ITEM, {
        id,
      });
    },
    [navigation]
  );

  return (
    <FlatList
      style={styles.wrapper}
      data={shopingListData}
      keyExtractor={({ id }) => id.toString()}
      renderItem={({ item }) => (
        <ShoppingItemView {...item} onPress={() => onItemPress(item.id)} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 32,
  },
});
