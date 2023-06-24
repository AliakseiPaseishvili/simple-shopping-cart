import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./store";

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Text>HelloApp</Text>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
