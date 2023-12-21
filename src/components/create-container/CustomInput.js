import React from "react";

const CustomInput = ({
  value,
  placeholder,
  onChange,
  onBlur,
  error,
  children,
  type,
}) => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center gap-3 border border-gray-700 px-2">
      <div className="w-full py-2 flex items-center gap-2">
        {children}
        <input
          required={true}
          type={type ?? "text"}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          className={`w-full h-full text-lg bg-transparent p-4 ${
            error ? "border border-red-500 bg-red-100" : ""
          }`}
        />
      </div>
    </div>
  );
};

export default CustomInput;
