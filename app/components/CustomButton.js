import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../config/colors";

function CustomButton({ text, onPress, width }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.main,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,

    margin: 10,
    width: "100%",
    height: 50
  },
  text: {
    fontWeight: "bold",
    color: colors.dark,
    fontSize: 15
  }
});

export default CustomButton;
