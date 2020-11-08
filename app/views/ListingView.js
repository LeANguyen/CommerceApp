import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";
import CustomViewContainer from "../components/CustomViewContainer";
import CustomCard from "../components/list/CustomCard";
import CustomText from "../components/CustomText";
import CustomListSeperator from "../components/list/CustomListSeperator";
import colors from "../config/colors";

import listingsApi from "../api/listings";
import CustomButton from "../components/CustomButton";

const items = [
  {
    name: "Black, White and Pink Shoe - Model 1",
    price: "$100",
    origin: "China",
    category: "Clothing",
    image: require("../assets/item1.jpg")
  },
  {
    name: "Black, White and Pink Shoe - Model 2",
    price: "$120",
    category: "Clothing",
    origin: "Vietnam",
    image: require("../assets/item2.jpg")
  },
  {
    name: "2020 Vespa SPRINT 150",
    price: "$15000",
    category: "Vehicle",
    origin: "Japan",
    image: require("../assets/item3.jpeg")
  },
  {
    name: "Red Dead Redemption 2 CD",
    price: "$75",
    category: "Game",
    origin: "USA",
    image: require("../assets/item4.jpg")
  },
  {
    name: "Apartment",
    price: "$750000",
    category: "Other",
    origin: "USA",
    image: require("../assets/item5.jpg")
  }
];

function ListingView(props) {
  const [itemList, setItemList] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    getItemList();
  }, []);

  const getItemList = async () => {
    const response = await listingsApi.getListings();
    if (!response.ok) {
      return setError(true);
    }
    setError(false);
    setItemList(response.data);
  };

  return (
    <CustomViewContainer style={styles.viewContainer}>
      {error && (
        <>
          <CustomText _text="There is a connection error!"></CustomText>
          <CustomButton _text="Retry" _onPress={getItemList}></CustomButton>
        </>
      )}
      <FlatList
        data={itemList}
        keyExtractor={itemList => itemList.name}
        renderItem={({ item }) => <CustomCard _item={item}></CustomCard>}
        style={styles.cardList}
        // ItemSeparatorComponent={() => {
        //   return (
        //     <CustomListSeperator
        //       style={styles.listSeperator}
        //     ></CustomListSeperator>
        //   );
        // }}
      ></FlatList>
    </CustomViewContainer>
  );
}
const styles = StyleSheet.create({
  viewContainer: {
    // backgroundColor: colors.red
  },
  cardList: {}
});

export default ListingView;
