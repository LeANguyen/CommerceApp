import React, { useEffect } from "react";
import { FlatList, StyleSheet, View, ScrollView } from "react-native";
import colors from "../config/colors";
import CustomListItem from "../components/list/CustomListItem";
import Constants from "expo-constants";
import CustomViewContainer from "../components/CustomViewContainer";
import CustomListSeperator from "../components/list/CustomListSeperator";
import CustomListItemAction from "../components/list/CustomListItemAction";
import { SwipeableFlatList } from "react-native-swipeable-flat-list";
import { LogBox } from "react-native";
import CustomText from "../components/CustomText";
import CustomIcon from "../components/CustomIcon";
import useApi from "../hooks/useApi";
import messagesApi from "../api/messagesApi";
import CustomIndicator from "../components/CustomIndicator";

LogBox.ignoreLogs([
  "Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`"
]);

const messages = [
  {
    id: 1,
    title: "T1",
    description: "T1 suck",
    image: require("../assets/avatar1.jpg")
  },
  {
    id: 2,
    title: "T2",
    description: "T12 suck",
    image: require("../assets/avatar2.jpg")
  },
  {
    id: 3,
    title: "T2",
    description: "T12 suck",
    image: require("../assets/avatar3.jpg")
  },
  {
    id: 4,
    title: "T2",
    description: "T12 suck",
    image: require("../assets/avatar1.jpg")
  },
  {
    id: 5,
    title: "T2",
    description: "T12 suck",
    image: require("../assets/avatar2.jpg")
  },
  {
    id: 6,
    title: "T2",
    description: "T12 suck",
    image: require("../assets/avatar3.jpg")
  },
  {
    id: 7,
    title: "T2",
    description: "T12 suck",
    image: require("../assets/avatar1.jpg")
  },
  {
    id: 8,
    title: "T2",
    description: "T12 suck",
    image: require("../assets/avatar2.jpg")
  },
  {
    id: 9,
    title: "T2",
    description: "T12 suck",
    image: require("../assets/avatar3.jpg")
  },
  {
    id: 10,
    title: "T2",
    description: "T12 suck",
    image: require("../assets/avatar3.jpg")
  }
];

function MessageListView(prop) {
  const getMessagesApi = useApi(messagesApi.getMessages);

  useEffect(() => {
    console.log("GETING MESSAGE");
    const result = getMessagesApi.request();
    console.log(result);
  }, []);

  return (
    <CustomViewContainer _style={styles.viewContainer}>
      {/* <CustomIndicator _isVisible={getMessagesApi.isLoading}></CustomIndicator> */}
      <SwipeableFlatList
        data={messages}
        keyExtractor={messages => messages.id.toString()}
        renderItem={({ item }) => (
          <CustomListItem
            style={styles.messageListItem}
            _title={"AAA"}
            _subTitle={"AAA"}
            _image={require("../assets/avatar3.jpg")}
            _onPress={() => {
              alert("AAA");
              console.log(item);
            }}
          ></CustomListItem>
        )}
        renderRight={({ item }) => (
          <View style={{ width: 90, height: 90 }}>
            <CustomListItemAction
              _style={styles.rightAction}
              _onPress={() => console.log("AAA")}
            ></CustomListItemAction>
          </View>
        )}
        ItemSeparatorComponent={() => {
          return (
            <CustomListSeperator
              style={styles.listSeperator}
            ></CustomListSeperator>
          );
        }}
        style={styles.messageList}
      ></SwipeableFlatList>
    </CustomViewContainer>
  );
}

const styles = StyleSheet.create({
  viewContainer: {},
  messageList: {
    backgroundColor: colors.secondaryLight,
    marginHorizontal: 20
  },
  messageListItem: {
    height: 90,
    borderRadius: 10,
    borderWidth: 0.5,
    alignItems: "center",
    borderColor: colors.dim
  },
  listSeperator: {
    backgroundColor: colors.secondaryLight,
    margin: 10
  },
  rightAction: {
    width: 90,
    height: 90,
    borderRadius: 10,
    backgroundColor: colors.red
  }
});

export default MessageListView;
