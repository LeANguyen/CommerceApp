import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import WelcomView from "../views/WelcomeView";
import CreateAccountView from "../views/CreateAccountView";

const Stack = createStackNavigator();
const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"Welcome"}
        component={WelcomView}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name={"CreateAccount"}
        component={CreateAccountView}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default AuthNavigator;
