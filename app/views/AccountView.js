import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import CustomViewContainer from "../components/CustomViewContainer";
import CustomListItem from "../components/list/CustomListItem";
import CustomIcon from "../components/CustomIcon";
import colors from "../config/colors";
import CustomListSeperator from "../components/list/CustomListSeperator";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      size: 70,
      backgroundColor: colors.blue
    },
    targetView: ""
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      size: 70,
      backgroundColor: colors.green
    },
    targetView: "MessageList"
  },
  {
    title: "Log Out",
    icon: {
      name: "logout",
      size: 70,
      backgroundColor: colors.red
    },
    targetView: ""
  }
];

function AccountView({ navigation }) {
  return (
    <CustomViewContainer _style={styles.viewContainer}>
      <View style={styles.container}>
        <CustomListItem
          _title="The Orange Cart"
          _subTitle="Buy Low & Sell High"
          _image={require("../assets/avatar3.jpg")}
        ></CustomListItem>
      </View>

      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={menuItems => menuItems.title}
          renderItem={({ item }) => (
            <CustomListItem
              _title={item.title}
              _iconName={item.icon.name}
              _onPress={() => {
                navigation.navigate(item.targetView);
              }}
            ></CustomListItem>
          )}
          style={styles.menuList}
        ></FlatList>
      </View>
    </CustomViewContainer>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    alignItems: "stretch",
    padding: 0
  },
  container: {
    marginVertical: 20
  },
  menuList: {}
});

export default AccountView;
