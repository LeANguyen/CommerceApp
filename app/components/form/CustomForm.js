import React from "react";
import { Formik } from "formik";

function CustomForm({
  _initialValues,
  _onSubmit,
  _validationSchema,
  children
}) {
  return (
    <Formik
      initialValues={_initialValues}
      onSubmit={_onSubmit}
      validationSchema={_validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
}

export default CustomForm;
