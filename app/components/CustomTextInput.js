import React from "react";
import { StyleSheet, TextInput } from "react-native";

import colors from "../config/colors";

function CustomTextInput() {
  return <TextInput style={styles.input}></TextInput>;
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.light,
    borderRadius: 5,

    margin: 10,
    height: 50,
    width: "100%"
  }
});

export default CustomTextInput;
