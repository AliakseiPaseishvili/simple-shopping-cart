import React, { FC } from "react";
import { ShoppingItemView } from "../../../components/ShoppingItemView";
import { ShoppingItem } from "../../../types";
import { Controllers } from "../../../components/Controllers";
import { RootState } from "../../../store";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet } from "react-native";
import { decreaseByAmount, increaseByAmount } from "../slice/cart.slice";

const mapStateToProps = (id: number) => (state: RootState) => {
  const { cart } = state;

  return cart[id];
};

export const CartItem: FC<ShoppingItem> = (props) => {
  const id = props.id;
  const dispatch = useDispatch();
  const count = useSelector(mapStateToProps(id));

  return (
    <ShoppingItemView
      {...props}
      actions={
        <Controllers
          count={count}
          wrapperStyle={styles.controllers}
          onIncrease={() => dispatch(increaseByAmount({ id, count: 1 }))}
          onDecrease={() => dispatch(decreaseByAmount({ id, count: 1 }))}
        />
      }
    />
  );
};

const styles = StyleSheet.create({
  controllers: {
    flexDirection: "column-reverse",
    alignSelf: "flex-end",
  },
});
