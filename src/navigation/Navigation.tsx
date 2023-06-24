import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { ShoppingListNavigator } from "../features/shopping-list";

export const Navigation = () => (
  <NavigationContainer>
    <ShoppingListNavigator />
  </NavigationContainer>
);
