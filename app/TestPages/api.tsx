// api.ts
import axios from "axios";

export const getRestaurantImage = async (
  restaurantId: number
): Promise<string | null> => {
  try {
    const response = await axios.get(
      `http://192.168.0.160:8000/restaurants/images/${restaurantId}` // Replace <YOUR_LOCAL_IP> with your actual IP address
    );
    return response.data || null;
  } catch (error) {
    console.error("Error fetching restaurant image:", error);
    return null;
  }
};
