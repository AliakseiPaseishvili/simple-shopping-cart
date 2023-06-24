import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { COLORS } from "../../../../constants";
import { RootState } from "../../../../store";
import { shallowEqual, useSelector } from "react-redux";
import { CartItem } from "../../components/CartItem";

const mapStateToProps = (state: RootState) => {
  const {
    cart,
    shoppingList: { dataByMap },
  } = state;

  return Object.keys(cart).map((id) => dataByMap[id]);
};

export const CartScreen = () => {
  const items = useSelector(mapStateToProps, shallowEqual);
  return (
    <FlatList
      style={styles.wrapper}
      data={items}
      keyExtractor={({ id }) => id.toString()}
      renderItem={({item}) => <CartItem {...item} />}
    />
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 16,
  },
});
