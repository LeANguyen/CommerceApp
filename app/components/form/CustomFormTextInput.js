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
  _placeholder,
  _value
}) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

  return (
    <>
      <CustomTextInput
        _onBlur={() => setFieldTouched(_name)}
        _onChangeText={handleChange(_name)}
        _iconName={_iconName}
        _isSecure={_isSecure}
        _keyboardType={_keyboardType}
        _multiline={_multiline}
        _placeholder={_placeholder}
        _value={_value}
      />
      <ErrorMessage _error={errors[_name]} _isVisible={touched[_name]} />
    </>
  );
}

export default CustomFormTextInput;
