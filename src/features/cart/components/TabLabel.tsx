import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { shallowEqual, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { COLORS } from "../../../constants";

const mapStateToProps = (state: RootState) => {
  const { cart } = state;

  return Object.values(cart).reduce((sum, value) => sum + value, 0);
};

type TabLabelProps = {
  color: string;
};

export const TabLabel: FC<TabLabelProps> = ({ color }) => {
  const count = useSelector(mapStateToProps, shallowEqual);
  return (
    <View>
      <View style={styles.countComponent}>
        <Text style={styles.countText}>{count}</Text>
      </View>
      <Text style={{ color }}>Cart</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  countComponent: {
    position: "absolute",
    right: -10,
    top: -5,
    width: 14,
    height: 14,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.red,
  },
  countText: {
    fontSize: 12,
    color: COLORS.white,
  },
});
