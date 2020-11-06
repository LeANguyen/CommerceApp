import React from "react";
import { StyleSheet } from "react-native";
import colors from "./colors";
const styles = StyleSheet.create({});

const textStyles = StyleSheet.create({
  primary: {
    color: colors.mainDark,
    fontSize: 12,
    fontWeight: "bold",
    fontFamily: Platform.OS === "android" ? "monospace" : "Avenir"
  },
  secondary: {
    color: colors.dim,
    fontSize: 12,
    fontWeight: "normal",
    fontFamily: Platform.OS === "android" ? "monospace" : "Avenir",
    margin: 10
  }
});

const buttonStyles = StyleSheet.create({
  primary: {
    flex: 1,
    height: 70,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20
  },
  secondary: {}
});

export { styles, textStyles, buttonStyles };
