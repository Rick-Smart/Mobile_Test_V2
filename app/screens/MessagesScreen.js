import React, { useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";

import ListItem from "../components/lists/ListItem";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import Screen from "../components/Screen";
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";

const initalMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/logo-red.png"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/logo-red.png"),
  },
  {
    id: 3,
    title: "T3",
    description: "D3",
    image: require("../assets/logo-red.png"),
  },
];

export default function MessagesScreen() {
  const [messages, setMessages] = useState(initalMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
            onPress={() => console.log("Message Selected", item)}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() =>
          setMessages([
            {
              id: 3,
              title: "T3",
              description: "D3",
              image: require("../assets/logo-red.png"),
            },
          ])
        }
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
