import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SCREENS } from "../../../constants";
import { CartScreen } from "./screens/Cart.screen";

const Stack = createNativeStackNavigator();

export const CartNavigator = () => (
  <Stack.Navigator screenOptions={{ headerBackTitleVisible: false }}>
    <Stack.Screen name={SCREENS.CART.CART} component={CartScreen}  options={{ headerTitle: "Cart" }}/>
  </Stack.Navigator>
);
