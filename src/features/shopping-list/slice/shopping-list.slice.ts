import { createSlice } from "@reduxjs/toolkit";
import { ShoppingItemMap } from "../../../types";
import { SHOPPING_LIST_DATA } from "../../../constants";
import { getDataIdArray, getMapData } from "../utils";

export interface ShoppingList {
  dataById: number[];
  dataByMap: ShoppingItemMap;
}

const initialState: ShoppingList = {
  dataById: getDataIdArray(SHOPPING_LIST_DATA),
  dataByMap: getMapData(SHOPPING_LIST_DATA),
};

export const shoppingListSlice = createSlice({
  name: 'shoppingList',
  initialState,
  reducers: {
  }
});

export default shoppingListSlice.reducer;
