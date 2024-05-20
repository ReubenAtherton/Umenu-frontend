import { createContext, useContext, useState } from "react";
import { Image, StyleSheet } from "react-native";

// TEST DATA
export const data = [
  {
    id: 0,
    name: "Bancone",
    location: "Soho, London",
    source: (style: any) => (
      <Image
        style={style}
        source={require("@/assets/images/restaurant-image.png")}
      />
    ),
    starters: [
      {
        id: 0,
        name: "Nocellara olives",
        source: () => (
          <Image
            style={imageStyles.restaurant_image_dimensions}
            source={require("@/assets/images/starter-image3.png")}
          />
        ),
        price: "£4.00",
      },
      {
        id: 1,
        name: "Rosemary & sea salt focaccia",
        source: () => (
          <Image
            style={imageStyles.restaurant_image_dimensions}
            source={require("@/assets/images/starter-image2.png")}
          />
        ),
        price: "£4.00",
      },
      {
        id: 2,
        name: "Whipped cod roe, pasta fritta, lemon",
        source: () => (
          <Image
            style={imageStyles.restaurant_image_dimensions}
            source={require("@/assets/images/starter-image1.png")}
          />
        ),
        price: "£6.00",
      },
      {
        id: 3,
        name: "Cauliflower salad, lemon, smoked almond, pecorino sardo",
        source: () => (
          <Image
            style={imageStyles.restaurant_image_dimensions}
            source={require("@/assets/images/starter-image3.png")}
          />
        ),
        price: "£9.00",
      },
    ],
    mains: [
      {
        id: 0,
        name: "Chilli, garlic, parsley, spaghetti ‘alla chitarra’",
        source: () => (
          <Image
            style={imageStyles.restaurant_image_dimensions}
            source={require("@/assets/images/meal-image.png")}
          />
        ),
        price: "£9.00",
      },
      {
        id: 1,
        name: "Silk handkerchiefs, walnut butter, confit egg yolk",
        source: () => (
          <Image
            style={imageStyles.restaurant_image_dimensions}
            source={require("@/assets/images/meal-image2.png")}
          />
        ),
        price: "£11.00",
      },
      {
        id: 2,
        name: "Kale, chilli, rigatoni",
        source: () => (
          <Image
            style={imageStyles.restaurant_image_dimensions}
            source={require("@/assets/images/meal-image3.png")}
          />
        ),
        price: "£11.00",
      },
      {
        id: 3,
        name: "Bucatini cacio e pepe",
        source: () => (
          <Image
            style={imageStyles.restaurant_image_dimensions}
            source={require("@/assets/images/meal-image4.png")}
          />
        ),
        price: "£12.00",
      },
    ],
    desserts: [
      {
        id: 0,
        name: "Praline cannolo, crystallised hazelnuts",
        source: () => (
          <Image
            style={imageStyles.restaurant_image_dimensions}
            source={require("@/assets/images/dessert-image1.png")}
          />
        ),
        price: "£4.50",
      },
      {
        id: 1,
        name: "Crème caramello, coffee, buckwheat",
        source: () => (
          <Image
            style={imageStyles.restaurant_image_dimensions}
            source={require("@/assets/images/dessert-image2.png")}
          />
        ),
        price: "£7.00",
      },
      {
        id: 2,
        name: "Chocolate, mascarpone, lime",
        source: () => (
          <Image
            style={imageStyles.restaurant_image_dimensions}
            source={require("@/assets/images/dessert-image3.png")}
          />
        ),
        price: "£7.00",
      },
    ],
  },

  //   RESTAURANT - 2 - THAI THO -------------------------------------------------------

  {
    id: 1,
    name: "Thai Tho",
    location: "Leicster Square, London",
    source: (style: any) => (
      <Image
        style={style}
        source={require("@/assets/images/restaurant-image2.png")}
      />
    ),
    starters: [
      {
        id: 0,
        name: "Prawn Crackers ",
        source: () => (
          <Image
            style={imageStyles.restaurant_image_dimensions}
            source={require("@/assets/images/image-22.png")}
          />
        ),
        price: "£4.25",
      },
      {
        id: 1,
        name: "Thai Fish Cake",
        source: () => (
          <Image
            style={imageStyles.restaurant_image_dimensions}
            source={require("@/assets/images/image-23.png")}
          />
        ),
        price: "£8.50",
      },
      {
        id: 2,
        name: "Ka Nom Jeeb (Dim Sum)",
        source: () => (
          <Image
            style={imageStyles.restaurant_image_dimensions}
            source={require("@/assets/images/image-25.png")}
          />
        ),
        price: "£8.95",
      },
      {
        id: 3,
        name: "Moo Ping",
        source: () => (
          <Image
            style={imageStyles.restaurant_image_dimensions}
            source={require("@/assets/images/image-26.png")}
          />
        ),
        price: "£8.95",
      },
      // Add starter items for this restaurant
    ],
    mains: [
      {
        id: 0,
        name: "Gang Pak",
        source: () => (
          <Image
            style={imageStyles.restaurant_image_dimensions}
            source={require("@/assets/images/image-27.png")}
          />
        ),
        price: "£9.95",
      },
      {
        id: 1,
        name: "Massaman",
        source: () => (
          <Image
            style={imageStyles.restaurant_image_dimensions}
            source={require("@/assets/images/image-28.png")}
          />
        ),
        price: "£13.95",
      },
      {
        id: 2,
        name: "Massaman Lamb",
        source: () => (
          <Image
            style={imageStyles.restaurant_image_dimensions}
            source={require("@/assets/images/image-29.png")}
          />
        ),
        price: "£15.95",
      },
      {
        id: 3,
        name: "Duck Curry",
        source: () => (
          <Image
            style={imageStyles.restaurant_image_dimensions}
            source={require("@/assets/images/image-30.png")}
          />
        ),
        price: "£14.25",
      },
      // Add main items for this restaurant
    ],
    desserts: [
      {
        id: 0,
        name: "Chocolate Cake",
        source: () => (
          <Image
            style={imageStyles.restaurant_image_dimensions}
            source={require("@/assets/images/image-33.png")}
          />
        ),
        price: "£9.95",
      },
      {
        id: 1,
        name: "Ice Cream",
        source: () => (
          <Image
            style={imageStyles.restaurant_image_dimensions}
            source={require("@/assets/images/image-34.png")}
          />
        ),
        price: "£13.95",
      },
    ],
  },

  //   RESTAURANT - 3 - Caminata -------------------------------------------------------

  {
    id: 2,
    name: "Caminata",
    location: "Soho, London",
    source: (style: any) => (
      <Image
        style={style}
        source={require("@/assets/images/restaurant-image3.png")}
      />
    ),
    starters: [
      {
        id: 0,
        name: "Garlic Bread with Mozzarella Cheese",
        source: () => (
          <Image
            style={imageStyles.restaurant_image_dimensions}
            source={require("@/assets/images/image-35.png")}
          />
        ),
        price: "£7.50",
      },
      {
        id: 1,
        name: "Arancino",
        source: () => (
          <Image
            style={imageStyles.restaurant_image_dimensions}
            source={require("@/assets/images/image-36.png")}
          />
        ),
        price: "£8.90",
      },
      {
        id: 2,
        name: "Melanzane Parmigiana",
        source: () => (
          <Image
            style={imageStyles.restaurant_image_dimensions}
            source={require("@/assets/images/image-37.png")}
          />
        ),
        price: "£8.50",
      },
      {
        id: 3,
        name: "Calamari Fritti",
        source: () => (
          <Image
            style={imageStyles.restaurant_image_dimensions}
            source={require("@/assets/images/image-38.png")}
          />
        ),
        price: "£13.50",
      },
      // Add starter items for this restaurant
    ],
    mains: [
      {
        id: 0,
        name: "Gnocchi Toscana",
        source: () => (
          <Image
            style={imageStyles.restaurant_image_dimensions}
            source={require("@/assets/images/image-39.png")}
          />
        ),
        price: "£15.90",
      },
      {
        id: 1,
        name: "Bolognese Pasta",
        source: () => (
          <Image
            style={imageStyles.restaurant_image_dimensions}
            source={require("@/assets/images/image-40.png")}
          />
        ),
        price: "£11.90",
      },
      {
        id: 2,
        name: "Salsiccia Casarecce",
        source: () => (
          <Image
            style={imageStyles.restaurant_image_dimensions}
            source={require("@/assets/images/image-41.png")}
          />
        ),
        price: "£15.50",
      },
      {
        id: 3,
        name: "Pappardelle Wild Boar (NEW)",
        source: () => (
          <Image
            style={imageStyles.restaurant_image_dimensions}
            source={require("@/assets/images/image-42.png")}
          />
        ),
        price: "£15.00",
      },
    ],
    desserts: [
      {
        id: 0,
        name: "Tiramisu",
        source: () => (
          <Image
            style={imageStyles.restaurant_image_dimensions}
            source={require("@/assets/images/image-31.png")}
          />
        ),
        price: "£9.95",
      },
      {
        id: 1,
        name: "Mango Cheesecake",
        source: () => (
          <Image
            style={imageStyles.restaurant_image_dimensions}
            source={require("@/assets/images/image-32.png")}
          />
        ),
        price: "£13.95",
      },
    ],
  },
];

const DataContext = createContext({ data });

// Define the provider component
export const DataProvider = ({ children }: any) => {
  const [state, setState] = useState({ data });

  return <DataContext.Provider value={state}>{children}</DataContext.Provider>;
};

// Custom hook to use the data context
export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};

const imageStyles = StyleSheet.create({
  home_image_dimensions: {
    height: 150,
    width: 330,
    resizeMode: "cover",
  },
  restaurant_image_dimensions: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
