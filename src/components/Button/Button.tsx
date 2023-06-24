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
  disabledStyle?: TouchableOpacityProps["style"];
};

export const Button: FC<ButtonProps> = ({
  children,
  titleStyle,
  title,
  disabledStyle,
  style,
  disabled,
  ...props
}) => (
  <TouchableOpacity
    {...props}
    style={[style, disabled && disabledStyle]}
    disabled={disabled}
  >
    {title ? <Text style={titleStyle}>{title}</Text> : children}
  </TouchableOpacity>
);
