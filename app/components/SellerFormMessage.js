import React from "react";
import { Alert, Keyboard } from "react-native";
import { Notifications } from "expo";
import * as Yup from "yup";

import { AppForm, AppFormField, SubmitButton } from "./forms";
import messagesApi from "../api/messages";

const validationSchema = Yup.object().shape({
  message: Yup.string().required().min(1).label("Message"),
});

function SellerFormMessage({ listing }) {
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
      body: "Your message was sent to the seller.",
      data: {
        _displayInForeGround: true,
      },
    });

    console.log(result.config.data);
  };

  return (
    <AppForm
      initialValues={{ message: "" }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <AppFormField
        maxLength={255}
        multiline
        name="message"
        numberOfLines={3}
        placeholder="Message..."
      />
      <SubmitButton title="Contact Seller" />
    </AppForm>
  );
}

export default SellerFormMessage;
