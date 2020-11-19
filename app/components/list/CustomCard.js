import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import colors from "../../config/colors";
import icons from "../../config/icons";
import CustomText from "../CustomText";
import CustomListItem from "./CustomListItem";
import { Fontisto } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ReadMore from "@fawazahmed/react-native-read-more";
import CustomIcon from "../CustomIcon";
import { Image } from "react-native-expo-image-cache";

const test_text =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

function CustomCard({ _item, _style, _onPress }) {
  return (
    <TouchableOpacity style={[styles.container, _style]} onPress={_onPress}>
      <Image
        style={styles.image}
        tint="light"
        preview={{ uri: _item.images[0].thumbnailUrl }}
        uri={_item.images[0].url}
      ></Image>
      {/* <Image style={styles.image} source={{ uri: _item.images[0].url }}></Image> */}
      <CustomText _style={styles.title} _text={_item.title}></CustomText>
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
          <CustomText
            _style={styles.subTitle}
            _text={"$" + _item.price}
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
        {!_item.description && (
          <CustomText
            _text="No Description"
            _style={{ color: colors.dim, fontSize: 12, margin: 0 }}
          ></CustomText>
        )}
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
          {test_text}
        </ReadMore>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: colors.dim,
    backgroundColor: colors.mainLight,
    marginVertical: 10,
    marginHorizontal: 20
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
