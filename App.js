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

// export default class Apple extends React.Component {
//   constructor() {
//     super();

//     this.state = { orientation: "" };
//   }
// }

export default function App() {
  const isPortrait = () => {
    const dim = Dimensions.get("screen");
    return dim.height >= dim.width;
  };

  Dimensions.addEventListener("change", () => {
    // this.setState({
    //     orientation: isPortrait() ? "portrait" : "landscape"
    //   });
    // console.log("BFF");
    console.log();
  });

  // console.log(Dimensions.get("screen"));
  // console.log(useDimensions());
  // console.log(useDeviceOrientation());

  // const orientation = useDeviceOrientation();
  // console.log(orientation);
  // console.log(orientation.landscape);

  const handlePress1 = () => {
    console.log("Pressed 1");
    console.log("Pressed 1.5");
  };

  const handlePress2 = () => {
    console.log("Pressed 2");
    console.log("Pressed 2.5");
  };

  const handlePress3 = () => {
    Alert.alert("My title", "My messagee", [
      { text: "Yes", onPress: handlePress1 },
      { text: "No" }
    ]);
  };

  const image1URI =
    "https://i.ebayimg.com/images/g/CUQAAOSw-nZTmzJB/s-l300.jpg";

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          width: "100%",
          // height: isPortrait() ? "30%" : "100%",
          flex: 1,
          backgroundColor: "dodgerblue"
        }}
      ></View>

      <Text onPress={handlePress1}>
        Open up App.js to start working on your apple!
      </Text>

      <TouchableOpacity onPress={handlePress2}>
        <Image source={require("./app/assets/icon.png")}></Image>
      </TouchableOpacity>

      <Image
        blurRadius={2}
        fadeDuration={3000}
        source={{
          width: 200,
          height: 200,
          uri: image1URI
        }}
      ></Image>

      <Button
        title={"KISS ME"}
        color={"purple"}
        onPress={handlePress3}
      ></Button>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center"
  }
});
