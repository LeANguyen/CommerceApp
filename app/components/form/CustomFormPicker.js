import React from "react";
import { useFormikContext } from "formik";

import CustomPicker from "../picker/CustomPicker";
import ErrorMessage from "./ErrorMessage";

function CustomFormPicker({ _items, _name, _placeholder }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <CustomPicker _items={_items} />
      <ErrorMessage _error={errors[_name]} visible={touched[_name]} />
    </>
  );
}

export default CustomFormPicker;
