import React from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Image,
  ImageBackground,
  Text
} from "react-native";

import CustomButton from "../components/CustomButton";
import CustomText from "../components/CustomText";
import CustomTextInput from "../components/CustomTextInput";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function WelcomeView(prop) {
  return (
    <View style={styles.background}>
      <MaterialCommunityIcons
        style={styles.logoImage}
        name="square-inc-cash"
        size={100}
        color={colors.main}
      ></MaterialCommunityIcons>
      <CustomText
        style={styles.slogan}
        text="$ell What You Don't Need"
      ></CustomText>
      <CustomTextInput style={styles.input}></CustomTextInput>
      <CustomTextInput style={styles.input}></CustomTextInput>
      <CustomButton
        text="LOGIN"
        onPress={() => console.log("YOLO")}
      ></CustomButton>
      <View style={styles.registerContainer}>
        <CustomText
          style={styles.slogan}
          text="Don't Have An Account?"
        ></CustomText>
        <CustomButton
          text="REGISTER"
          onPress={() => console.log("YOLO")}
        ></CustomButton>
      </View>
      {/* <View style={styles.regButton}></View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.dark,
    padding: 20,
    paddingTop: 40
  },
  logoImage: {
    margin: 10
  },
  registerContainer: {
    // backgroundColor: "red",
    position: "absolute",
    bottom: 20,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center"
  }
});

export default WelcomeView;
