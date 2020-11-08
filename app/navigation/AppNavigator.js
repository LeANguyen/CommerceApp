import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AccountView from "../views/AccountView";
import CreateItemView from "../views/CreateItemView";
import ItemListView from "../views/ItemListView";
import ListingView from "../views/ListingView";

import AccountNavigator from "./AccountNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import CreateItemButton from "./CreateItemButton";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: colors.mainLight,
        activeTintColor: colors.red,
        inactiveBackgroundColor: colors.mainLight,
        inactiveTintColor: colors.dim,
        style: { height: 60 },
        labelStyle: {
          marginBottom: 10
        }
      }}
    >
      <Tab.Screen
        name={"Listing"}
        component={ListingView}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons
                name="home"
                size={size}
                color={color}
              ></MaterialCommunityIcons>
            );
          }
        }}
      ></Tab.Screen>
      <Tab.Screen
        name={"CreateItem"}
        component={CreateItemView}
        options={{
          //   tabBarButton: () => {
          //     return <CreateItemButton></CreateItemButton>;
          //   },
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons
                name="plus-circle"
                size={size}
                color={color}
              ></MaterialCommunityIcons>
            );
          }
        }}
      ></Tab.Screen>

      <Tab.Screen
        name={"Account"}
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons
                name="account"
                size={size}
                color={color}
              ></MaterialCommunityIcons>
            );
          }
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};
export default AppNavigator;
