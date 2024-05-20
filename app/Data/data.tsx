import { Image } from "react-native";

// CURRENTLY USING THIS DATA
export const data_test = [
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
    meals: [
      {
        id: 0,
        category: "starter",
        name: "Nocellara olives",
        source: (style: any) => (
          <Image
            style={style}
            source={require("@/assets/images/starter-image3.png")}
          />
        ),
        price: "£4.00",
      },
      {
        id: 1,
        category: "starter",
        name: "Rosemary & sea salt focaccia",
        source: (style: any) => (
          <Image
            style={style}
            source={require("@/assets/images/starter-image2.png")}
          />
        ),
        price: "£4.00",
      },
      {
        id: 2,
        category: "starter",
        name: "Whipped cod roe, pasta fritta, lemon",
        source: (style: any) => (
          <Image
            style={style}
            source={require("@/assets/images/starter-image1.png")}
          />
        ),
        price: "£6.00",
      },
      {
        id: 3,
        category: "starter",
        name: "Cauliflower salad, lemon, smoked almond, pecorino sardo",
        source: (style: any) => (
          <Image
            style={style}
            source={require("@/assets/images/starter-image3.png")}
          />
        ),
        price: "£9.00",
      },
      {
        id: 4,
        category: "main",
        name: "Chilli, garlic, parsley, spaghetti ‘alla chitarra’",
        source: (style: any) => (
          <Image
            style={style}
            source={require("@/assets/images/meal-image.png")}
          />
        ),
        price: "£9.00",
      },
      {
        id: 5,
        category: "main",
        name: "Silk handkerchiefs, walnut butter, confit egg yolk",
        source: (style: any) => (
          <Image
            style={style}
            source={require("@/assets/images/meal-image2.png")}
          />
        ),
        price: "£11.00",
      },
      {
        id: 6,
        category: "main",
        name: "Kale, chilli, rigatoni",
        source: (style: any) => (
          <Image
            style={style}
            source={require("@/assets/images/meal-image3.png")}
          />
        ),
        price: "£11.00",
      },
      {
        id: 7,
        category: "main",
        name: "Bucatini cacio e pepe",
        source: (style: any) => (
          <Image
            style={style}
            source={require("@/assets/images/meal-image4.png")}
          />
        ),
        price: "£12.00",
      },
      {
        id: 8,
        category: "dessert",
        name: "Praline cannolo, crystallised hazelnuts",
        source: (style: any) => (
          <Image
            style={style}
            source={require("@/assets/images/dessert-image1.png")}
          />
        ),
        price: "£4.50",
      },
      {
        id: 9,
        category: "dessert",
        name: "Crème caramello, coffee, buckwheat",
        source: (style: any) => (
          <Image
            style={style}
            source={require("@/assets/images/dessert-image2.png")}
          />
        ),
        price: "£7.00",
      },
      {
        id: 10,
        category: "dessert",
        name: "Chocolate, mascarpone, lime",
        source: (style: any) => (
          <Image
            style={style}
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
    meals: [
      {
        id: 0,
        category: "starter",
        name: "Prawn Crackers ",
        source: (style: any) => (
          <Image
            style={style}
            source={require("@/assets/images/image-22.png")}
          />
        ),
        price: "£4.25",
      },
      {
        id: 1,
        category: "starter",
        name: "Thai Fish Cake",
        source: (style: any) => (
          <Image
            style={style}
            source={require("@/assets/images/image-23.png")}
          />
        ),
        price: "£8.50",
      },
      {
        id: 2,
        category: "starter",
        name: "Ka Nom Jeeb (Dim Sum)",
        source: (style: any) => (
          <Image
            style={style}
            source={require("@/assets/images/image-25.png")}
          />
        ),
        price: "£8.95",
      },
      {
        id: 3,
        category: "starter",
        name: "Moo Ping",
        source: (style: any) => (
          <Image
            style={style}
            source={require("@/assets/images/image-26.png")}
          />
        ),
        price: "£8.95",
      },
      {
        id: 4,
        category: "main",
        name: "Gang Pak",
        source: (style: any) => (
          <Image
            style={style}
            source={require("@/assets/images/image-27.png")}
          />
        ),
        price: "£9.95",
      },
      {
        id: 5,
        category: "main",
        name: "Massaman",
        source: (style: any) => (
          <Image
            style={style}
            source={require("@/assets/images/image-28.png")}
          />
        ),
        price: "£13.95",
      },
      {
        id: 6,
        category: "main",
        name: "Massaman Lamb",
        source: (style: any) => (
          <Image
            style={style}
            source={require("@/assets/images/image-29.png")}
          />
        ),
        price: "£15.95",
      },
      {
        id: 7,
        category: "main",
        name: "Duck Curry",
        source: (style: any) => (
          <Image
            style={style}
            source={require("@/assets/images/image-30.png")}
          />
        ),
        price: "£14.25",
      },
      {
        id: 8,
        category: "dessert",
        name: "Chocolate Cake",
        source: (style: any) => (
          <Image
            style={style}
            source={require("@/assets/images/image-33.png")}
          />
        ),
        price: "£9.95",
      },
      {
        id: 9,
        category: "dessert",
        name: "Ice Cream",
        source: (style: any) => (
          <Image
            style={style}
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
    meals: [
      {
        id: 0,
        category: "starter",
        name: "Garlic Bread with Mozzarella Cheese",
        source: (style: any) => (
          <Image
            style={style}
            source={require("@/assets/images/image-35.png")}
          />
        ),
        price: "£7.50",
      },
      {
        id: 1,
        category: "starter",
        name: "Arancino",
        source: (style: any) => (
          <Image
            style={style}
            source={require("@/assets/images/image-36.png")}
          />
        ),
        price: "£8.90",
      },
      {
        id: 2,
        category: "starter",
        name: "Melanzane Parmigiana",
        source: (style: any) => (
          <Image
            style={style}
            source={require("@/assets/images/image-37.png")}
          />
        ),
        price: "£8.50",
      },
      {
        id: 3,
        category: "starter",
        name: "Calamari Fritti",
        source: (style: any) => (
          <Image
            style={style}
            source={require("@/assets/images/image-38.png")}
          />
        ),
        price: "£13.50",
      },
      {
        id: 4,
        category: "main",
        name: "Gnocchi Toscana",
        source: (style: any) => (
          <Image
            style={style}
            source={require("@/assets/images/image-39.png")}
          />
        ),
        price: "£15.90",
      },
      {
        id: 5,
        category: "main",
        name: "Bolognese Pasta",
        source: (style: any) => (
          <Image
            style={style}
            source={require("@/assets/images/image-40.png")}
          />
        ),
        price: "£11.90",
      },
      {
        id: 6,
        category: "main",
        name: "Salsiccia Casarecce",
        source: (style: any) => (
          <Image
            style={style}
            source={require("@/assets/images/image-41.png")}
          />
        ),
        price: "£15.50",
      },
      {
        id: 7,
        category: "main",
        name: "Pappardelle Wild Boar (NEW)",
        source: (style: any) => (
          <Image
            style={style}
            source={require("@/assets/images/image-42.png")}
          />
        ),
        price: "£15.00",
      },
      {
        id: 8,
        category: "dessert",
        name: "Tiramisu",
        source: (style: any) => (
          <Image
            style={style}
            source={require("@/assets/images/image-31.png")}
          />
        ),
        price: "£9.95",
      },
      {
        id: 9,
        category: "dessert",
        name: "Mango Cheesecake",
        source: (style: any) => (
          <Image
            style={style}
            source={require("@/assets/images/image-32.png")}
          />
        ),
        price: "£13.95",
      },
    ],
  },
];
