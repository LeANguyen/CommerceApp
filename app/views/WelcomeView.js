import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Yup from "yup";

import CustomButton from "../components/CustomButton";
import CustomText from "../components/CustomText";
import CustomViewContainer from "../components/CustomViewContainer";

import authApi from "../api/auth";

import {
  CustomForm,
  CustomFormTextInput,
  SubmitButton
} from "../components/form";

import colors from "../config/colors";
import ErrorMessage from "../components/form/ErrorMessage";

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

function WelcomeView({ navigation }) {
  const [loginFailed, setLoginFailed] = useState(false);
  const handleSubmit = async (email, password) => {
    const result = await authApi.login(email, password);
    if (!result.ok) {
      setLoginFailed(true);
    }
  };

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
        _onSubmit={handleSubmit}
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
        <ErrorMessage
          _error={"Invalid email or password."}
          _isVisible={loginFailed}
        ></ErrorMessage>
        <SubmitButton _text="Create Item"></SubmitButton>
      </CustomForm>
      <View style={styles.registerContainer}>
        <CustomText
          _text="Don't Have An Account?"
          _style={{ textAlign: "center" }}
        ></CustomText>
        <CustomButton
          _text="Create Account"
          _onPress={() => {
            navigation.navigate("CreateAccount");
          }}
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
