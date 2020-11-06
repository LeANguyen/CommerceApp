import React, { useState } from "react";
import { StyleSheet } from "react-native";
import CustomViewContainer from "../components/CustomViewContainer";
import CustomText from "../components/CustomText";
import colors from "../config/colors";

import * as Yup from "yup";

import {
  CustomForm,
  CustomFormTextInput,
  SubmitButton
} from "../components/form";

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

function CreateAccountView() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <CustomViewContainer _style={styles.viewContainer}>
      <CustomText
        _text="Create Account"
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
    </CustomViewContainer>
  );
}

const styles = StyleSheet.create({
  viewContainer: {}
});

export default CreateAccountView;
