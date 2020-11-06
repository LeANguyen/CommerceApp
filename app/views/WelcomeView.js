import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Yup from "yup";

import CustomButton from "../components/CustomButton";
import CustomText from "../components/CustomText";
import CustomViewContainer from "../components/CustomViewContainer";

import {
  CustomForm,
  CustomFormTextInput,
  SubmitButton
} from "../components/form";

import colors from "../config/colors";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required()
    .email()
    .label("Email"),
  password: Yup.string()
    .required()
    .min(4)
    .label("Password")
});

function WelcomeView(prop) {
  return (
    <CustomViewContainer _style={styles.viewContainer}>
      <View style={styles.logoContainer}>
        <MaterialCommunityIcons
          name="cash-usd"
          size={100}
          color={colors.red}
        ></MaterialCommunityIcons>
      </View>
      <CustomText
        _text="$ell What You Don't Need"
        _style={{ textAlign: "center" }}
      ></CustomText>
      <CustomForm
        _validationSchema={validationSchema}
        _initialValues={{ email: "", password: "" }}
        _onSubmit={values => console.log(values)}
      >
        <CustomFormTextInput
          _name={"email"}
          _placeholder="Email"
          _iconName={"email"}
          _keyboardType="email-address"
        ></CustomFormTextInput>
        <CustomFormTextInput
          _name={"password"}
          _placeholder="Password"
          _isSecure={true}
          _iconName={"lock-question"}
        ></CustomFormTextInput>
        <SubmitButton _text="Create Item"></SubmitButton>
      </CustomForm>
      <View style={styles.registerContainer}>
        <CustomText
          _text="Don't Have An Account?"
          _style={{ textAlign: "center" }}
        ></CustomText>
        <CustomButton
          _text="Create Account"
          _onPress={() => console.log("Sign Up")}
        ></CustomButton>
      </View>
    </CustomViewContainer>
  );
}

const styles = StyleSheet.create({
  viewContainer: {},
  logoContainer: {
    alignItems: "center"
  },
  registerContainer: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "stretch",
    backgroundColor: colors.mainLight
  },
  googleButton: {
    backgroundColor: "darkred"
  },
  facebookButton: {
    backgroundColor: "darkblue"
  }
});

export default WelcomeView;
