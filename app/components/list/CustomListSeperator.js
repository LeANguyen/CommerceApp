import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../../config/colors";

function CustomListSeperator({ style }) {
  return <View style={[styles.seperator, style]}></View>;
}

const styles = StyleSheet.create({
  seperator: {
    width: "100%",
    height: 0.25,
    backgroundColor: colors.dim
  }
});

export default CustomListSeperator;
