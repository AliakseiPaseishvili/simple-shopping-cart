import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ShoppingListScreen } from "./screens/ShoppingList.screen";
import { ShoppingItemScreen } from "./screens/ShoppingItem.screen";
import { SCREENS } from "../../../constants";
import type { RootStackParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const ShoppingListNavigator = () => (
  <Stack.Navigator initialRouteName={SCREENS.SHOPPING_LIST_STACK.SHOPPING_LIST}>
    <Stack.Screen
      name={SCREENS.SHOPPING_LIST_STACK.SHOPPING_LIST}
      component={ShoppingListScreen}
    />
     <Stack.Screen
      name={SCREENS.SHOPPING_LIST_STACK.SHOPPING_ITEM}
      component={ShoppingItemScreen}
    />
  </Stack.Navigator>
);
