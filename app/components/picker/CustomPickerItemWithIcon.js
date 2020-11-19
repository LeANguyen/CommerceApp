import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import CustomIcon from "../CustomIcon";
import CustomText from "../CustomText";
import colors from "../../config/colors";

function CustomPickerItemWithIcon({
  _text,
  _onPress,
  _icon,
  _backgroundColor
}) {
  return (
    <TouchableOpacity onPress={_onPress} style={styles.container}>
      <CustomIcon
        _name={_icon}
        _iconColor={"rgb(255, 255, 255)"}
        _backgroundColor={_backgroundColor}
        _size={80}
      ></CustomIcon>
      <CustomText _text={_text} _style={styles.text}></CustomText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "33%",
    alignItems: "center",
    marginVertical: 10
  },
  text: {
    fontSize: 12,
    textAlign: "center"
  }
});

export default CustomPickerItemWithIcon;
