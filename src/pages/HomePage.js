import React, { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Outlet } from "react-router-dom";
import { Header } from "../components/index";
import { getAllFoods } from "../utilities/firebaseMethods";
import { useDispatch, useSelector } from "react-redux";

import { foodsActions } from "../store/foodsSlice";
import {
  fetchDataFromLocalStorage,
  setDataToLocalStorage,
} from "../utilities/localStorageMethods";
import { userActivityActions } from "../store/userActivitySlice";
import Popup from "../components/Popup";

const HomePage = () => {
  const dispatch = useDispatch();
  const showPopup = useSelector((state) => state.ui.showPopup);

  useEffect(() => {
    const fetchFoodsFromDatabase = async () => {
      const foods = await getAllFoods();
      dispatch(foodsActions.setFoods(foods));

      const cart = fetchDataFromLocalStorage("cart");
      if (!cart) {
        setDataToLocalStorage("cart", []);
      } else {
        dispatch(userActivityActions.setCart(cart));
      }
    };

    fetchFoodsFromDatabase();
  }, [dispatch]);

  return (
    <AnimatePresence mode="wait">
      {showPopup && <Popup />}
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />
        <main className="mt-14 md:mt-20 px-8 md:px-16 py-4 p-8 w-full">
          <Outlet />
        </main>
      </div>
    </AnimatePresence>
  );
};

export default HomePage;
