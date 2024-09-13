import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import { Link } from "expo-router";
import SearchBar from "../Search/search-bar"; // Adjust the path as necessary
import { data } from "../Data/new_data"; // Adjust the path as necessary

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    filterData();
  }, [searchQuery]);

  const filterData = () => {
    const filtered = data.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <View style={styles.safeview}>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={filteredData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Link
            href={{
              pathname: "./Restaurant/restaurant",
              params: {
                id: item.id,
              },
            }}
            asChild
          >
            <Pressable>
              <View style={cardStyles.imageCard}>
                <View style={cardStyles.imageDimensions}>
                  {item.source(cardStyles.home_image_dimensions)}
                </View>
                <View style={cardStyles.textContainer}>
                  <Text style={cardStyles.nameTextStyle}>{item.name}</Text>
                  <Text style={cardStyles.locationTextStyle}>
                    {item.location}
                  </Text>
                </View>
              </View>
            </Pressable>
          </Link>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  safeview: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    flex: 1,
    paddingTop: 60,
  },
});

const cardStyles = StyleSheet.create({
  imageCard: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 10,
    overflow: "hidden",
    marginTop: 20,
    flexDirection: "column",
  },
  imageDimensions: {},
  textContainer: {
    margin: 10,
  },
  nameTextStyle: {
    fontSize: 16,
    fontWeight: "500",
  },
  locationTextStyle: {
    color: "rgba(0, 0, 0, 0.6)",
    marginVertical: 5,
  },
  home_image_dimensions: {
    height: 150,
    width: 330,
    resizeMode: "cover",
  },
});
