import FoodRowItem from "./FoodRowItem";

const FoodRow = ({ flag, foods, onScroll }) => {
  const xOverflowState = flag
    ? "overflow-x-scroll scrollbar-none"
    : "overflow-x-hidden flex-wrap justify-center";

  return (
    <div
      className={`px-4 w-full my-12 flex gap-4 bg-foodRow scroll-smooth rounded-lg ${xOverflowState}`}
    >
      {foods.map((food) => (
        <FoodRowItem key={food.id} food={food} />
      ))}
    </div>
  );
};

export default FoodRow;
