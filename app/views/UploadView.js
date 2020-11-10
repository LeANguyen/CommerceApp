import React from "react";
import { View, StyleSheet, Modal } from "react-native";
import CustomText from "../components/CustomText";
import colors from "../config/colors";
import * as Progress from "react-native-progress";
import LottieView from "lottie-react-native";

function UploadView({ _onDone, _progress = 0, _visible = true }) {
  return (
    <Modal visible={_visible}>
      <View style={styles.container}>
        {_progress == 1 && (
          <LottieView
            autoPlay
            loop={false}
            source={require("../assets/animations/done.json")}
            style={{ width: 150 }}
            onAnimationFinish={_onDone}
          ></LottieView>
        )}
        <Progress.Bar
          progress={_progress}
          color={colors.red}
          width={200}
        ></Progress.Bar>
        <CustomText _text={_progress * 100 + "%"}></CustomText>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: colors.secondaryLight
  }
});

export default UploadView;
