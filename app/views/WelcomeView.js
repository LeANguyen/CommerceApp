import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

function WelcomeView(prop) {
  return (
    <View style={styles.viewContainer}>
      <ImageBackground
        source={require("../assets/welcome_background.jpg")}
        style={styles.background}
      >
        <Image
          style={styles.logoImage}
          source={require("../assets/logo.png")}
        ></Image>
        <Text style={styles.slogan}>Sell What You Don't Need</Text>
      </ImageBackground>
      <View style={styles.loginButton}></View>
      <View style={styles.regButton}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1
  },
  background: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  loginButton: {
    width: "100%",
    height: 50,
    backgroundColor: "orange"
  },
  regButton: {
    width: "100%",
    height: 50,
    backgroundColor: "black"
  },
  logoImage: {
    width: 100,
    height: 100,
    top: 75
  },
  slogan: {
    color: "white",
    top: 75,
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default WelcomeView;
