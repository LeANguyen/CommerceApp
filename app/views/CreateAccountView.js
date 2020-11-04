import React, { useState } from "react";
import { StyleSheet } from "react-native";
import CustomViewContainer from "../components/CustomViewContainer";
import CustomTextInput from "../components/CustomTextInput";
import CustomButton from "../components/CustomButton";
import CustomText from "../components/CustomText";
import ErrorMessage from "../components/ErrorMessage";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

import * as Yup from "yup";
import { Formik } from "formik";

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
      <CustomText _text="Create Account"></CustomText>
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
            <CustomButton
              _text="Create Account"
              _onPress={handleSubmit}
            ></CustomButton>
          </>
        )}
      </Formik>
    </CustomViewContainer>
  );
}

const styles = StyleSheet.create({
  viewContainer: {}
});

export default CreateAccountView;
