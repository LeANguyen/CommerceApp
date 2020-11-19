import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ItemListView from "../views/ItemListView";
import ItemDetailView from "../views/ItemDetailView";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: true }}>
    <Stack.Screen name="ItemList" component={ItemListView} />
    <Stack.Screen name="ItemDetail" component={ItemDetailView} />
    {/* <Stack.Screen name="ItemDetail" component={ItemDetailView} /> */}
  </Stack.Navigator>
);

export default FeedNavigator;
