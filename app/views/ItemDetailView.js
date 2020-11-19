import React, { useState, useEffect } from "react";
import { StyleSheet, View, Image, FlatList, ScrollView } from "react-native";

import CustomCard from "../components/list/CustomCard";
import CustomText from "../components/CustomText";
import CustomViewContainer from "../components/CustomViewContainer";
import CustomListItem from "../components/list/CustomListItem";
import CustomListSeperator from "../components/list/CustomListSeperator";
import MessageForm from "../components/MessageForm";
import colors from "../config/colors";

import listingsApi from "../api/listings";
import listings from "../api/listings";

const items = [
  {
    name: "Black, White and Pink Shoe - Model 1",
    price: "$100",
    origin: "China",
    category: "Clothing",
    image: require("../assets/item1.jpg"),
    avatar: require("../assets/avatar1.jpg"),
    title: "Just a Generic User",
    subTitle: "10 Listings"
  },
  {
    name: "Black, White and Pink Shoe - Model 2",
    price: "$120",
    category: "Clothing",
    origin: "Vietnam",
    image: require("../assets/item2.jpg"),
    avatar: require("../assets/avatar2.jpg"),
    title: "The Legal Dealer",
    subTitle: "26 Listings"
  },
  {
    name: "2020 Vespa SPRINT 150 for sale",
    price: "$15000",
    category: "Vehicle",
    origin: "Japan",
    image: require("../assets/item3.jpeg"),
    avatar: require("../assets/item3.jpeg"),
    title: "Chicken Man",
    subTitle: "55 Listings"
  },
  {
    name: "Red Dead Redemption 2 CD",
    price: "$75",
    category: "Game",
    origin: "USA",
    image: require("../assets/item4.jpg"),
    avatar: require("../assets/avatar3.jpg"),
    title: "The Gay Tiger",
    subTitle: "25 Listings"
  },
  {
    name: "Apartment",
    price: "$750000",
    category: "Other",
    origin: "USA",
    image: require("../assets/item5.jpg"),
    avatar: require("../assets/avatar3.jpg"),
    title: "Long Bambo",
    subTitle: "15 Listings"
  }
];

function ItemListView({ route }) {
  item = route.params;
  return (
    // <CustomViewContainer _style={styles.viewContainer}>
    //   <FlatList
    //     data={items}
    //     keyExtractor={items => items.name}
    //     renderItem={({ item }) => (
    //       <>
    //         <CustomListItem
    //           _image={item.avatar}
    //           _title={item.title}
    //           _subTitle={item.subTitle}
    //         ></CustomListItem>
    //         <CustomCard _item={item} _style={styles.itemContainer}></CustomCard>
    //       </>
    //     )}
    //     style={styles.cardList}
    //     ItemSes
    //   ></FlatList>
    // </CustomViewContainer>

    <ScrollView style={styles.viewContainer}>
      <CustomListItem
        _image={require("../assets/avatar1.jpg")}
        _title="The Dealer in the Hood"
        _subTitle="5 Listings"
      ></CustomListItem>
      <CustomCard _item={item} style={styles.itemContainer}></CustomCard>
      <MessageForm></MessageForm>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    padding: 0
  },
  image: {
    width: "100%",
    height: "30%"
  },
  itemContainer: {
    marginVertical: 0,
    borderRadius: 0
    // marginBottom: 20
    // backgroundColor: colors.secondary
  }
});

export default ItemListView;
