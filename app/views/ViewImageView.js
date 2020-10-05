import React from "react";
import { Image, ImageBackground, View, StyleSheet } from "react-native";

function ViewImageView(prop) {
  return (
    <View style={styles.viewContainer}>
      <View style={styles.closeButton}></View>
      <View style={styles.deleteButton}></View>
      <View></View>
      <Image
        source={require("../assets/welcome_background.jpg")}
        style={styles.image}
        resizeMode="contain"
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center"
  },
  image: {
    width: "100%",
    height: "100%"
    // flex: 1
  },
  closeButton: {
    backgroundColor: "red",
    width: 50,
    height: 50,
    position: "absolute",
    top: 50,
    left: 50
  },
  deleteButton: {
    backgroundColor: "blue",
    width: 50,
    height: 50,
    position: "absolute",
    top: 50,
    right: 50
  }
});

export default ViewImageView;
