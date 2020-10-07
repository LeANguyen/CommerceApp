import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
  Button,
  Alert,
  View,
  SafeAreaView,
  Dimensions
} from "react-native";

import { Component } from "react";

import {
  useDimensions,
  useDeviceOrientation
} from "@react-native-community/hooks";

import WelcomeView from "./app/views/WelcomeView";
import ViewImageView from "./app/views/ViewImageView";
import CustomCard from "./app/components/CustomCard";
import colors from "./app/config/colors";

export default function App() {
  console.log("App started");
  // return <WelcomeView></WelcomeView>;
  // return <ViewImageView></ViewImageView>;
  return (
    <View style={styles.container}>
      <CustomCard
        title="Black, White and Pink Shoe - Model 1"
        subTitle="$100"
        image={require("./app/assets/item1.jpg")}
      ></CustomCard>
      <CustomCard
        title="Black, White and Pink Shoe - Model 2"
        subTitle="$200"
        image={require("./app/assets/item2.jpg")}
      ></CustomCard>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark,
    padding: 20,
    paddingTop: 40
    // margin: 20,
    // marginTop: 50
    // backgroundColor: "orange"
    // alignItems: "center"
    // justifyContent: "center"
  }
});
