import React from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { userActivityActions } from "../../../store/userActivitySlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(userActivityActions.addItemToCart(item));
  };
  const removeFromCartHandler = () => {
    dispatch(userActivityActions.removeItemFromCart(item.id));
  };
  return (
    <div className="w-full p-1 px-2 bg-foodRow rounded-lg flex items-center gap-2">
      <img
        src={item.imageUrl}
        alt=""
        className="w-24 h-24 max-w-[60px] object-contain"
      />
      {/* name of the cart item */}
      <div className="flex flex-col gap-2">
        <p className="text-base text-gray 600">{item.title}</p>
        <p className="text-lg block text-gray-700 font-semibold">
          ₹ {item.totalPrice}
        </p>
      </div>
      {/* Buttons for quantity change */}
      <div className="group flex items-center gap-2 ml-auto cursor-pointer">
        <motion.div
          whileTap={{ scale: 0.75 }}
          className="p-1 rounded-sm bg-orange-100"
          onClick={removeFromCartHandler}
        >
          <BiMinus />
        </motion.div>
        <p>{item.quantity}</p>
        <motion.div
          whileTap={{ scale: 0.75 }}
          className="p-1 rounded-sm bg-orange-100"
          onClick={addToCartHandler}
        >
          <BiPlus />
        </motion.div>
      </div>
    </div>
  );
};

export default CartItem;
