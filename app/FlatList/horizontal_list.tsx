import {
  View,
  Text,
  Pressable,
  StyleSheet,
  FlatList,
  Image,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { Link, useLocalSearchParams } from "expo-router";
import { Entypo } from "@expo/vector-icons";
import { FadeIn } from "react-native-reanimated";
import { data, useData } from "../Data/new_data";
import { data_test } from "../Data/data";

const Horizontal_list = ({ meals, res_id }: any) => {
  const [modalVisible, setModalVisible] = useState(false); // set back to true
  const [meal_id_to_convert, setSelectedMealId] = useState(null);

  const meal_id = Number(meal_id_to_convert);

  const ModalWindow = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible} // set back to modalVisible
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={modalStyles.centeredView}>
          <View style={modalStyles.modalView}>
            {data_test[res_id].meals[meal_id].source(modalStyles.modalImage)}
            <Text
              className="font-psemibold"
              style={{
                textAlign: "center",
                fontSize: 17,
                fontWeight: "300",
                marginTop: 24,
              }}
            >
              {data_test[res_id].meals[meal_id].name}
            </Text>
            <View style={{}}>
              <TextView
                // TODO update the below fields
                description="Thai noodle stir fry with a sweet-savoury-sour sauce scattered with crushed peanuts."
                allergens="Peanuts, soy"
                rating="4.2/5"
              />
            </View>
            <Pressable
              style={[modalStyles.button]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Entypo name="cross" size={28} color="white" />
            </Pressable>
          </View>
        </View>
      </Modal>
    );
  };

  const openModal = (meal_id: any) => {
    setSelectedMealId(meal_id);
    setModalVisible(true);
  };

  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={meals}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatListContainer}
        renderItem={({ item, index }) => (
          <View>
            <Pressable
              style={styles.pressable}
              onPress={() => openModal(item.id)}
            >
              <View
                style={[styles.imageCard, index === meals.length - 1 && {}]}
              >
                {item.source(styles.restaurant_image_dimensions)}
              </View>
              <View style={styles.textContainer}>
                <Text className="font-pregular" style={styles.itemName}>
                  {item.name}
                </Text>
                <Text style={styles.itemPrice}>{item.price}</Text>
              </View>
            </Pressable>
          </View>
        )}
      />
      {modalVisible && <ModalWindow />}
    </View>
  );
};

const TextView = ({ description, allergens, rating }: any) => {
  return (
    <View>
      <Text style={modalStyles.fieldTitle}>Description:</Text>
      <Text style={modalStyles.fieldText}>{description}</Text>
      <Text style={modalStyles.fieldTitle}>Allergen Information:</Text>
      <Text style={modalStyles.fieldText}>{allergens}</Text>
      <Text style={modalStyles.fieldTitle}>Rating:</Text>
      <Text style={modalStyles.fieldText}>{rating}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    paddingHorizontal: 20,
    marginTop: 5,
  },
  pressable: {
    height: "20%",
    marginRight: 20,
  },
  imageCard: {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: 10,
    overflow: "hidden",
    width: 200,
    height: 150,
    alignSelf: "center",
  },
  textContainer: {
    marginTop: 10,
    width: 170,
    height: 70,
  },
  itemName: {
    fontWeight: "300",
    fontSize: 13,
    opacity: 0.8,
    textAlign: "center",
  },
  itemPrice: {
    fontWeight: "500",
    fontSize: 14,
    marginTop: 5,
    alignSelf: "center",
    textAlign: "center",
  },
  restaurant_image_dimensions: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

const modalStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: "80%",
    height: "80%",
    backgroundColor: "#F8F8F8",
    borderRadius: 18,
    padding: 35,
    alignItems: "center",
    shadowColor: "black",
    shadowOpacity: 1,
    shadowRadius: 6,
    elevation: 20,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  modalImage: {
    borderRadius: 10,
    width: 240,
    height: 190,
  },
  button: {
    backgroundColor: "black",
    borderRadius: 7,
    padding: 6,
    elevation: 10,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    borderColor: "rgba(0,0,0,1)",
  },
  fieldTitle: {
    marginTop: 22,
    marginBottom: 10,
    fontSize: 14,
    fontWeight: "400",
  },
  fieldText: {
    fontWeight: "300",
  },
});

export default Horizontal_list;
