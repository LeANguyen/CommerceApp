import React from "react";
import {
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
  StyleSheet
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";

function CustomListItemAction({ _onPress, _style }) {
  return (
    <TouchableOpacity
      onPress={_onPress}
      style={{ backgroundColor: colors.secondaryLight }}
    >
      <View style={[styles.cellAction, _style]}>
        <MaterialCommunityIcons
          name="delete"
          size={50}
          color={"rgb(255, 255, 255)"}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cellAction: {
    width: 100,
    height: 100,
    backgroundColor: colors.dark,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default CustomListItemAction;
