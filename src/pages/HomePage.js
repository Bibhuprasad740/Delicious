import React, { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Outlet } from "react-router-dom";
import { Header } from "../components/index";
import { getAllFoods } from "../utilities/firebaseMethods";
import { useDispatch } from "react-redux";

import { foodsActions } from "../store/foodsSlice";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchFoodsFromDatabase = async () => {
      const foods = await getAllFoods();
      dispatch(foodsActions.setFoods(foods));
    };

    fetchFoodsFromDatabase();
  }, [dispatch]);

  return (
    <AnimatePresence mode="wait">
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
