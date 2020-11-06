import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Yup from "yup";
import { Formik } from "formik";

import CustomButton from "../components/CustomButton";
import CustomText from "../components/CustomText";
import CustomTextInput from "../components/CustomTextInput";
import CustomViewContainer from "../components/CustomViewContainer";
import ErrorMessage from "../components/ErrorMessage";

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
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={values => console.log(values.email, values.password)}
        validationSchema={validationSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
          /* and other goodies */
        }) => (
          <>
            <CustomTextInput
              _placeholder="Email"
              _iconName={"email"}
              _onChangeText={handleChange("email")}
              _keyboardType="email-address"
            ></CustomTextInput>
            <ErrorMessage _error={errors.email}></ErrorMessage>
            <CustomTextInput
              _placeholder="Password"
              _isSecure={true}
              _iconName={"lock-question"}
              _onChangeText={handleChange("password")}
            ></CustomTextInput>
            <ErrorMessage _error={errors.password}></ErrorMessage>
            <CustomButton _text="Log In" _onPress={handleSubmit}></CustomButton>
          </>
        )}
      </Formik>

      <View style={styles.registerContainer}>
        <CustomText
          _text="Don't Have An Account?"
          _style={{ textAlign: "center" }}
        ></CustomText>
        <CustomButton
          _text="Create Account"
          _onPress={() => console.log("Sign Up")}
        ></CustomButton>
        {/* <CustomButton
          text="Sign Up With Google"
          onPress={() => console.log("YOLO")}
          style={styles.googleButton}
        ></CustomButton>
        <CustomButton
          text="Sign Up With Facebook"
          onPress={() => console.log("YOLO")}
          style={styles.facebookButton}
        ></CustomButton> */}
      </View>
      {/* <View style={styles.regButton}></View> */}
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
