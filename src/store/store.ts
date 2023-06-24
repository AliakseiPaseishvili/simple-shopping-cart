import { configureStore } from "@reduxjs/toolkit";

import { shoppingListRecuder } from "../features/shopping-list";

export const store = configureStore({
  reducer: {
  shoppingList: shoppingListRecuder,
  }
});
