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
import { SubmitButton } from "../components/form";

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

function CreateItemView() {
  return (
    <CustomViewContainer>
      <CustomText
        _text="Create Item"
        _style={{ fontWeight: "bold" }}
      ></CustomText>
      <CustomImagePicker></CustomImagePicker>
      <Formik
        initialValues={{ name: "", price: "" }}
        onSubmit={values => console.log(values.email, values.password)}
        validationSchema={validationSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
          /* and other goodies */
        }) => (
          <>
            <CustomTextInput
              _placeholder="Item Name"
              _style={styles.input}
              _iconName={"tag"}
              _onChangeText={handleChange("name")}
              _keyboardType="email-address"
            ></CustomTextInput>
            <ErrorMessage _error={errors.name}></ErrorMessage>
            <CustomTextInput
              _placeholder="Price"
              _style={styles.input}
              _iconName={"cash-usd"}
              _onChangeText={handleChange("price")}
              _keyboardType="numeric"
            ></CustomTextInput>
            <ErrorMessage _error={errors.price}></ErrorMessage>
            <CustomTextInput
              _placeholder="Description"
              _style={styles.input}
              _iconName={"rename-box"}
              _multiline={true}
            ></CustomTextInput>
            <ErrorMessage _error={errors.password}></ErrorMessage>
            <CustomPicker
              _isSecure={true}
              _style={styles.input}
              _iconName={categories[0].icon}
              _title={categories[0].label}
              _items={categories}
            ></CustomPicker>
            <CustomButton
              _text="Create Item"
              _onPress={handleSubmit}
            ></CustomButton>
          </>
        )}
      </Formik>
    </CustomViewContainer>
  );
}

const styles = StyleSheet.create({});

export default CreateItemView;
