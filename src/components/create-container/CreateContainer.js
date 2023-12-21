import React, { useState } from "react";
import ErrorText from "./ErrorText";
import { useDispatch, useSelector } from "react-redux";
import AlertMessage from "./AlertMessage";

import {
  MdFastfood,
  MdCloudUpload,
  MdDelete,
  MdFoodBank,
  MdAttachMoney,
} from "react-icons/md";
import useInput from "../../hooks/use-input";
import { DUMMY_CATEGORIES } from "../../DummyData";
import CategoryOption from "./CategoryOption";
import Loader from "../Loader";
import CustomInput from "./CustomInput";

import { uiActions } from "../../store/uiSlice";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { storage } from "../../firebase.config";
import { saveFoodDataToFirestore } from "../../utilities/firebaseMethods";

const isNotEmpty = (value) => value.trim() !== "";
const isValidCategory = (category) => category !== "other" && category !== "";
const isValidCalory = (calory) => calory && parseInt(calory) > 0;
const isPriceValid = (price) => parseInt(price) > 0;

const inputs = ["name", "categoty", "calory", "image", "price"];

const getError = (...errorCheckers) => {
  let error = false;
  let errorText = "";
  for (let i = 0; i < errorCheckers.length; i++) {
    if (errorCheckers[i]) {
      error = true;
      if (inputs[i] === "image") {
        errorText = `Please select an image`;
      } else {
        errorText = `Please enter valid ${inputs[i]}`;
      }
      break;
    }
  }
  return [error, errorText];
};

