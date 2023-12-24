import React from "react";
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useSelector } from "react-redux";
import { FoodHeaderTitle } from "../../index";

const FoodHeader = ({ title }) => {
  const foodRowRef = useSelector((state) => state.ui.foodRowRef);
  const scrollHandler = (offset) => {
    foodRowRef.current.scrollLeft += offset;
  };
  return (
    <div className="w-full flex justify-between">
      <FoodHeaderTitle title={title} />
      {/* Icons */}
      <div className="hidden md:flex items-center gap-3">
        <motion.div
          whileTap={{ scale: 0.75 }}
          className="w-8 h-8 rounded-lg bg-orange-300 flex items-center justify-center hover:bg-orange-500 cursor-pointer hover:shadow-lg"
        >
          <MdChevronLeft
            className="text-lg text-white"
            onClick={() => {
              scrollHandler(-200);
            }}
          />
        </motion.div>
        <motion.div
          whileTap={{ scale: 0.75 }}
          className="w-8 h-8 rounded-lg bg-orange-300 flex items-center justify-center hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg"
        >
          <MdChevronRight
            className="text-lg text-white"
            onClick={() => {
              scrollHandler(200);
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default FoodHeader;
