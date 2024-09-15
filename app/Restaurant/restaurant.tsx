import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import MenuReviewBar from "../menu-review-bar";
import Horizontal_list from "../FlatList/horizontal_list";
import { useLocalSearchParams } from "expo-router";
import axios from "axios";
import { Entypo } from "@expo/vector-icons";

interface Meal {
  id: number;
  name: string;
  price: string;
  image_url: string;
}

interface Restaurant {
  id: number;
  name: string;
  location: string;
  restaurant_image_url: string;
  starters: Meal[];
  mains: Meal[];
  desserts: Meal[];
}

const RestaurantPage = () => {
  const { id } = useLocalSearchParams();
  const numericId = Number(id); // Ensure id is parsed as number
  const [imageDimensions, setImageDimensions] = useState({
    width: 0,
    height: 0,
  });
  const [restaurant_data, setRestaurantData] = useState<Restaurant | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const response = await axios.get(
          `http://192.168.0.160:8000/restaurants/${numericId}`
        );
        setRestaurantData(response.data);
      } catch (error) {
        console.error("Error fetching restaurant data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurant();
  }, [numericId]);

  useEffect(() => {
    if (restaurant_data?.restaurant_image_url) {
      Image.getSize(restaurant_data.restaurant_image_url, (width, height) => {
        setImageDimensions({ width, height });
      });
    }
  }, [restaurant_data]);

  if (loading) {
    return <ActivityIndicator />;
  }

  // needs to be !restaurant_image || loading otherwise will not show
  if (!restaurant_data) {
    return <Text>Loading..</Text>;
  }

  const { restaurant_image_url, starters, mains, desserts, name, location } =
    restaurant_data;

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 100 }}
    >
      {/* <View style={styles.image}>{data[numericId].source(styles.image)}</View> */}
      <View style={styles.container}>
        <Image
          source={{ uri: restaurant_data.restaurant_image_url }}
          style={{
            width: imageDimensions.width,
            height: imageDimensions.height,
          }}
          resizeMode="contain"
        />
      </View>

      <View
        style={{
          flexDirection: "column",
          marginVertical: 22,
          alignItems: "flex-start",
        }}
      >
        <Text className="font-psemibold" style={styles.restaurantTitle}>
          {name}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
            marginLeft: 5,
            marginTop: 10,
          }}
        >
          <Entypo
            name="location-pin"
            size={22}
            color={"black"}
            style={{ marginLeft: 10 }}
          />
          <Text className="font-medium	" style={styles.restaurantLocation}>
            {location}
          </Text>
        </View>
      </View>
      <MenuReviewBar />
      <Text className="font-psemibold" style={styles.courseTitle}>
        Starters
      </Text>
      <Horizontal_list meal={starters} res_id={numericId} />
      <Text className="font-psemibold" style={styles.courseTitle}>
        Mains
      </Text>
      <Horizontal_list meal={mains} res_id={numericId} />
      <Text className="font-psemibold" style={styles.courseTitle}>
        Dessert
      </Text>
      <Horizontal_list meal={desserts} res_id={numericId} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  image: {
    width: "auto",
    height: "auto",
  },
  restaurantTitle: {
    marginLeft: 20,
    fontSize: 28,
  },
  restaurantLocation: {
    fontSize: 15,
    marginLeft: 5,
  },

  courseTitle: {
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 20,
    fontSize: 17,
  },
});

export default RestaurantPage;