const CreateContainer = () => {
  const dispatch = useDispatch();
  const alertMessage = useSelector((state) => state.ui.alertMessage);
  const isLoading = useSelector((state) => state.ui.isLoading);

  // name input state
  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetname,
  } = useInput(isNotEmpty);

  // category input state
  const {
    value: categoryValue,
    isValid: categoryIsValid,
    hasError: categoryHasError,
    valueChangeHandler: categoryChangeHandler,
    inputBlurHandler: categoryBlurHandler,
    reset: resetCategory,
  } = useInput(isValidCategory);

  // calory input state
  const {
    value: caloryValue,
    isValid: caloryIsValid,
    hasError: caloryHasError,
    valueChangeHandler: caloryChangeHandler,
    inputBlurHandler: caloryBlurHandler,
    reset: resetCalory,
  } = useInput(isValidCalory);

  // price input state
  const {
    value: priceValue,
    isValid: priceIsValid,
    hasError: priceHasError,
    valueChangeHandler: priceChangeHandler,
    inputBlurHandler: priceBlurHandler,
    reset: resetPrice,
  } = useInput(isPriceValid);

  const resetInput = () => {
    resetname();
    resetCategory();
    resetCalory();
    setImageUrl(null);
    resetPrice();
  };

  const [imageUrl, setImageUrl] = useState(null);

  let valid =
    nameIsValid && categoryIsValid && caloryIsValid && imageUrl && priceIsValid;

  const [error, errorText] = getError(
    nameHasError,
    categoryHasError,
    caloryHasError,
    imageUrl == null,
    priceHasError
  );

  const uploadImage = (event) => {
    dispatch(uiActions.setIsLoading(true));
    const image = event.target.files[0];
    const storageRef = ref(storage, `Images/${Date.now()}-${image.name}`);

    // image upload
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const uploadProgress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(uploadProgress);
      },
      (error) => {
        console.error("Error occured");
        dispatch(uiActions.setAlertMessage("Image uploaded failed!"));
      },
      async () => {
        const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
        setImageUrl(downloadUrl);
      }
    );
    dispatch(uiActions.setAlertMessage("Image uploaded successfully!"));
    setTimeout(() => {
      dispatch(uiActions.setAlertMessage(null));
    }, 3000);

    dispatch(uiActions.setIsLoading(false));
  };

  const clearImage = async () => {
    dispatch(uiActions.setIsLoading(true));

    const deleteRef = ref(storage, imageUrl);
    await deleteObject(deleteRef);

    setImageUrl(null);
    dispatch(uiActions.setAlertMessage("Image deleted successfully!"));
    setTimeout(() => {
      dispatch(uiActions.setAlertMessage(null));
    }, 3000);

    dispatch(uiActions.setIsLoading(false));
  };

  const saveDetails = async (event) => {
    event.preventDefault();

    dispatch(uiActions.setIsLoading(true));
    if (!valid) {
      dispatch(uiActions.setAlertMessage("Please enter all the fields"));
      return;
    }

    try {
      const foodData = {
        id: `${Date.now()}`,
        title: nameValue,
        category: categoryValue,
        calories: caloryValue,
        price: priceValue,
        imageUrl,
        quantity: 1,
      };

      await saveFoodDataToFirestore(foodData);

      dispatch(uiActions.setAlertMessage("Product Added successfully!"));
      resetInput();

      setTimeout(() => {
        dispatch(uiActions.setAlertMessage(null));
      }, 3000);
    } catch (error) {
      dispatch(uiActions.setAlertMessage("Something went wrong!"));
      setTimeout(() => {
        dispatch(uiActions.setAlertMessage(null));
      }, 3000);
      console.error("Upload failed!");
    }

    dispatch(uiActions.setIsLoading(false));
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <form className="w-[90%] md:w-[75%] border border-black rounded-lg p-4 flex flex-col items-center justify-center gap-4">
        {error && <ErrorText errorText={errorText} />}
        {/* name input*/}
        <CustomInput
          value={nameValue}
          placeholder="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          error={nameHasError}
        >
          <MdFastfood className="text-3xl text-gray-700" />
        </CustomInput>
        {/* categories input*/}
        <div className="w-full">
          <select
            required
            onChange={categoryChangeHandler}
            onBlur={categoryBlurHandler}
            value={categoryValue}
            className={`outline-none w-full text-base border-b-2 border-gray-200 rounded-md cursor-pointer p-4 ${
              categoryHasError
                ? "border border-red-400 bg-red-100 text-red-400"
                : ""
            }`}
          >
            <option value="other" className="bg-white">
              Select Category
            </option>
            {DUMMY_CATEGORIES &&
              DUMMY_CATEGORIES.map((category) => (
                <CategoryOption
                  key={category.id}
                  name={category.name}
                  value={category.urlParseName}
                />
              ))}
          </select>
        </div>
        {/* image input */}
        <div className="group flex flex-col justify-center items-center border-2 border-dotted border-r-gray-300 w-full h-225 md:h-420 cursor-pointer rounded-lg">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {imageUrl ? (
                <>
                  <div className="relative h-full">
                    <img
                      src={imageUrl}
                      alt="uploaded"
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      className="absolute bottom-3 right-3 p-3 rounded-full bg-red-500 text-xl cursor-pointer outline-none hover: shadow-md duration-500 transition-all"
                      onClick={clearImage}
                    >
                      <MdDelete className="text-white" />
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer">
                    <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                      <MdCloudUpload className="text-green-500 text-3xl hover:text-gray-700" />
                      <p className="text-green-500 hover:text-gray-700">
                        Click here to upload!
                      </p>
                    </div>
                    <input
                      type="file"
                      name="upload image"
                      accept="image/*"
                      onChange={uploadImage}
                      className="w-0 h-0"
                    />
                  </label>
                </>
              )}
            </>
          )}
        </div>
        {/* calories input*/}
        <CustomInput
          value={caloryValue}
          placeholder="calory"
          onChange={caloryChangeHandler}
          onBlur={caloryBlurHandler}
          error={caloryHasError}
          type="number"
        >
          <MdFoodBank className="text-gray-700 text-3xl " />
        </CustomInput>
        {/* price input */}
        <CustomInput
          value={priceValue}
          placeholder="price"
          onChange={priceChangeHandler}
          onBlur={priceBlurHandler}
          error={priceHasError}
          type="number"
        >
          <MdAttachMoney className="text-gray-700 text-3xl " />
        </CustomInput>
        <div className="flex items-center w-full">
          <button
            type="submit"
            className="ml-0 md:ml-auto w-full md:w-auto border-none outline-none bg-emerald-500 px-12 py-2 rounded-lg text-lg text-white font-semibold"
            onClick={saveDetails}
          >
            Save
          </button>
        </div>

        {alertMessage && <AlertMessage />}
      </form>
    </div>
  );
};

export default CreateContainer;
