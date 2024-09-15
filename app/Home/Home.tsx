import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  Image,
} from "react-native";
import { Link } from "expo-router";
import SearchBar from "../Search/search-bar"; // Adjust the path as necessary
import axios from "axios";

export default function Home() {
  interface RestaurantCard {
    id: number;
    name: string;
    location: string;
    restaurant_image_url: string;
  }

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredData, setFilteredData] = useState<RestaurantCard[]>([]);
  const [restaurant_data, setRestaurantData] = useState<RestaurantCard[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchRestaurantList = async () => {
      try {
        const response = await axios.get(
          `http://192.168.0.160:8000/restaurants`
        );
        setRestaurantData(response.data);
      } catch (error) {
        console.error("Error fetching restaurant data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurantList();
  }, []);

  useEffect(() => {
    filterData();
  }, [searchQuery, restaurant_data]);

  const filterData = () => {
    const filtered = restaurant_data.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
  };

  // Render each restaurant
  const renderRestaurant = ({ item }: { item: RestaurantCard }) => (
    <View style={cardStyles.imageDimensions}>
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
              <Image
                source={{ uri: item.restaurant_image_url }} // Use the image URL from the data
                style={cardStyles.home_image_dimensions}
              />
              <View style={cardStyles.textContainer}>
                <Text style={cardStyles.nameTextStyle}>{item.name}</Text>
                <Text style={cardStyles.locationTextStyle}>
                  {item.location}
                </Text>
              </View>
            </View>
          </View>
        </Pressable>
      </Link>
    </View>
  );

  return (
    <View style={styles.safeview}>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={filteredData} // Pass the fetched restaurant data to FlatList
        renderItem={renderRestaurant} // Render each item using renderRestaurant
        keyExtractor={(item) => item.id.toString()} // Use id as the unique key for each restaurant
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
