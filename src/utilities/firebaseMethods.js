import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { firestore } from "../firebase.config";

// save food data
export const saveFoodDataToFirestore = async (foodData) => {
  try {
    // updates if 'foodItems' already present otherwise creates a new collection
    await setDoc(doc(firestore, "foodItems", `${Date.now()}`), foodData, {
      merge: true,
    });
  } catch (error) {
    console.log("Error in uploading data");
  }
};

// get all the products
export const getAllFoods = async () => {
  const foods = await getDocs(
    query(collection(firestore, "foodItems"), orderBy("id", "desc"))
  );

  return [foods.docs.map((food) => food.data())];
};
