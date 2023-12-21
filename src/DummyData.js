import Icecream from "./assets/images/i1.png";
import Strawberry from "./assets/images/f1.png";
import Chicken from "./assets/images/c1.png";
import Fish from "./assets/images/fi1.png";

export const DUMMY_FOOD_DATA = [
  {
    id: 1,
    name: "Icecream",
    description: "Chocolate & Vanilla",
    price: 200,
    imageSrc: Icecream,
  },
  {
    id: 2,
    name: "Strawberries",
    description: "Fresh Strawberries",
    price: 80,
    imageSrc: Strawberry,
  },
  {
    id: 3,
    name: "Chicken",
    description: "Mixed Chicken Kabab",
    price: 100,
    imageSrc: Chicken,
  },
  {
    id: 4,
    name: "Fish",
    description: "Mixed Fish Kabab",
    price: 120,
    imageSrc: Fish,
  },
];

export const DUMMY_CATEGORIES = [
  {
    id: 1,
    name: "Chicken",
    urlParseName: "chicken",
  },
  {
    id: 2,
    name: "Curry",
    urlParseName: "curry",
  },
  {
    id: 3,
    name: "Rice",
    urlParseName: "rice",
  },
  {
    id: 4,
    name: "Fish",
    urlParseName: "fish",
  },
  {
    id: 5,
    name: "Fruits",
    urlParseName: "fruits",
  },
  {
    id: 6,
    name: "Icecreams",
    urlParseName: "icecreams",
  },
  {
    id: 7,
    name: "Soft Drinks",
    urlParseName: "drinks",
  },
];
