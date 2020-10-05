import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

import colors from "../config/colors";

function CustomCard({ title, subTitle, image }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image}></Image>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.text}>{subTitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: "red",
    margin: 10
  },
  image: {
    width: "100%",
    height: 200
  },
  text: {
    fontWeight: "bold",
    color: colors.white,
    fontSize: 15
  }
});

export default CustomCard;
