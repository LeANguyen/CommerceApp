import React, { useState } from "react";
import { StyleSheet } from "react-native";
import CustomViewContainer from "../components/CustomViewContainer";
import CustomText from "../components/CustomText";
import colors from "../config/colors";

import * as Yup from "yup";

import authApi from "../api/auth";

import {
  CustomForm,
  CustomFormTextInput,
  SubmitButton
} from "../components/form";
import ErrorMessage from "../components/form/ErrorMessage";
import useAuth from "../auth/useAuth";
import useApi from "../hooks/useApi";
import CustomIndicator from "../components/CustomIndicator";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required()
    .label("Name"),
  email: Yup.string()
    .required()
    .email()
    .label("Email"),
  password: Yup.string()
    .required()
    .min(4)
    .label("Password")
});

function CreateAccountView() {
  const auth = useAuth();
  const registerApi = useApi(authApi.register);
  const loginApi = useApi(authApi.login);

  const [error, setError] = useState();

  const handleSubmit = async userInfo => {
    const result = await registerApi.request(userInfo);

    if (!result.ok) {
      if (result.data) {
        setError(result.data.error);
      } else {
        setError("An unexpected error happened!");
      }
      return;
    }

    const loginResult = await loginApi.request(
      userInfo.email,
      userInfo.password
    );
    auth.login(loginResult.data);
  };

  return (
    <CustomViewContainer _style={styles.viewContainer}>
      <CustomForm
        _validationSchema={validationSchema}
        _initialValues={{ name: "", email: "", password: "" }}
        _onSubmit={handleSubmit}
      >
        <CustomFormTextInput
          _name={"name"}
          _placeholder="Name"
          _iconName={"account"}
        ></CustomFormTextInput>
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
        {error && (
          <ErrorMessage _error={error} _isVisible={error}></ErrorMessage>
        )}
        <CustomIndicator
          _isVisible={registerApi.isLoading || loginApi.isLoading}
        ></CustomIndicator>
        <SubmitButton _text="Create Item"></SubmitButton>
      </CustomForm>
    </CustomViewContainer>
  );
}

const styles = StyleSheet.create({
  viewContainer: {}
});

export default CreateAccountView;
