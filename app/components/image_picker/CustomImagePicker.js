import React, { useState } from "react";
import { View, StyleSheet, FlatList, Image, Alert } from "react-native";
import CustomImagePickerItem from "./CustomImagePickerItem";
import CustomListSeperator from "../list/CustomListSeperator";
import CustomText from "../CustomText";
import colors from "../../config/colors";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { seagreen } from "color-name";

function CustomImagePicker(props) {
  const [images, setImages] = useState([]);

  const space = () => {
    return (
      <View
        style={{ height: 50, width: 10, backgroundColor: colors.mainLight }}
      />
    );
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5
      });
      if (!result.cancelled) {
        setImages([...images, { uri: result.uri }].reverse());
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteImage = imageUri => {
    Alert.alert("Delete", "Are you sure you want to delete this image?", [
      {
        text: "OK",
        onPress: () => {
          // const subImages = images;
          setImages(images.filter(item => item.uri !== imageUri));
        }
      },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      }
    ]);
  };

  return (
    <View style={styles.container}>
      <CustomImagePickerItem
        _onPress={() => {
          selectImage();
        }}
      ></CustomImagePickerItem>
      <FlatList
        data={images}
        keyExtractor={images => images.uri}
        horizontal={true}
        renderItem={({ item }) => (
          <CustomImagePickerItem
            _imageUri={item.uri}
            _onPress={() => {
              deleteImage(item.uri);
            }}
          ></CustomImagePickerItem>
        )}
        style={styles.menuList}
        // ItemSeparatorComponent={space}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: colors.mainLight,
    margin: 10,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: colors.dim,
    // alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  listSeperator: {
    margin: 10,
    backgroundColor: colors.secondaryLight
  }
});

export default CustomImagePicker;
