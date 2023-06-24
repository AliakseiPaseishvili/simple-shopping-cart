import React, { FC } from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";
import { Button } from "../Button";
import { COLORS } from "../../constants";

type ControllersType = {
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
  wrapperStyle?: ViewStyle;
};

export const Controllers: FC<ControllersType> = ({
  count,
  onIncrease,
  onDecrease,
  wrapperStyle,
}) => (
  <View style={[styles.wrapper, wrapperStyle]}>
    <Button
      title="-"
      onPress={onDecrease}
      style={[styles.controller, styles.controllerButton]}
      titleStyle={styles.controllerButtonTitle}
    />
    <View style={[styles.controller, styles.controllerView]}>
      <Text>{count}</Text>
    </View>
    <Button
      title="+"
      onPress={onIncrease}
      style={[styles.controller, styles.controllerButton]}
      titleStyle={styles.controllerButtonTitle}
    />
  </View>
);

const styles = StyleSheet.create({
  controller: {
    width: 32,
    height: 32,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
  },
  controllerButton: {
    backgroundColor: COLORS.blue,
  },
  controllerButtonTitle: {
    color: COLORS.white,
    fontSize: 18,
  },
  controllerView: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.borderColor,
  },
});
