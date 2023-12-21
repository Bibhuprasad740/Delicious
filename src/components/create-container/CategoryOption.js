import React from "react";

const CategoryOption = (props) => {
  return (
    <option
      className="text-base border-0 outline-none capitalize bg-white text-headingColor p-2"
      value={props.value}
    >
      {props.name}
    </option>
  );
};

export default CategoryOption;
