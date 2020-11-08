import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function CreateItemButton({ _onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={_onPress}>
      <MaterialCommunityIcons
        name="plus"
        color={"white"}
        size={60}
      ></MaterialCommunityIcons>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.red,
    width: 80,
    height: 80,
    borderRadius: 40,
    borderColor: colors.mainDark,
    borderWidth: 10,
    bottom: 20,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default CreateItemButton;
