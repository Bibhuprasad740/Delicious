import React, { useState } from "react";
import { MenuOption } from "../../index";
import { DUMMY_CATEGORIES } from "../../../DummyData";

const MenuOptions = () => {
  const [selectedCategory, setSelectedCategory] = useState("chicken");

  return (
    <div className="w-full flex items-center justify-start lg:justify-center gap-8  py-6 overflow-x-scroll scrollbar-none">
      {DUMMY_CATEGORIES.map((category) => (
        <MenuOption
          key={category.id}
          name={category.name}
          urlParse={category.urlParseName}
          onClick={setSelectedCategory}
          selectedCategory={selectedCategory}
        />
      ))}
    </div>
  );
};

export default MenuOptions;
