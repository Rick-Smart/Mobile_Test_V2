import React from "react";
import { View, StyleSheet } from "react-native";
import ImageInput from "./ImageInput";

export default function ImageInputList({
  imageUris = [],
  onRemoveImage,
  onAddImage,
}) {
  return (
    <View style={styles.container}>
      {imageUris.map((uri) => (
        <View style={styles.image}>
          <ImageInput
            imageUri={uri}
            onChangeImage={() => onRemoveImage(uri)}
            key={uri}
          />
        </View>
      ))}
      <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  image: {
    marginRight: 5,
  },
});
