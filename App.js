import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
  Button,
  Alert,
  View,
  SafeAreaView,
  Dimensions,
  FlatList
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

import { Component } from "react";

import {
  useDimensions,
  useDeviceOrientation
} from "@react-native-community/hooks";

import WelcomeView from "./app/views/WelcomeView";
import ImageDetailView from "./app/views/ImageDetailView";
import ItemListView from "./app/views/ItemListView";
import CustomCard from "./app/components/list/CustomCard";
import MessageListView from "./app/views/MessageListView";
import AccountView from "./app/views/AccountView";
import ListingView from "./app/views/ListingView";
import CreateAccountView from "./app/views/CreateAccountView";
import CreateItemView from "./app/views/CreateItemView";
import CountryPickerView from "./app/views/CountryPickerView";

import colors from "./app/config/colors";

import CustomViewContainer from "./app/components/CustomViewContainer";
import CustomButton from "./app/components/CustomButton";
import CustomText from "./app/components/CustomText";
import CustomImagePicker from "./app/components/image_picker/CustomImagePicker";
import CustomImagePickerItem from "./app/components/image_picker/CustomImagePickerItem";

import {
  CustomForm,
  CustomFormTextInput,
  SubmitButton
} from "./app/components/form";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Tweets" component={Tweets}></Stack.Screen>
    <Stack.Screen name="TweetDetails" component={TweetDetails}></Stack.Screen>
  </Stack.Navigator>
);
const Tweets = () => (
  <CustomViewContainer _style={{ backgroundColor: colors.red }}>
    <CustomText _text="Tweets"></CustomText>
  </CustomViewContainer>
);

const TweetDetails = () => {
  <CustomViewContainer>
    <CustomText _text="TweetDetails"></CustomText>
  </CustomViewContainer>;
};

export default function App() {
  console.log("App started");

  return (
    <NavigationContainer>
      <StackNavigator></StackNavigator>
    </NavigationContainer>
  );
  // return <WelcomeView></WelcomeView>;
  // return <CreateAccountView></CreateAccountView>;
  // return <CreateItemView></CreateItemView>;
  // return <ImageDetailView></ImageDetailView>;
  // return <ItemListView></ItemListView>;
  // return <MessageListView></MessageListView>;
  // return <AccountView></AccountView>;
  // return <ListingView></ListingView>;
  // return <CountryPickerView></CountryPickerView>;
  // return <ItemTestView></ItemTestView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark,
    padding: 20,
    paddingTop: 40
    // margin: 20,
    // marginTop: 50
    // backgroundColor: "orange"
    // alignItems: "center"
    // justifyContent: "center"
  }
});
