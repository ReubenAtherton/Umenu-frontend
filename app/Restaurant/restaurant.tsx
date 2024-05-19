import { Text, View, StyleSheet, ScrollView } from "react-native";
import MenuReviewBar from "../menu-review-bar";
import Horizontal_list from "../FlatList/horizontal_list";
import { useLocalSearchParams } from "expo-router";
import { data } from '../Data/new_data'
import { data_test } from "../Data/data";
import React from "react";
import { Entypo } from '@expo/vector-icons';

const RestaurantPage = () => {

  const { id } = useLocalSearchParams();
  const numericId = Number(id); // Ensure id is parsed as number

  const test = 100;

  const meals = data_test[numericId].meals

  const starter = meals.filter(meal => meal.category === "starter")
  const main = meals.filter(meal => meal.category === "main")
  const dessert = meals.filter(meal => meal.category === "dessert")

  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>

      <View style={styles.image}>
        {data[numericId].source(styles.image)}
      </View>
      {/* potenially could add background */}
      {/* <View style={{backgroundColor: 'rgba(255, 0, 0, 0.8)'}}> */}
      <View style={{ flexDirection: 'column', marginVertical: 22, alignItems: 'flex-start'}}>
        <Text
          className='font-psemibold'
          style={styles.restaurantTitle}>
          {data[numericId].name}
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'flex-end', marginLeft: 5, marginTop: 10}}>
          <Entypo
            name="location-pin"
            size={22}
            color={'black'}
            style={{ marginLeft: 10}}
          />
          <Text
            className='font-medium	'
            style={styles.restaurantLocation}>
            {data[numericId].location}
          </Text>
        </View>
      </View>
      <MenuReviewBar />
      <Text className='font-psemibold' style={styles.courseTitle}>
        Starters
      </Text>
      <Horizontal_list meals={starter} res_id={numericId} />
      <Text
        className='font-psemibold'
        style={styles.courseTitle}>
        Mains
      </Text>
      <Horizontal_list meals={main} res_id={numericId} />
      <Text
        className='font-psemibold'
        style={styles.courseTitle}>
        Dessert
      </Text>
      <Horizontal_list meals={dessert} res_id={numericId} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({

  image: {
    width: '100%',
  },
  restaurantTitle: {
    marginLeft: 20,
    fontSize: 28,
    //textDecorationLine: 'underline',
    //color: 'white' combo with the background colour 
  },
  restaurantLocation: {
    fontSize: 15,
    marginLeft: 5
    //textDecorationLine: 'underline',
    //color: 'white' combo with the background colour 
  },

  courseTitle: {
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 20,
    fontSize: 17
  }
});

export default RestaurantPage;
