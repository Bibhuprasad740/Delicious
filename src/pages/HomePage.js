import React from "react";
import { AnimatePresence } from "framer-motion";
import { Header } from "../components";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <AnimatePresence>
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
