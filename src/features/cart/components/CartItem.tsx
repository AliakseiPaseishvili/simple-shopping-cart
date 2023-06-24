import React, { FC } from "react";
import { ShoppingItemView } from "../../../components/ShoppingItemView";
import { ShoppingItem } from "../../../types";

export const CartItem: FC<ShoppingItem> = (props) => {
  
  return <ShoppingItemView {...props} />;
};
