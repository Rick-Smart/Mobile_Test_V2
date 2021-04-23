import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import {
  AppForm,
  AppFormField,
  SubmitButton,
  AppFormPicker,
} from "../components/forms";
import Screen from "../components/Screen";
import CategoryPickerItem from "../components/CategoryPickerItem";
import FormImagePicker from "../components/forms/FormImagePicker";
import listingsApi from "../api/listings";
import useLocation from "../hooks/useLocation";
import UploadScreen from "./UploadScreen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().min(1).max(10000).required().label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image."),
});

const categories = [
  {
    label: "Furniure",
    value: 1,
    backgroundColor: "red",
    icon: "table-furniture",
  },
  { label: "Clothing", value: 2, backgroundColor: "green", icon: "tshirt-v" },
  { label: "Cameras", value: 3, backgroundColor: "blue", icon: "camera" },
  { label: "Vehicles", value: 4, backgroundColor: "brown", icon: "car" },
  { label: "Shoes", value: 5, backgroundColor: "orange", icon: "shoe-heel" },
  {
    label: "Games",
    value: 6,
    backgroundColor: "purple",
    icon: "gamepad-square",
  },
  {
    label: "Books",
    value: 7,
    backgroundColor: "gold",
    icon: "book-open-page-variant",
  },
  { label: "Tech", value: 9, backgroundColor: "silver", icon: "laptop-mac" },
  { label: "Bikes", value: 8, backgroundColor: "pink", icon: "bike" },
];

export default function ListingEditScreen() {
  const location = useLocation();
  const [upLoadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (listing) => {
    setProgress(0);
    setUploadVisible(true);
    const result = await listingsApi.addListing(
      { ...listing, location },
      (progress) => setProgress(progress)
    );
    

    if (!result.ok){
      setUploadVisible(false);
      return alert("Could not save the listing");
    }

    
  };

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <UploadScreen onDone={()=> setUploadVisible(false)} progress={progress} visible={upLoadVisible} />
      <AppForm
        initialValues={{
          title: "",
          price: "",
          category: null,
          description: "",
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width="50%"
        />
        <AppFormPicker
          items={categories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="75%"
        />
        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
