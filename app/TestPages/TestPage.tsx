// ExampleComponent.tsx
import React, { useEffect, useState } from "react";
import { View, Image, Text, ActivityIndicator, StyleSheet } from "react-native";
import { getRestaurantImage } from "./api"; // Adjust the path as needed

interface ExampleComponentProps {
  restaurantId: number;
}

const TestPage: React.FC<ExampleComponentProps> = ({ restaurantId }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const url = await getRestaurantImage(restaurantId);
        setImageUrl(url);
        console.log(url);
      } catch (error) {
        console.error("Failed to fetch image:", error);
        setImageUrl(null);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, [restaurantId]);

  if (loading) {
    return;
    <ActivityIndicator />;
  }

  return (
    <View style={styles.container}>
      {imageUrl ? (
        //<Text>{imageUrl}</Text>
        <Image source={require("./restaurant-image.png")} />
      ) : (
        <Text>No image found</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});

export default TestPage;
