import React from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Image
} from "react-native";

import colors from "../../config/colors";
import CustomText from "../CustomText";
import CustomIcon from "../CustomIcon";

function CustomCell({ style, _title, _subTitle, _iconName, _image, _onPress }) {
  console.log(_iconName);
  return (
    <TouchableOpacity
      _onPress={_onPress}
      style={[{ backgroundColor: colors.secondaryLight }]}
    >
      <View style={[styles.container, style]}>
        <View style={styles.imageContainer}>
          {_iconName && (
            <CustomIcon
              _name={_iconName}
              _size={50}
              _backgroundColor={colors.red}
              _iconColor={"rgb(255, 255, 255)"}
            ></CustomIcon>
          )}
          {_image && <Image style={styles.image} source={_image}></Image>}
        </View>
        <View style={styles.textContainer}>
          <CustomText _style={styles.title} _text={_title}></CustomText>
          {_subTitle && (
            <CustomText _style={styles.subTitle} _text={_subTitle}></CustomText>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.mainLight
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35
  },
  imageContainer: {
    // margin: 10
    padding: 10,
    // backgroundColor: colors.red,
    justifyContent: "center",
    alignContent: "center"
  },
  textContainer: {
    marginHorizontal: 10,
    justifyContent: "center",
    alignContent: "center"
  },
  title: {
    margin: 0,
    color: colors.mainDark,
    fontSize: 12,
    fontWeight: "bold"
  },
  subTitle: {
    margin: 0,
    color: colors.dim,
    fontSize: 12
  }
});

export default CustomCell;
