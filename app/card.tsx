import { Text, View, StyleSheet, Image } from "react-native";

const Card = () => {
  return (
    <View style={cardStyles.imageContainer}>
      <View style={cardStyles.imageCard}>
        <View>
          <Image
            source={require("@/assets/images/restaurant-image.png")}
            style={{
              height: 150,
              width: 240,
            }}
          />
        </View>
        <View style={{ padding: 10, width: 170 }}>
          <Text>Title</Text>
          <Text style={{ color: "#777", paddingTop: 5 }}>
            Description of the image
          </Text>
        </View>
      </View>
    </View>
  );
};

const cardStyles = StyleSheet.create({
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  imageCard: {
    backgroundColor: "#eee",
    borderRadius: 10,
    overflow: "hidden",
  },
});

export default Card;
