import React from "react";
import { Button, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Screen from "./app/components/Screen";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import AppText from "./app/components/AppText";
import OfflineNotice from "./app/components/OfflineNotice";

const Link = () => {
  const navigation = useNavigation();
  return (
    <Button title="Click" onPress={() => navigation.navigate("TweetDetails")} />
  );
};

const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweets</Text>
    <Button
      title="View Tweet"
      onPress={() => navigation.navigate("TweetDetails", { id: 1 })}
    />
  </Screen>
);

const TweetDetails = ({ route }) => (
  <Screen>
    <Text>Tweet Details</Text>
  </Screen>
);

const Account = () => (
  <Screen>
    <Text>Account</Text>
  </Screen>
);

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "dodgerblue" },
      headerTintColor: "white",
    }}
  >
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen
      name="TweetDetails"
      component={TweetDetails}
      options={({ route }) => ({ title: route.params.id })}
    />
  </Stack.Navigator>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: "tomato",
      activeTintColor: "white",
      inactiveBackgroundColor: "#eee",
      inactiveTintColor: "black",
    }}
  >
    <Tab.Screen name="Feed" component={Tweets} />
    <Tab.Screen name="Account" component={Account} />
  </Tab.Navigator>
);

export default function App() {
  // const demo = async () => {
  //   try {
  //     await AsyncStorage.setItem("person", JSON.stringify({ id: 1 }));
  //     const value = await AsyncStorage.getItem("person");
  //     const person = JSON.parse(value);
  //     console.log(person);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // demo();

  return (
    <>
    <OfflineNotice />
    <Screen>
      <NavigationContainer theme={navigationTheme}>
        {/* <AppNavigator /> */}
        <AuthNavigator />
      </NavigationContainer>
    </Screen>
    </>
  );
}
