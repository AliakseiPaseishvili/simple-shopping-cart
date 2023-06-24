import { configureStore } from "@reduxjs/toolkit";

import { shoppingListRecuder } from "../features/shopping-list";
import { cartReducer } from "../features/cart";

export const store = configureStore({
  reducer: {
    shoppingList: shoppingListRecuder,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
