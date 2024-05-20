import Home from "./Home/Home";
import { data_test } from "./Data/data";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DataProvider } from "./Data/new_data";

const index = () => {
  const Stack = createNativeStackNavigator();

  const meals = data_test[0].meals;

  const starter = meals.filter((meal) => meal.category === "starter");

  return (
    <DataProvider>
      {/* <View style={{ backgroundColor: 'white', height: '100%' }}> */}
      <Home />
      {/* <RestaurantPage/> */}
      {/* <MealInfoPage/> */}
      {/* <ImageTest /> */}
      {/* <Horizontal_list meals={starter} res_id={Number(0)}/> */}
      {/* </View> */}
    </DataProvider>
  );
};

export default index;
