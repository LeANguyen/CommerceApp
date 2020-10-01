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

export default function App() {
  console.log("App started");
  return <WelcomeView />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center"
  }
});
