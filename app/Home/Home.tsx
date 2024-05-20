import { View, Text, StyleSheet, Image, TextComponent } from "react-native";
import { Link } from "expo-router";
import SearchBar from "../Search/search-bar";
import { FlatList } from "react-native";
import { Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { data } from "../Data/new_data";

export default function Home() {
  return (
    <SafeAreaView style={styles.safeview}>
      <SearchBar />
      <View style={{ marginBottom: 10, alignSelf: "flex-start" }}>
        <Text style={{ fontWeight: "500", fontSize: 16, marginLeft: 20 }}>
          Our Recommendations
        </Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeview: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    paddingBottom: 30,
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
