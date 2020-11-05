import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import CustomViewContainer from "../components/CustomViewContainer";
import * as Yup from "yup";
import { Formik } from "formik";

import colors from "../config/colors";
import CustomButton from "../components/CustomButton";
import CustomText from "../components/CustomText";
import CustomTextInput from "../components/CustomTextInput";
import ErrorMessage from "../components/ErrorMessage";
import CustomPicker from "../components/picker/CustomPicker";
import CustomImagePicker from "../components/image_picker/CustomImagePicker";

import {
  CustomForm,
  CustomFormTextInput,
  SubmitButton
} from "../components/form";

const categories = [
  {
    label: "Furniture",
    icon: "lamp",
    backgroundColor: colors.red,
    value: 1
  },
  {
    label: "Clothing",
    icon: "tshirt-v",
    backgroundColor: colors.green,
    value: 2
  },
  { label: "Vehicle", icon: "car", backgroundColor: colors.yellow, value: 3 },
  {
    label: "Game",
    icon: "gamepad-variant",
    backgroundColor: colors.blue,
    value: 4
  },
  { label: "Food", icon: "food", backgroundColor: colors.purple, value: 5 },
  {
    label: "Sport",
    icon: "basketball",
    backgroundColor: colors.orange,
    value: 6
  },
  {
    label: "Digital Media",
    icon: "movie",
    backgroundColor: colors.pink,
    value: 7
  },
  {
    label: "Book",
    icon: "book-open-page-variant",
    backgroundColor: colors.brown,
    value: 8
  },
  { label: "Other", icon: "star", backgroundColor: colors.grey, value: 9 }
];

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required()
    .label("Item name"),
  price: Yup.string()
    .required()
    .min(2)
    .max(6)
    .label("Price"),
  images: Yup.array().min(1, "Please select at least one image.")
});

function TestItemView() {
  return (
    <CustomViewContainer>
      <CustomForm
        _validationSchema={validationSchema}
        _initialValues={{ name: "", price: "", description: "" }}
        _onSubmit={values => console.log(values)}
      >
        <CustomText _text={"Create Item"}></CustomText>
        <CustomFormTextInput
          _placeholder="Item Name"
          _style={styles.input}
          _iconName={"tag"}
          _keyboardType="email-address"
          _name={"name"}
        ></CustomFormTextInput>
        <CustomFormTextInput
          _placeholder="Price"
          _style={styles.input}
          _iconName={"cash-usd"}
          _keyboardType="numeric"
          _name={"price"}
        ></CustomFormTextInput>
        <CustomFormTextInput
          _placeholder="Description"
          _style={styles.input}
          _iconName={"rename-box"}
          _keyboardType="email-address"
          _name={"description"}
        ></CustomFormTextInput>
        <SubmitButton _text="Create Item"></SubmitButton>
      </CustomForm>
    </CustomViewContainer>
  );
}

const styles = StyleSheet.create({});

export default TestItemView;
