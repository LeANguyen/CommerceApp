import React from "react";
import { StyleSheet } from "react-native";
import CustomText from "../CustomText";
import colors from "../../config/colors";

function ErrorMessage({ _error, _isVisible }) {
  if (!_isVisible || !_error) {
    return null;
  }
  return <CustomText _text={_error} _style={styles.error}></CustomText>;
}

const styles = StyleSheet.create({
  error: { color: colors.red, fontSize: 10, margin: 0, textAlign: "center" }
});

export default ErrorMessage;
