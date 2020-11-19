import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";
import CustomViewContainer from "../components/CustomViewContainer";
import CustomCard from "../components/list/CustomCard";
import CustomText from "../components/CustomText";
import CustomListSeperator from "../components/list/CustomListSeperator";
import colors from "../config/colors";

import listingsApi from "../api/listings";
import CustomButton from "../components/CustomButton";
import CustomIndicator from "../components/CustomIndicator";
import useApi from "../hooks/useApi";
import { navigationRef } from "../navigation/rootNavigation";

function ListingView({ navigation }) {
  const getListingsApi = useApi(listingsApi.getListings);

  useEffect(() => {
    getListingsApi.request();
  }, []);

  return (
    <CustomViewContainer _style={styles.viewContainer}>
      {getListingsApi.error && (
        <>
          <CustomText
            _text="There is a connection error!"
            _style={{ textAlign: "center" }}
          ></CustomText>
          <CustomButton
            _text="Retry"
            _onPress={getListingsApi.request}
          ></CustomButton>
        </>
      )}
      <CustomIndicator _isVisible={getListingsApi.isLoading}></CustomIndicator>
      <FlatList
        data={getListingsApi.data}
        keyExtractor={itemList => itemList.name}
        renderItem={({ item }) => (
          <CustomCard
            _item={item}
            _onPress={() => navigation.navigate("ItemDetail", item)}
          ></CustomCard>
        )}
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
  viewContainer: {},
  cardList: {}
});

export default ListingView;
