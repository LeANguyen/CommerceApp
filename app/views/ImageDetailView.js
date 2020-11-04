import React from "react";
import { Image, View, StyleSheet, ScrollView } from "react-native";

import colors from "../config/colors";
import CustomViewContainer from "../components/CustomViewContainer";
import CustomIcon from "../components/CustomIcon";

function ViewImageView(prop) {
  return (
    <CustomViewContainer _style={styles.viewContainer}>
      <View style={styles.buttonContainer}>
        <View style={styles.closeButton}>
          <CustomIcon
            _name="keyboard-backspace"
            _size={50}
            _iconColor={colors.dim}
            _backgroundColor={colors.mainLight}
            _bordered={true}
          ></CustomIcon>
        </View>
        <View style={styles.deleteButton}>
          <CustomIcon
            _name="delete"
            _size={50}
            _iconColor={colors.dim}
            _backgroundColor={colors.mainLight}
            _bordered={true}
          ></CustomIcon>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/item1.jpg")}
          style={styles.image}
          resizeMode="contain"
        ></Image>
      </View>
    </CustomViewContainer>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    justifyContent: "center",
    padding: 0
  },
  buttonContainer: {
    flexDirection: "row",
    backgroundColor: colors.secondaryLight,
    width: "100%",
    flex: 1
  },
  imageContainer: {
    width: "100%",
    flex: 9,
    backgroundColor: "rgb(55, 55, 55)"
  },
  image: {
    width: "100%",
    flex: 1
  },
  closeButton: {
    margin: 10
  },
  deleteButton: {
    position: "absolute",
    margin: 10,
    right: 0
  }
});

export default ViewImageView;
