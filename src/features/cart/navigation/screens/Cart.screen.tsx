import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { COLORS } from "../../../../constants";
import { RootState } from "../../../../store";
import { shallowEqual, useSelector } from "react-redux";
import { CartItem } from "../../components/CartItem";
import { CartSum } from "../../components/CartSum";

const mapStateToProps = (state: RootState) => {
  const {
    cart,
    shoppingList: { dataByMap },
  } = state;

  const items = Object.keys(cart).map((id) => dataByMap[id]);
  const sum = items.length
    ? items
        .map(({ id, price }) => cart[id] * price)
        .reduce((fullSum, sum) => fullSum + sum, 0)
    : 0;

  return {
    items,
    sum,
  };
};

export const CartScreen = () => {
  const { items, sum } = useSelector(mapStateToProps, shallowEqual);
  return (
    <>
      <FlatList
        style={styles.wrapper}
        data={items}
        keyExtractor={({ id }) => id.toString()}
        renderItem={({ item }) => <CartItem {...item} />}
      />
      <CartSum sum={sum} />
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 16,
  },
});
