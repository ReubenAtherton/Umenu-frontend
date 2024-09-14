import React, { useState, useEffect } from "react";
import { Text, View, Image, ActivityIndicator, StyleSheet } from "react-native";
import axios from "axios";

const TestPage = ({ restaurantId }: { restaurantId: number }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(
          `http://192.168.0.160:8000/restaurants/images/${restaurantId}`
        );
        setImageUrl(response.data.restaurant_image_url);
        console.log("Fetched Image URL:", response.data.restaurant_image_url);
      } catch (error) {
        console.error("Error fetching restaurant image:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, [restaurantId]);

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.container}>
      {imageUrl ? (
        <Image
          source={{ uri: imageUrl }}
          style={styles.image}
          resizeMode="contain"
        />
      ) : (
        <Text>No image found</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 300, // Adjust size as needed
    height: 300,
  },
});

export default TestPage;
