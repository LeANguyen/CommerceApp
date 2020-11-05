import React from "react";
import { useFormikContext } from "formik";

import CustomButton from "../CustomButton";

function SubmitButton({ _text }) {
  const { handleSubmit } = useFormikContext();

  return <CustomButton _onPress={handleSubmit} _text={_text} />;
}

export default SubmitButton;
