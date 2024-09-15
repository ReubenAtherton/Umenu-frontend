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
          style={{ flex: 1, fontSize: 17 }}
          placeholder="Search Umenu"
          placeholderTextColor={"rgba(0, 0, 0, 0.5)"}
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginVertical: 10,
    marginBottom: 20,
    marginTop: 10,
    justifyContent: "center",
    width: "90%",
  },
  searchInput: {
    flexDirection: "row",
    padding: 10,
    width: "100%",
    borderColor: "rgba(0, 0, 0, 0.08)",
    height: 50,
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    borderWidth: 1,
    borderRadius: 15,
  },
});
