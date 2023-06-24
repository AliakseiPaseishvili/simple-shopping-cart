import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ShoppingListNavigator } from "../features/shopping-list";
import { SCREENS } from "../constants";
import { CartNavigator, TabLabel } from "../features/cart";

const Tab = createBottomTabNavigator();

export const BottomNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: () => null,
          tabBarLabelPosition: "beside-icon",
        }}
        component={ShoppingListNavigator}
        name={SCREENS.SHOPPING_LIST_STACK.INDEX}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: ({ color }) => <TabLabel color={color} />,
          tabBarIcon: () => null,
          tabBarLabelPosition: "beside-icon",
        }}
        component={CartNavigator}
        name={SCREENS.CART.INDEX}
      />
    </Tab.Navigator>
  );
};
