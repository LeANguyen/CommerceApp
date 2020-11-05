import React from "react";
import { useFormikContext } from "formik";

import CustomTextInput from "../CustomTextInput";
import ErrorMessage from "./ErrorMessage";

function CustomFormTextInput({
  _name,
  _iconName,
  _isSecure,
  _keyboardType,
  _multiline,
  _placeholder
}) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

  return (
    <>
      <CustomTextInput
        // onBlur={() => setFieldTouched(_name)}
        _iconName={_iconName}
        _isSecure={_isSecure}
        _keyboardType={_keyboardType}
        _multiline={_multiline}
        _onChangeText={handleChange(_name)}
        _placeholder={_placeholder}
      />
      <ErrorMessage _error={errors[_name]} visible={touched[_name]} />
    </>
  );
}

export default CustomFormTextInput;
