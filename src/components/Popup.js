import React, { useState } from "react";
import Modal from "./Modal";
import useInput from "../hooks/use-input";
import CustomInput from "./create-container/CustomInput";
import { MdFastfood } from "react-icons/md";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../store/uiSlice";
import { userActivityActions } from "../store/userActivitySlice";

const isNotEmpty = (value) => value.trim() !== "";
const isPhoneValid = (value) => value.trim() > 0 && value.trim().length === 10;

const Popup = () => {
  // name input state
  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetname,
  } = useInput(isNotEmpty);

  // phone number state
  const {
    value: phoneValue,
    isValid: phoneIsValid,
    hasError: phoneHasError,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
    reset: resetphone,
  } = useInput(isPhoneValid);

  // address state
  const {
    value: addressValue,
    isValid: addressIsValid,
    hasError: addressHasError,
    valueChangeHandler: addressChangeHandler,
    inputBlurHandler: addressBlurHandler,
    reset: resetaddress,
  } = useInput(isNotEmpty);

  const isValid = nameIsValid && phoneIsValid && addressIsValid;

  const [success, setSuccess] = useState(false);
  const [errorText, setErrorText] = useState("");

  const dispatch = useDispatch();

  const cartData = useSelector((state) => state.userActivity.cart);

  const cancelHandler = () => {
    dispatch(uiActions.hidePopUp());
  };

  const confirmHandler = async () => {
    if (!isValid) {
      setErrorText("Enter all the fields!");
      return;
    }

    try {
      const deliveryInfo = {
        name: nameValue,
        phone: phoneValue,
        address: addressValue,
      };

      const response = await fetch(
        "https://deli-29601-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json",
        {
          method: "POST",
          body: JSON.stringify({
            user: deliveryInfo,
            orderedItems: cartData,
          }),
        }
      );

      if (!response.ok) {
        setErrorText("Sending data failed!");
        console.log("Details send failed!");
      } else {
        setSuccess(true);
        setErrorText("");
        dispatch(userActivityActions.clearCart());
      }
    } catch (error) {
      setErrorText("Something went wrong!");
      console.log(error.message);
    }

    console.log(cartData);
  };

  return (
    <Modal>
      <div className="p-4">
        {success && (
          <div className="flex flex-col justify-center items-center">
            <p className="font-semibold text-center text-green-800 capitalize">
              Order Placed Successfully
            </p>
            <motion.button
              whileTap={{ scale: 0.95 }}
              type="button"
              className="w-full p-1 md:p-2 md:w-[20vw] bg-gradient-to-tr rounded-lg from-orange-300 to-orange-500 text-gray-50 text-lg my-2 hover:shadow-lg "
              onClick={cancelHandler}
            >
              Ok
            </motion.button>
          </div>
        )}
        {!success && (
          <>
            <div>
              <p className="text-center font-semibold p-2 text-lg">
                Add Delivery Details
              </p>
              <p className="p-1 text-red-400 font-semibold">{errorText}</p>
            </div>
            <form action="">
              <CustomInput
                value={nameValue}
                placeholder="name"
                onChange={nameChangeHandler}
                onBlur={nameBlurHandler}
                error={nameHasError}
              >
                <MdFastfood className="text-3xl text-gray-700" />
              </CustomInput>
              <br />
              <CustomInput
                value={phoneValue}
                placeholder="phone no"
                onChange={phoneChangeHandler}
                onBlur={phoneBlurHandler}
                error={phoneHasError}
                type="number"
              >
                <MdFastfood className="text-3xl text-gray-700" />
              </CustomInput>
              <br />
              <CustomInput
                value={addressValue}
                placeholder="Address"
                onChange={addressChangeHandler}
                onBlur={addressBlurHandler}
                error={addressHasError}
              >
                <MdFastfood className="text-3xl text-gray-700" />
              </CustomInput>
              <br />
              <div className="flex gap-2 md:justify-end">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  className="w-full p-1 md:p-2 bg-gradient-to-tr rounded-lg from-gray-700 to-gray-900 text-gray-50 text-lg my-2 hover:shadow-lg "
                  onClick={cancelHandler}
                >
                  Cancel
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  className="w-full md:w-[50%] p-1 md:p-2 bg-gradient-to-tr rounded-lg from-orange-300 to-orange-500 text-gray-50 text-lg my-2 hover:shadow-lg "
                  onClick={confirmHandler}
                >
                  Order
                </motion.button>
              </div>
            </form>
          </>
        )}
      </div>
    </Modal>
  );
};

export default Popup;
