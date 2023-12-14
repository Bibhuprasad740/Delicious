import React from "react";
import { AnimatePresence } from "framer-motion";
import { Outlet } from "react-router-dom";
import { Header } from "../components/index";

const HomePage = () => {
  return (
    <AnimatePresence mode="wait">
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />
        <main className="mt-24 p-8 w-full">
          <Outlet />
        </main>
      </div>
    </AnimatePresence>
  );
};

export default HomePage;
