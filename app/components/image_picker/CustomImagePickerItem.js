import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import colors from "../../config/colors";
import CustomIcon from "../CustomIcon";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function CustomImagePickerItem({ _imageUri, _onPress }) {
  var onPress = () => {};
  if (!_imageUri) {
    onPress = () => {
      this.setState({
        data: this.state.data.filter(item => item.id !== id)
      });
    };
  }

  return (
    <TouchableOpacity style={styles.container} onPress={_onPress}>
      {!_imageUri && (
        <CustomIcon
          _name={"camera-plus"}
          _iconColor={colors.dim}
          _size={100}
          _bordered={true}
        ></CustomIcon>
      )}
      {_imageUri && (
        <Image
          source={{ uri: _imageUri }}
          style={{ width: 100, height: 100, borderRadius: 10 }}
        ></Image>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.mainLight,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 100,
    margin: 10,
    marginHorizontal: 5
  }
});

export default CustomImagePickerItem;
