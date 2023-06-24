import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { shallowEqual, useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { ShoppingItem } from "../../../../types";
import { ShoppingItemView } from "../../../../components/ShoppingItemView";
import { COLORS } from "../../../../constants";

const mapStateToProps = (state: RootState): ShoppingItem[] => {
  const {
    shoppingList: { dataById, dataByMap },
  } = state;
  return dataById.map((id) => dataByMap[id]);
};

export const ShoppingListScreen = () => {
  const shopingListData = useSelector(mapStateToProps, shallowEqual);

  return <FlatList
    style={styles.wrapper}
    data={shopingListData}
    keyExtractor={({ id }) => id.toString()}
    renderItem={({ item }) => <ShoppingItemView {...item} />}
  />;
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

