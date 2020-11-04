import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

function CustomTextInput({
  _keyboardType,
  _placeholder,
  _isSecure = false,
  _iconName,
  _onChangeText,
  _multiline = false,
  _style
}) {
  return (
    <View style={[styles.container, _style]}>
      <MaterialCommunityIcons
        style={styles.icon}
        name={_iconName}
        size={30}
        color={colors.dim}
      ></MaterialCommunityIcons>
      <TextInput
        style={styles.text}
        placeholder={_placeholder}
        placeholderTextColor={colors.dim}
        clearButtonMode="always"
        secureTextEntry={_isSecure}
        keyboardType={_keyboardType}
        onChangeText={_onChangeText}
        multiline={_multiline}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    margin: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",

    backgroundColor: colors.mainLight,
    borderRadius: 25,
    borderWidth: 0.5,
    borderColor: colors.dim
  },
  icon: {
    margin: 10,
    marginRight: 0
  },
  text: {
    color: colors.mainDark,
    fontFamily: Platform.OS === "android" ? "monospace" : "Avenir",
    fontSize: 12,
    flex: 1,
    margin: 10
  }
});

export default CustomTextInput;
