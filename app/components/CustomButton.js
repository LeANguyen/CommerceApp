import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../config/colors";

function CustomButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    borderRadius: 25,
    margin: 10
  },
  text: {
    fontWeight: "bold",
    color: colors.white,
    fontSize: 15
  }
});

export default CustomButton;
