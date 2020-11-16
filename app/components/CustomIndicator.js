import React from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

function CustomIndicator({ _isVisible = true }) {
  if (!_isVisible) {
    return null;
  }
  return (
    // <></>
    <View style={styles.container}>
      <LottieView
        autoPlay
        loop
        source={require("../assets/animations/loader.json")}
      ></LottieView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    zIndex: 1,
    opacity: 0.5,
    position: "absolute"
  }
});

export default CustomIndicator;
