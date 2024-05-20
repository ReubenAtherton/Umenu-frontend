import React from "react";
import { data } from "./Data/new_data";
import Horizontal_list from "./FlatList/horizontal_list";
import { SafeAreaView } from "react-native-safe-area-context";

const ImageTest = () => {
  const id = data[3].id;

  return (
    <SafeAreaView style={{ justifyContent: "center", alignItems: "center" }}>
      <Horizontal_list meals={data[id].mains} />
      <Horizontal_list meals={data[id].starters} />
      <Horizontal_list meals={data[id].desserts} />
    </SafeAreaView>
  );
};

export default ImageTest;
