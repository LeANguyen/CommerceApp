import React from "react";
import { View, StyleSheet } from "react-native";
import CustomImagePicker from "./CustomImagePicker";
import ErrorMessage from "../ErrorMessage";

import * as Yup from "yup";
import { Formik } from "formik";

function FormImagePicker(props) {
  return (
    <>
      <CustomImagePicker></CustomImagePicker>
      <ErrorMessage></ErrorMessage>
    </>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default FormImagePicker;
