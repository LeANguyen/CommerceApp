import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CreateItemView from "../views/CreateItemView";

import AccountNavigator from "./AccountNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import useNotifications from "../hooks/useNotifications";
import navigation from "../navigation/rootNavigation";
import FeedNavigator from "./FeedNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  useNotifications(notification => {
    console.log(notification);
    navigation.navigate("Account");
  });
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
        name="Feed"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name={"Add"}
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
