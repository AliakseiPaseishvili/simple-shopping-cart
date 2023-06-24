import { createSlice } from "@reduxjs/toolkit";
import { ShoppingItem, ShoppingItemMap } from "../../../types";

export interface ShoppingList {
  data: ShoppingItem[];
  dataById: number[];
  dataByMap: ShoppingItemMap;
}

const initialState: ShoppingList = {
  data: [],
  dataById: [],
  dataByMap: {},
};

export const shoppingListSlice = createSlice({
  name: 'shoppingList',
  initialState,
  reducers: {
  }
});

export default shoppingListSlice.reducer;
