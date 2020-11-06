import React, { useState } from "react";
import { View, StyleSheet, FlatList, Image, Alert } from "react-native";
import CustomImagePickerItem from "./CustomImagePickerItem";
import CustomListSeperator from "../list/CustomListSeperator";
import CustomText from "../CustomText";
import colors from "../../config/colors";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { seagreen } from "color-name";

function CustomImagePicker({ _imageUris, _onAddImage, _onDeleteImage }) {
  // const [images, setImages] = useState([]);

  // const addImage = async () => {
  //   try {
  //     const result = await ImagePicker.launchImageLibraryAsync({
  //       mediaTypes: ImagePicker.MediaTypeOptions.Images
  //       // quality: 0.5
  //     });
  //     if (!result.cancelled) {
  //       setImages([{ uri: result.uri }, ...images]);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const deleteImage = imageUri => {
  //   Alert.alert("Delete", "Are you sure you want to delete this image?", [
  //     {
  //       text: "OK",
  //       onPress: () => {
  //         // const subImages = images;
  //         setImages(images.filter(item => item.uri !== imageUri));
  //       }
  //     },
  //     {
  //       text: "Cancel",
  //       onPress: () => console.log("Cancel Pressed"),
  //       style: "cancel"
  //     }
  //   ]);
  // };

  return (
    <View style={styles.container}>
      <CustomImagePickerItem
        _onChangeImage={_onAddImage}
        // _onPress={_onAddImage}
      ></CustomImagePickerItem>
      <FlatList
        data={_imageUris}
        keyExtractor={_imageUris => _imageUris}
        horizontal={true}
        renderItem={({ item }) => (
          <CustomImagePickerItem
            _imageUri={item}
            _onChangeImage={_onDeleteImage}
            // _onPress={_onDeleteImage}
          ></CustomImagePickerItem>
        )}
        style={styles.menuList}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.mainLight,
    marginBottom: 10,
    borderWidth: 0.5,
    borderColor: colors.dim,
    flexDirection: "row",
    paddingHorizontal: 5
  },
  listSeperator: {
    margin: 10,
    backgroundColor: colors.secondaryLight
  }
});

export default CustomImagePicker;
