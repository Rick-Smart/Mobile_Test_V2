import React, { useState } from "react";
import { View, SafeAreaView, Text, TextInput, Switch } from "react-native";

import Screen from "./app/components/Screen";
import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothes", value: 2 },
  { label: "Auto", value: 3 },
];

export default function App() {
  const [category, setCategory] = useState();

  return (
    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        items={categories}
        icon="apps"
        placeholder="Catagory"
      />
      <AppTextInput icon="email" placeholder="email" />
    </Screen>
  );
}
