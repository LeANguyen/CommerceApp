import React from "react";
import { StyleSheet, View, Image, ImageBackground, Text } from "react-native";

import CustomButton from "../components/CustomButton";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function WelcomeView(prop) {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/welcome_background.jpg")}
    >
      <MaterialCommunityIcons
        style={styles.logoImage}
        name="square-inc-cash"
        size={100}
        color="white"
      ></MaterialCommunityIcons>
      <Text style={styles.slogan}>$ell What You Don't Need</Text>
      <View style={styles.buttonContainer}>
        <CustomButton
          title="LOGIN"
          onPress={() => console.log("YOLO")}
        ></CustomButton>
        <CustomButton
          title="REGISTER"
          onPress={() => console.log("YOLO")}
        ></CustomButton>
      </View>
      {/* <View style={styles.regButton}></View> */}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
    // backgroundColor: "gray"
  },
  logoImage: {
    position: "absolute",
    top: 100
  },
  slogan: {
    fontFamily: "",
    color: colors.white,
    position: "absolute",
    top: 250,
    fontSize: 15,
    fontWeight: "bold"
  },
  buttonContainer: {
    padding: 20,
    width: "100%"
  }
});

export default WelcomeView;
