import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../config/colors";

function CustomText({ text }) {
  return <Text style={styles.text}>{text}</Text>;
}

const styles = StyleSheet.create({
  text: {
    // borderWidth: 1,
    // borderColor: colors.light,
    fontWeight: "bold",
    color: colors.light,
    fontSize: 15,
    margin: 10
  }
});

export default CustomText;
