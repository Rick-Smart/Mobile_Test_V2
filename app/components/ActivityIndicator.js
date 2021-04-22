import React from "react";
import LottieView from "lottie-react-native";

export default function ActivityIndicator({ visible = false }) {
  if (!visible) return null;
  return (
    <LottieView
      autoPlay
      loop
      pause
      resume
      source={require("../assets/animations/loadingCat.json")}
    />
  );
}
