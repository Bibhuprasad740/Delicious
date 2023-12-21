import React from "react";
import { useSelector } from "react-redux";

import { motion } from "framer-motion";

const ErrorText = ({ errorText }) => {
  const alertStatus = useSelector((state) => state.ui.alertStatus);
  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`w-full p-2 rounded-lg text-center text-lg ${
        alertStatus === "danger"
          ? "bg-red-100 text-red-800"
          : "bg-emerald-200 text-emerald-800"
      }`}
    >
      {`Error: ${errorText}`}
    </motion.p>
  );
};

export default ErrorText;
