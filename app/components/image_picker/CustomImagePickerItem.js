import React, { useEffect } from "react";
import { View, StyleSheet, Image, TouchableOpacity, Alert } from "react-native";
import colors from "../../config/colors";
import CustomIcon from "../CustomIcon";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

function CustomImagePickerItem({ _imageUri, _onChangeImage }) {
  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!granted) alert("You need to enable permission to access the library.");
  };

  const addImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images
        // quality: 0.5
      });
      if (!result.cancelled) {
        _onChangeImage(result.uri);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteImage = imageUri => {
    Alert.alert("Delete", "Are you sure you want to delete this image?", [
      { text: "Yes", onPress: () => _onChangeImage(imageUri) },
      { text: "No" }
    ]);
  };

  const onPress = () => {
    if (!_imageUri) {
      addImage();
    } else {
      deleteImage(_imageUri);
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
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
