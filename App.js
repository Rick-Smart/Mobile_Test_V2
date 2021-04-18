import React, { useState } from "react";
import { View, SafeAreaView, Text, TextInput, Switch } from "react-native";

import Screen from "./app/components/Screen";
import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";


export default function App() {
  const [isNew, setIsNew] = useState(false);

  return (
    <Screen>
      <AppPicker icon="apps" placeholder="Catagory" />
      <AppTextInput icon="email" placeholder="email" />
    </Screen>
  );
}
