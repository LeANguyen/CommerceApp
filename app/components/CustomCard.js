import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

import colors from "../config/colors";
import CustomText from "../components/CustomText";

function CustomCard({ title, subTitle, image }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image}></Image>
      <CustomText style={styles.title} text={title}></CustomText>
      <CustomText style={styles.subTitle} text={subTitle}></CustomText>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    // borderWidth: 5,
    // borderColor: colors.light,
    borderRadius: 10,
    backgroundColor: colors.secondary,
    margin: 10
  },
  image: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: "100%",
    height: 200
  }
  // title: {
  //   fontWeight: "bold",
  //   color: colors.light,
  //   fontSize: 15
  // },
  // subTitle: {
  //   color: colors.main,
  //   fontSize: 15
  // }
});

export default CustomCard;
