// api.ts
import axios from "axios";

export const fetchImage = async (restaurantId: number) => {
  try {
    const response = await axios.get(
      `http://192.168.0.160:8000/restaurants/images/${restaurantId}`
    );
    console.log("image url:", response.data.restaurant_image_url);
    return response;
  } catch (error) {
    console.error("Error fetching restaurant image:", error);
  } finally {
    return null;
  }
};
