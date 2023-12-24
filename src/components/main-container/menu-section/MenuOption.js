import React from "react";
import { IoFastFood } from "react-icons/io5";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../../store/uiSlice";

const MenuOption = ({ name, urlParse }) => {
  const dispatch = useDispatch();

  const selectedCategory = useSelector(
    (state) => state.ui.currentSelectedCategory
  );
  const menuOptionClickHandler = () => {
    dispatch(uiActions.setCurrentSelectedCategory(urlParse));
  };
  return (
    <motion.div
      whileTap={{ scale: 0.75 }}
      className={`group w-24 min-w-[94px] h-24 cursor-pointer rounded-lg drop-shadow-lg flex flex-col gap-3 items-center justify-center ${
        selectedCategory === urlParse ? `bg-red-700` : `bg-white`
      } hover:bg-red-700`}
      onClick={menuOptionClickHandler}
    >
      {/* Icon */}
      <div
        className={`w-10 h-10 rounded-full ${
          selectedCategory === urlParse ? `bg-card` : `bg-red-700`
        } bg-red-700 group-hover:bg-card flex items-center justify-center`}
      >
        <IoFastFood
          className={`${
            selectedCategory === urlParse ? `text-textColor` : `text-card`
          } group-hover:text-textColor text-lg`}
        />
      </div>
      <p
        className={`text-sm ${
          selectedCategory === urlParse ? `text-card` : `text-textColor`
        } group-hover:text-card`}
      >
        {name}
      </p>
    </motion.div>
  );
};

export default MenuOption;
