import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ShoppingListScreen } from "./screens/ShoppingList.screen";
import { SCREENS } from "../../../constants";

const Stack = createNativeStackNavigator();

export const ShoppingListNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={SCREENS.SHOPPING_LIST_STACK.SHOPPING_LIST}
      component={ShoppingListScreen}
    />
  </Stack.Navigator>
);
