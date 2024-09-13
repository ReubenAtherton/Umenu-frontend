import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function SearchBar({ searchQuery, setSearchQuery }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.searchInput}>
        <FontAwesome
          name="search"
          size={20}
          color="black"
          style={{ alignSelf: "center", paddingHorizontal: "2%" }}
        />
        <TextInput
          style={{ flex: 1 }}
          placeholder="Search Restaurants"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    justifyContent: "center",
    width: "90%",
  },
  searchInput: {
    flexDirection: "row",
    padding: 4,
    width: "100%",
    borderColor: "gray",
    height: 35,
    borderWidth: 1,
    borderRadius: 10,
  },
});
