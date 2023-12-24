import { FoodHeaderTitle, FoodRow } from "../../index";
import MenuOptions from "./MenuOptions";

const MenuSection = () => {
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
      <div className="w-full">{/* <FoodRow /> */}</div>
    </section>
  );
};

export default MenuSection;
