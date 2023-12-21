import React from "react";
import { useSelector } from "react-redux";

const AlertMessage = () => {
  const alertMessage = useSelector((state) => state.ui.alertMessage);
  return (
    <p className="text-white w-full text-center bg-orange-500 p-2">
      {alertMessage}
    </p>
  );
};

export default AlertMessage;
