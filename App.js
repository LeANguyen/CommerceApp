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

export default function App() {
  console.log("App started");
  // return <WelcomeView></WelcomeView>;
  // return <ViewImageView></ViewImageView>;
  return (
    <View style={styles.container}>
      <CustomCard
        title="AAA"
        subTitle="BBB"
        image={require("./app/assets/icon.png")}
      ></CustomCard>
      <CustomCard
        title="AAA"
        subTitle="BBB"
        image={require("./app/assets/welcome_background.jpg")}
      ></CustomCard>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    marginTop: 50,
    backgroundColor: "orange"
    // alignItems: "center"
    // justifyContent: "center"
  }
});
