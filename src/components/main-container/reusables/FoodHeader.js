import React from "react";
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const FoodHeader = ({ title }) => {
  return (
    <div className="w-full flex justify-between">
      <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:left-0 before:-bottom-2 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
        {title}
      </p>
      {/* Icons */}
      <div className="hidden md:flex items-center gap-3">
        <motion.div
          whileTap={{ scale: 0.75 }}
          className="w-8 h-8 rounded-lg bg-orange-300 flex items-center justify-center hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg"
        >
          <MdChevronLeft className="text-lg text-white" />
        </motion.div>
        <motion.div
          whileTap={{ scale: 0.75 }}
          className="w-8 h-8 rounded-lg bg-orange-300 flex items-center justify-center hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg"
        >
          <MdChevronRight className="text-lg text-white" />
        </motion.div>
      </div>
    </div>
  );
};

export default FoodHeader;
