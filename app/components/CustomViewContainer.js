import React from "react";
import { StyleSheet, SafeAreaView, ScrollView, View } from "react-native";
import Constants from "expo-constants";

import colors from "../config/colors";

function CustomViewContainer({ children, _style }) {
  return (
    <SafeAreaView style={[styles.screen, _style]}>
      <View style={[styles.view, _style]}>{children}</View>
      {/* <ScrollView style={styles.scroll}>{children}</ScrollView> */}
      {/* {children} */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Constants.statusBarHeight
  },
  view: {
    flex: 1,
    alignItems: "stretch",
    backgroundColor: colors.secondaryLight
  },
  scroll: {
    width: "100%",
    height: "100%",
    padding: 20,
    // flex: 1,
    backgroundColor: colors.red
  }
});

export default CustomViewContainer;
