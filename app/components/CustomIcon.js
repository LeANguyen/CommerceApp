import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function CustomIcon({
  _name,
  _size,
  _backgroundColor,
  _iconColor,
  _style,
  _bordered = false,
  _onTouchEnd
}) {
  return (
    <View
      style={[
        {
          width: _size,
          height: _size,
          borderRadius: _size / 2,
          backgroundColor: _backgroundColor,
          alignItems: "center",
          justifyContent: "center",
          borderWidth: _bordered === true ? 0.5 : 0,
          borderColor: colors.dim
        },
        _style
      ]}
      onTouchEnd={_onTouchEnd}
    >
      <MaterialCommunityIcons
        name={_name}
        size={_size / 1.5}
        color={_iconColor}
      ></MaterialCommunityIcons>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default CustomIcon;
