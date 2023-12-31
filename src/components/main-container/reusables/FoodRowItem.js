import React from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { userActivityActions } from "../../../store/userActivitySlice";

const FoodRowItem = ({ food }) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(userActivityActions.addItemToCart(food));
  };
  return (
    <div className="w-300 min-w-[300px] md:w-340 md:min-w-[340px] h-[225px] my-12 bg-cardOverlay rounded-lg p-4 hover:shadow-lg backdrop-blur-lg flex flex-col items-center justify-between">
      {/* image container */}
      <div className="w-full flex items-center justify-between">
        {/* image */}
        <motion.img
          whileHover={{ scale: 1.2 }}
          src={food.imageUrl}
          alt=""
          className="w-40 h-40 -mt-8 object-contain"
        />
        {/* cart button */}
        <motion.div
          onClick={addToCart}
          whileTap={{ scale: 0.75 }}
          className="w-8 h-8 rounded-full bg-red-700 flex items-center justify-center cursor-pointer hover:shadow-md"
        >
          <MdShoppingBasket className="text-white" />
        </motion.div>
      </div>
      {/* food details */}
      <div className="w-full flex flex-col items-end justify-end">
        {/* name */}
        <p className="text-textColor text-base md:text-lg">{food.title}</p>
        {/* calories */}
        <p className="mt-1 text-sm text-gray-500">{food.calories} Calories</p>
        {/* price */}
        <div className="flex items-center gap-8">
          <p className="text-lg text-textColor font-semibold">
            <span>₹ {food.price}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FoodRowItem;
