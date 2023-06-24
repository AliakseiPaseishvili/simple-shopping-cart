import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { ShoppingListNavigator } from "../features/shopping-list/navigation/ShoppingList.navigator";

export const Navigation = () => (
  <NavigationContainer>
    <ShoppingListNavigator />
  </NavigationContainer>
);
