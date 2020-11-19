import React from "react";
import { Alert, Keyboard } from "react-native";
import { Notifications } from "expo";
import * as Yup from "yup";

import { CustomForm, CustomFormTextInput, SubmitButton } from "./form";
import messagesApi from "../api/messagesApi";

function MessageForm({ listing }) {
  const handleSubmit = async ({ message }, { resetForm }) => {
    Keyboard.dismiss();

    const result = await messagesApi.send(message, listing.id);

    if (!result.ok) {
      console.log("Error", result);
      return Alert.alert("Error", "Could not send the message to the seller.");
    }

    resetForm();

    Notifications.presentLocalNotificationAsync({
      title: "Awesome!",
      body: "Your message was sent to the seller."
    });
  };

  return (
    <CustomForm
      _initialValues={{ message: "" }}
      _onSubmit={handleSubmit}
      _validationSchema={validationSchema}
    >
      <CustomFormTextInput
        _multiline
        _iconName={"chat-processing"}
        _name="message"
        _placeholder="Message..."
      />
      <SubmitButton _text="Contact Seller" />
    </CustomForm>
  );
}

const validationSchema = Yup.object().shape({
  message: Yup.string()
    .required()
    .min(1)
    .label("Message")
});

export default MessageForm;
