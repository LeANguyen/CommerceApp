import React from "react";
import {
  StyleSheet,
  Text,
  Platform,
  View,
  TouchableOpacity
} from "react-native";

import colors from "../config/colors";
import { textStyles } from "../config/styles";

function CustomText({ _text, _style, _numberOfLines }) {
  return (
    <Text style={[textStyles.secondary, _style]} numberOfLines={_numberOfLines}>
      {_text}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: Platform.OS === "android" ? "monospace" : "Avenir",
    color: colors.dim,
    fontSize: 12,
    margin: 10
  }
});

export default CustomText;
