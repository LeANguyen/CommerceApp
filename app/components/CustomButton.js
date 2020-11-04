import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import colors from "../config/colors";
import CustomText from "../components/CustomText";

function CustomButton({ _text, _onPress, _style }) {
  return (
    <TouchableOpacity style={[styles.container, _style]} onPress={_onPress}>
      <CustomText _style={styles.text} _text={_text}></CustomText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.red,
    justifyContent: "center",
    alignItems: "center",

    margin: 10,
    width: "100%",
    height: 50,
    borderRadius: 25
  },
  text: {
    color: "rgb(255, 255, 255)",
    fontSize: 12,
    fontWeight: "bold"
  }
});

export default CustomButton;
