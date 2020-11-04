import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  TouchableWithoutFeedback,
  TouchableHighlight,
  TouchableOpacity,
  Modal,
  FlatList
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../config/colors";
import CustomText from "../CustomText";
import CustomButton from "../CustomButton";
import CustomIcon from "../CustomIcon";
import CustomViewContainer from "../CustomViewContainer";
import CustomPickerItem from "./CustomPickerItem";
import CustomPickerItemWithIcon from "./CustomPickerItemWithIcon";
import CustomListSeperator from "../list/CustomListSeperator";
import { SwipeableListItem } from "react-native-swipeable-flat-list";

function CustomPicker({ _items }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [category, setCategory] = useState(_items[0].label);
  const [icon, setIcon] = useState(_items[0].icon);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => setModalVisible(true)}
    >
      <View style={styles.pickerContainer}>
        <MaterialCommunityIcons
          style={styles.icon}
          name={icon}
          size={30}
          color={colors.dim}
        ></MaterialCommunityIcons>
        <CustomText _style={styles.input} _text={category}></CustomText>
        <MaterialCommunityIcons
          style={styles.icon}
          name="chevron-down"
          size={30}
          color={colors.dim}
        ></MaterialCommunityIcons>
      </View>
      <Modal visible={modalVisible} animationType="slide">
        <CustomViewContainer _style={styles.modalContainer}>
          <CustomIcon
            _name="close"
            _iconColor={colors.dim}
            _backgroundColor={colors.secondaryLight}
            _size={30}
            _style={styles.closeIcon}
            _onTouchEnd={() => setModalVisible(false)}
            _bordered={true}
          ></CustomIcon>
          <FlatList
            style={{ marginTop: 30 }}
            data={_items}
            keyExtractor={_items => _items.value.toString()}
            numColumns={3}
            renderItem={({ item }) => (
              <CustomPickerItemWithIcon
                _text={item.label}
                _onPress={() => {
                  setModalVisible(false);
                  setCategory(item.label);
                  setIcon(item.icon);
                }}
                _icon={item.icon}
                _backgroundColor={colors.mainLight}
              ></CustomPickerItemWithIcon>
            )}
            ItemSeparatorComponent={() => {
              return (
                <CustomListSeperator
                  style={styles.listSeperator}
                ></CustomListSeperator>
              );
            }}
          ></FlatList>
        </CustomViewContainer>
      </Modal>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    margin: 10
  },
  pickerContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: colors.mainLight,
    borderRadius: 25,
    borderWidth: 0.5,
    borderColor: colors.dim
  },
  icon: {
    margin: 10
  },
  input: {
    margin: 0,
    color: colors.dim,
    flex: 1,
    fontSize: 12,
    fontWeight: "normal"
  },
  closeIcon: {
    position: "absolute",
    top: 10,
    right: 10
  },
  modalContainer: {
    alignItems: "stretch"
  },
  listSeperator: {
    margin: 10,
    backgroundColor: colors.secondaryLight
  }
});

export default CustomPicker;
