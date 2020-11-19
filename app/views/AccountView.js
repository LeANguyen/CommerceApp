import React, { useContext } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import CustomViewContainer from "../components/CustomViewContainer";
import CustomListItem from "../components/list/CustomListItem";
import CustomIcon from "../components/CustomIcon";
import colors from "../config/colors";
import CustomListSeperator from "../components/list/CustomListSeperator";
import AuthContext from "../auth/context";
import authStorage from "../auth/authStorage";
import useAuth from "../auth/useAuth";

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
  }
];

function AccountView({ navigation }) {
  const auth = useAuth();

  const handleLogout = () => {
    auth.logout();
  };

  return (
    <CustomViewContainer _style={styles.viewContainer}>
      <View style={styles.container}>
        <CustomListItem
          _title={auth.user.name}
          _subTitle={auth.user.email}
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
        <CustomListItem
          _title={"Log Out"}
          _iconName={"logout"}
          _onPress={() => {
            handleLogout();
          }}
        ></CustomListItem>
      </View>
    </CustomViewContainer>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    alignItems: "stretch",
    paddingTop: 0
  },
  container: {
    // marginVertical: 20
    margin: 0
  },
  menuList: {}
});

export default AccountView;
