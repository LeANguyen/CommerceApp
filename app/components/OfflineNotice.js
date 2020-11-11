import React from "react";
import { View, StyleSheet } from "react-native";
import CustomText from "./CustomText";
import colors from "../config/colors";
import Constant from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";

function OfflineNotice(props) {
  const netInfo = useNetInfo();
  console.log(netInfo);
  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false) {
    return (
      <View style={styles.container}>
        <CustomText _text={"No Internet Connection"}></CustomText>
      </View>
    );
  } else {
    return null;
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.red,
    marginTop: Constant.statusBarHeight,
    alignItems: "center"
  }
});

export default OfflineNotice;
