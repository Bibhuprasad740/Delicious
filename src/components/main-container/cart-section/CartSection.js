import React from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { MdRefresh } from "react-icons/md";
import { CartItem } from "../../index";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { userActivityActions } from "../../../store/userActivitySlice";

import EmptyCart from "../../../assets/images/emptyCart.svg";
import { uiActions } from "../../../store/uiSlice";

const CartSection = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.userActivity.cart);
  const totalPrice = useSelector((state) => state.userActivity.totalPrice);
  const shippingFee = 20;

  const hideCartHandler = () => {
    dispatch(userActivityActions.hideCart());
  };

  const clearCartHandler = () => {
    dispatch(userActivityActions.clearCart());
  };

  const orderNowHandler = () => {
    dispatch(uiActions.hideCart());
    dispatch(uiActions.showPopUp());
  };

  const emptyCartComponent = (
    <div className="w-full h-full flex flex-col items-center justify-center gap-6">
      <img src={EmptyCart} alt="empty cart svg" className="w-360 p-4" />
      <p className="text-xl text-textColor font-semibold">
        Add some items to your cart
      </p>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      className="fixed top-0 right-0 w-full md:w-375 h-screen bg-white drop-shadow-md flex flex-col z-50"
    >
      {/* Cart Header */}
      <div className="w-full flex items-center justify-between p-4">
        {/* back icon */}
        <motion.div whileTap={{ scale: 0.75 }} onClick={hideCartHandler}>
          <MdOutlineKeyboardBackspace className="text-textColor text-3xl cursor-pointer" />
        </motion.div>
        {/* cart text */}
        <p className="text-textColor text-lg font-semibold">Cart</p>
        {/* clear button */}
        <motion.p
          whileTap={{ scale: 0.75 }}
          className="flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md text-textColor text-base cursor-pointer"
          onClick={clearCartHandler}
        >
          Clear <MdRefresh />
        </motion.p>
      </div>
      {/* cart container */}
      {cart.length > 0 && (
        <div className="w-full h-full flex flex-col">
          <div className="w-full h-[60%] px-6 flex flex-col gap-3 overflow-y-scroll scrollbar-none">
            {/* cart item */}
            {cart && cart.map((item) => <CartItem key={item.id} item={item} />)}
          </div>
          {/* cart total section*/}
          <div className="w-full h-full flex-1 flex flex-col items-center justify-start px-8 py-2">
            {/* cart total */}
            <div className="w-full flex items-center justify-between">
              <p className="text-gray-600  text-lg">Total</p>
              <p className="text-gray-600  text-lg">₹ {totalPrice}</p>
            </div>
            {/* delivery details */}
            <div className="w-full flex items-center justify-between">
              <p className="text-gray-600  text-lg">Delivery</p>
              <p className="text-gray-600  text-lg">₹ {shippingFee}</p>
            </div>
            {/* divider */}
            <div className="w-full border-b border-gray-600"></div>
            <div className="w-full flex items-center justify-between">
              <p className="text-gray-700 text-xl font-semibold">Overall</p>
              <p className="text-gray-700 text-xl font-semibold">
                ₹ {shippingFee + totalPrice}
              </p>
            </div>
            <motion.button
              whileTap={{ scale: 0.9 }}
              type="button"
              className="w-full p-2 bg-gradient-to-tr rounded-lg from-orange-300 to-orange-500 text-gray-50 text-lg my-2 hover:shadow-lg "
              onClick={orderNowHandler}
            >
              Order Now!
            </motion.button>
          </div>
        </div>
      )}
      {cart.length === 0 && emptyCartComponent}
    </motion.div>
  );
};

export default CartSection;
