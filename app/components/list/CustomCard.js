import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

import colors from "../../config/colors";
import icons from "../../config/icons";
import CustomText from "../CustomText";
import CustomListItem from "./CustomListItem";
import { Fontisto } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ReadMore from "@fawazahmed/react-native-read-more";
import CustomIcon from "../CustomIcon";

const test_text1 =
  "facebook.github.io/react-native/docs/text#numberoflines. That should work, unless you have a very specific use case. And by the way, if you can share any specific example or code, that would really help";
const test_text2 =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

function CustomCard({ _item, _style }) {
  return (
    <View style={[styles.container, _style]}>
      <Image style={styles.image} source={_item.image}></Image>
      <CustomText _style={styles.title} _text={_item.name}></CustomText>
      <View style={styles.detailContainer}>
        <View style={styles.detailItem}>
          <CustomText
            _style={styles.subTitle}
            _text={"- Category:"}
          ></CustomText>
          <MaterialCommunityIcons
            style={styles.icon}
            name={icons[_item.category]}
            size={30}
            color={colors.dim}
          ></MaterialCommunityIcons>
          <CustomText
            _style={styles.subTitle}
            _text={_item.category}
          ></CustomText>
        </View>
        <View style={styles.detailItem}>
          <CustomText _style={styles.subTitle} _text={"- Price:"}></CustomText>
          <CustomText _style={styles.subTitle} _text={_item.price}></CustomText>
        </View>
        <View style={styles.detailItem}>
          <CustomText _style={styles.subTitle} _text={"- Origin:"}></CustomText>
          <CustomText
            _style={styles.subTitle}
            _text={_item.origin}
          ></CustomText>
        </View>
      </View>
      <View style={styles.descriptionContainer}>
        <CustomText
          _style={{
            margin: 0,
            color: colors.mainDark,
            fontWeight: "bold"
          }}
          _text={"Description:"}
        ></CustomText>
        <ReadMore
          animate={true}
          backgroundColor={colors.mainLight}
          numberOfLines={5}
          style={{
            color: colors.dim,
            fontSize: 12,
            fontFamily: Platform.OS === "android" ? "monospace" : "Avenir"
          }}
          seeMoreStyle={styles.seeMoreLess}
          seeLessStyle={styles.seeMoreLess}
        >
          {[test_text1, test_text1]}
        </ReadMore>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: colors.dim,
    backgroundColor: colors.mainLight,
    marginVertical: 10
  },
  icon: {
    // margin: 10
    // borderRadius: 0,
    // borderColor: colors.dim,
    // borderWidth: 0.5,
    // backgroundColor: colors.secondaryLight
    // position: "absolute",
    // right: 0,
    // margin: 0
  },
  detailContainer: {
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: colors.dim
  },
  detailItem: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  descriptionContainer: {
    padding: 10
  },
  image: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomWidth: 1,
    borderColor: colors.red,
    width: "100%",
    height: 300
  },
  title: {
    color: colors.mainDark,
    fontWeight: "bold"
  },
  subTitle: {
    fontSize: 12
  },
  subTitleDescription: {},
  seeMoreLess: {
    color: colors.green,
    fontSize: 12,
    fontFamily: Platform.OS === "android" ? "monospace" : "Avenir"
  }
});

export default CustomCard;
