import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import CustomText from "../CustomText";
const PickerItem = ({ _text, _onPress }) => {
  return (
    <TouchableOpacity onPress={_onPress} style={styles.container}>
      <CustomText text={_text} _style={styles.text}></CustomText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "red",
    width: "100%"
  },
  text: {
    fontSize: 12,
    textAlign: "center"
  }
});

export default PickerItem;
