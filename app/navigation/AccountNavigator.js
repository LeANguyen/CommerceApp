import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import AccountView from "../views/AccountView";
import MessageListView from "../views/MessageListView";

const Stack = createStackNavigator();
const AccountNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={"Account"} component={AccountView}></Stack.Screen>
      <Stack.Screen
        name={"MessageList"}
        component={MessageListView}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default AccountNavigator;
