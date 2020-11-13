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
import jwtDecode from "jwt-decode";
import { AppLoading } from "expo";

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
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/authStorage";

// STACK STACK STACK STACK STACK STACK
const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: colors.red },
      headerTintColor: "rgb(255, 255, 255)"
    }}
  >
    <Stack.Screen name="Tweets" component={Tweets}></Stack.Screen>
    <Stack.Screen
      name="TweetDetails"
      component={TweetDetails}
      options={({ route }) => ({
        title: route.params.id,
        headerStyle: { backgroundColor: colors.red },
        headerTintColor: "rgb(255, 255, 255)"
      })}
    ></Stack.Screen>
  </Stack.Navigator>
);

const Link = () => {
  const navigation = useNavigation();
  return (
    <CustomButton
      _text="Go Go"
      _onPress={() => navigation.navigate("TweetDetails", { id: 1 })}
    ></CustomButton>
  );
};

const Tweets = ({ navigation }) => (
  <CustomViewContainer>
    <CustomText _text="Tweets"></CustomText>
    <Link></Link>
  </CustomViewContainer>
);

const TweetDetails = ({ route }) => (
  <CustomViewContainer>
    <CustomText _text={"Tweet Details " + route.params.id}></CustomText>
  </CustomViewContainer>
);
// STACK STACK STACK STACK STACK STACK

// TAB TAB TAB TAB TAB TAB TAB
const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: colors.red,
        activeTintColor: "white",
        inactiveBackgroundColor: colors.mainLight,
        inactiveTintColor: colors.mainDark
      }}
    >
      <Tab.Screen
        name="Tweet"
        component={StackNavigator}
        options={{
          tabBarIcon: ({ size, color }) => {
            return (
              <MaterialCommunityIcons
                name="email"
                size={size}
                color={color}
              ></MaterialCommunityIcons>
            );
          }
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => {
            return (
              <MaterialCommunityIcons
                name="tag"
                size={size}
                color={color}
              ></MaterialCommunityIcons>
            );
          }
        }}
      />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  );
}

const Home = ({ navigation }) => (
  <CustomViewContainer>
    <CustomText _text="Home"></CustomText>
  </CustomViewContainer>
);

const Setting = ({ route }) => (
  <CustomViewContainer>
    <CustomText _text={"Setting"}></CustomText>
  </CustomViewContainer>
);

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);
  console.log("App started");

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (!user) return;
    setUser(user);
  };

  // useEffect(() => {
  //   restoreToken();
  // }, []);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={restoreUser}
        onFinish={() => setIsReady(true)}
      ></AppLoading>
    );
  }

  return (
    // <NavigationContainer>
    //   <StackNavigator></StackNavigator>
    // </NavigationContainer>

    // <NavigationContainer>
    //   <MyTabs></MyTabs>
    // </NavigationContainer>

    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator></AppNavigator> : <AuthNavigator></AuthNavigator>}
      </NavigationContainer>
    </AuthContext.Provider>

    // <>
    //   <OfflineNotice></OfflineNotice>
    //   <NavigationContainer>
    //     <AppNavigator></AppNavigator>
    //   </NavigationContainer>
    // </>
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
