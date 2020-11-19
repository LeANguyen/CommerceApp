import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView } from "react-native";
import CustomViewContainer from "../components/CustomViewContainer";
import * as Yup from "yup";

import colors from "../config/colors";
import CustomPicker from "../components/picker/CustomPicker";

import listingsApi from "../api/listings";
import categoriesApi from "../api/categoriesApi";

import {
  CustomForm,
  CustomFormTextInput,
  SubmitButton
} from "../components/form";
import CustomFormImagePicker from "../components/form/CustomFormImagePicker";
import CustomIndicator from "../components/CustomIndicator";

import * as Permissions from "expo-permissions";

import useLocation from "../hooks/useLocation";
import UploadView from "./UploadView";
import useApi from "../hooks/useApi";

const categories = [
  {
    name: "Furniture",
    icon: "lamp",
    backgroundColor: colors.red,
    value: 1
  },
  {
    name: "Clothing",
    icon: "tshirt-v",
    backgroundColor: colors.green,
    value: 2
  },
  { name: "Vehicle", icon: "car", backgroundColor: colors.yellow, value: 3 },
  {
    name: "Game",
    icon: "gamepad-variant",
    backgroundColor: colors.blue,
    value: 4
  },
  { name: "Food", icon: "food", backgroundColor: colors.purple, value: 5 },
  {
    name: "Sport",
    icon: "basketball",
    backgroundColor: colors.orange,
    value: 6
  },
  {
    name: "Digital Media",
    icon: "movie",
    backgroundColor: colors.pink,
    value: 7
  },
  {
    name: "Book",
    icon: "book-open-page-variant",
    backgroundColor: colors.brown,
    value: 8
  },
  { name: "Other", icon: "star", backgroundColor: colors.grey, value: 9 }
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
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const location = useLocation();
  console.log(location);

  const getCategoriesApi = useApi(categoriesApi.getCategories);

  useEffect(() => {
    getCategoriesApi.request();
    console.log("OUCH OUCH OUCH");
    console.log(getCategoriesApi.data);
  }, []);

  const handleSubmit = async listing => {
    setProgress(0);
    setUploadVisible(true);
    const result = await listingsApi.addListing(
      { ...listing, location },
      progress => setProgress(progress)
    );

    if (!result.ok) {
      alert("There is a connection error!");
      setUploadVisible(false);
      return;
    }
    // alert("Success!");
  };

  return (
    <CustomViewContainer>
      <CustomIndicator
        _isVisible={getCategoriesApi.isLoading}
      ></CustomIndicator>
      <UploadView
        _visible={uploadVisible}
        _progress={progress}
        _onDone={() => setUploadVisible(false)}
      ></UploadView>
      <CustomForm
        _validationSchema={validationSchema}
        _initialValues={{ name: "", price: "", description: "", images: [] }}
        _onSubmit={handleSubmit}
      >
        <CustomFormImagePicker name={"images"}></CustomFormImagePicker>
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
          _multiline={true}
        ></CustomFormTextInput>
        {getCategoriesApi.data && (
          <CustomPicker
            _style={styles.input}
            _items={getCategoriesApi.data}
          ></CustomPicker>
        )}
        <SubmitButton _text="Create Item"></SubmitButton>
      </CustomForm>
    </CustomViewContainer>
  );
}

const styles = StyleSheet.create({});

export default CreateItemView;
