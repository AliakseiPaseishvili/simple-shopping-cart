import React, { FC } from "react";
import {
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

type ButtonProps = TouchableOpacityProps & {
  title?: string;
  titleStyle?: TextStyle;
};

export const Button: FC<ButtonProps> = ({
  children,
  titleStyle,
  title,
  ...props
}) => (
  <TouchableOpacity {...props}>
    {title ? <Text style={titleStyle}>{title}</Text> : children}
  </TouchableOpacity>
);
