import React from "react";
import { View, StyleSheet } from "react-native";
import CustomViewContainer from "../components/CustomViewContainer";
import { WebView } from "react-native-webview";

function StreamDisplayView(props) {
  return (
    <CustomViewContainer style={styles.container}>
      <WebView
        source={{ uri: "https://infinite.red" }}
        style={{ marginTop: 20 }}
      />
      {/* <WebView
        style={styles.backgroundVideo}
        automaticallyAdjustContentInsets={true}
        scalesPageToFit={true}
        startInLoadingState={false}
        contentInset={{ top: 0, right: 0, left: 0, bottom: 0 }}
        scrollEnabled={false}
        source={{ html: this.formatHtml(), baseUrl: "/" }}
      /> */}
    </CustomViewContainer>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default StreamDisplayView;
