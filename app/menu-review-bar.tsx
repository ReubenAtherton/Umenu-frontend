import { Text, View, StyleSheet } from "react-native";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const MenuReviewBar = () => {
  const [activeTab, setActiveTab] = useState("Menu");

  return (
    <View style={style.container}>
      <TouchableOpacity
        style={[style.inactiveTab, activeTab === "Menu" && style.activeTab]}
        onPress={() => {
          setActiveTab("Menu");
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <MaterialIcons
            name="menu-book"
            size={17}
            color="black"
            style={[
              style.inactiveIcon,
              activeTab === "Menu" && style.activeIcon,
            ]}
          />
          <Text
            style={[
              style.inactiveTabButtonText,
              activeTab === "Menu" && style.activeTabButtonText,
            ]}
          >
            Menu
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[style.inactiveTab, activeTab === "Reviews" && style.activeTab]}
        onPress={() => {
          setActiveTab("Reviews");
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <MaterialIcons
            name="reviews"
            size={17}
            color="black"
            style={[
              style.inactiveIcon,
              activeTab === "Reviews" && style.activeIcon,
            ]}
          />
          <Text
            style={[
              style.inactiveTabButtonText,
              activeTab === "Reviews" && style.activeTabButtonText,
            ]}
          >
            Reviews
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    alignSelf: "center",
    width: "85%",
    height: "3%",
    borderRadius: 10,
    borderColor: "rgba(0, 0, 0, 0.1)",
    flexDirection: "row",
    marginBottom: 20,
  },
  activeTab: {
    flex: 1,
    width: "96%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    borderBottomWidth: 2,
    borderBottomColor: "black",
  },
  inactiveTab: {
    flex: 1,
    width: "100%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  activeTabButtonText: {
    color: "black",
    fontWeight: "400",
    opacity: 1,
  },
  inactiveTabButtonText: {
    color: "#000",
    fontSize: 14,
    fontWeight: "400",
    opacity: 0.5,
  },
  activeIcon: {
    opacity: 1,
    marginRight: 10,
  },
  inactiveIcon: {
    opacity: 0.5,
    marginRight: 10,
  },
});

export default MenuReviewBar;
