import { useSelector } from "react-redux";
import { FoodHeaderTitle, FoodRow } from "../../index";
import MenuOptions from "./MenuOptions";

const MenuSection = () => {
  const selectedCategory = useSelector(
    (state) => state.ui.currentSelectedCategory
  );
  const foods = useSelector((state) => state.foods.foods);
  return (
    <section className="w-full my-6" id="menu">
      {/* Menu header */}
      <div className="w-full flex flex-col items-center justify-start">
        {/* Menu title */}
        <FoodHeaderTitle title="Check Out Our Menu" />
        {/* menu options */}
        <MenuOptions />
      </div>
      {/* menu content according to category */}
      {foods && (
        <div className="w-full">
          <FoodRow
            flag={false}
            foods={foods[0].filter(
              (food) => food.category === selectedCategory
            )}
          />
        </div>
      )}
    </section>
  );
};

export default MenuSection;
