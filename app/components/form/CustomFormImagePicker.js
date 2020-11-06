import React, { useState } from "react";
import { useFormikContext } from "formik";
import { View, StyleSheet } from "react-native";
import CustomImagePicker from "../image_picker/CustomImagePicker";
import ErrorMessage from "./ErrorMessage";

function CustomFormImagePicker({ name }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const imageUris = values[name];
  const addImage = imageUri => {
    setFieldValue(name, [imageUri, ...imageUris]);
  };

  const deleteImage = imageUri => {
    setFieldValue(
      name,
      imageUris.filter(uri => uri !== imageUri)
    );
  };

  return (
    <>
      <CustomImagePicker
        _imageUris={imageUris}
        _onAddImage={addImage}
        _onDeleteImage={deleteImage}
      ></CustomImagePicker>
      <ErrorMessage
        _error={errors[name]}
        _isVisible={touched[name]}
      ></ErrorMessage>
    </>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default CustomFormImagePicker;
