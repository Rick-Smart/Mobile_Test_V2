import React, { useState } from "react";
import { View, SafeAreaView, Text, TextInput } from "react-native";

import Screen from "./app/components/Screen";
import AppTextInput from "./app/components/AppTextInput"

export default function App() {


  return (
    <Screen>
      <AppTextInput placeholder="First Name" icon="email"/>
    </Screen>
  );
}
