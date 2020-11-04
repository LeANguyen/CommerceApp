import React from "react";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import Constants from "expo-constants";

import colors from "../config/colors";

function CustomViewContainer({ children, _style }) {
  return (
    <SafeAreaView style={[styles.screen, _style]}>
      {/* <ScrollView style={styles.scroll}>{children}</ScrollView> */}
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // width: "100%",
    // height: "100%",
    backgroundColor: colors.secondaryLight,
    alignItems: "center",

    padding: 20,
    paddingTop: Constants.statusBarHeight
    // paddingTop: 40
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
