import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  Image,
  ScrollView,
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

  // Filter restaurants based on the search query
  const filterData = () => {
    const filtered = restaurant_data.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
  };

  // Render each restaurant card (for both lists)
  const renderRestaurant = ({ item }: { item: RestaurantCard }) => (
    <View style={cardStyles.cardContainer}>
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
            <Image
              source={{ uri: item.restaurant_image_url }} // Use the image URL from the data
              style={cardStyles.home_image_dimensions}
            />
            <View style={cardStyles.textContainer}>
              <Text style={cardStyles.nameTextStyle}>{item.name}</Text>
              <Text style={cardStyles.locationTextStyle}>{item.location}</Text>
            </View>
          </View>
        </Pressable>
      </Link>
    </View>
  );

  return (
    <View style={styles.safeview}>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {searchQuery !== "" && (
        <FlatList
          data={filteredData} // Show filtered data when a query is present
          renderItem={renderRestaurant} // Render each search result
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      )}
      {searchQuery === "" && (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{}}
        >
          <Text className="font-psemibold" style={cardStyles.courseTitle}>
            Our Recommendations
          </Text>
          <FlatList
            horizontal
            contentContainerStyle={styles.flatListContainer}
            showsHorizontalScrollIndicator={false}
            data={restaurant_data} // Pass the original restaurant data
            renderItem={renderRestaurant} // Render each item using renderRestaurant
            keyExtractor={(item) => item.id.toString()}
            pagingEnabled
            snapToAlignment="start"
            snapToInterval={360}
            decelerationRate="fast"
          />
          <Text className="font-psemibold" style={cardStyles.courseTitle}>
            Top Reviews
          </Text>
          <FlatList
            horizontal
            contentContainerStyle={styles.flatListContainer}
            showsHorizontalScrollIndicator={false}
            data={restaurant_data} // Pass the original restaurant data
            renderItem={renderRestaurant} // Render each item using renderRestaurant
            keyExtractor={(item) => item.id.toString()}
            pagingEnabled
            snapToAlignment="start"
            snapToInterval={360}
            decelerationRate="fast"
          />
          <Text className="font-psemibold" style={cardStyles.courseTitle}>
            Nearby
          </Text>
          <FlatList
            horizontal
            contentContainerStyle={styles.flatListContainer}
            showsHorizontalScrollIndicator={false}
            data={restaurant_data} // Pass the original restaurant data
            renderItem={renderRestaurant} // Render each item using renderRestaurant
            keyExtractor={(item) => item.id.toString()}
            pagingEnabled
            snapToAlignment="start"
            snapToInterval={360}
            decelerationRate="fast"
          />
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  safeview: {
    alignItems: "center",
    backgroundColor: "#F8F8F8",
    flex: 1,
    paddingTop: 60,
  },
  flatListContainer: {
    paddingHorizontal: 10,
    marginTop: 5,
  },
});

const cardStyles = StyleSheet.create({
  imageCard: {
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    overflow: "hidden",
    marginVertical: 10,
    flexDirection: "column",
  },
  cardContainer: {
    marginHorizontal: 10,
  },
  textContainer: {
    margin: 10,
  },
  nameTextStyle: {
    fontSize: 16,
    fontWeight: "500",
  },
  locationTextStyle: {
    color: "rgba(0, 0, 0, 0.7)",
    marginVertical: 5,
  },
  home_image_dimensions: {
    borderRadius: 10,
    width: 330,
    aspectRatio: 16 / 9,
    resizeMode: "cover",
  },
  courseTitle: {
    marginBottom: 5,
    fontSize: 17,
    width: "100%",
    paddingHorizontal: 20,
  },
});
