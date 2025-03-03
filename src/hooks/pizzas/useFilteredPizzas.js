import { useMemo } from "react";
import { useSelector } from "react-redux";
import { selectPizzas } from "../../features/pizzaSlice";
import { useLocation } from "react-router-dom";
import categoryRoutes from "../../handleCategoryRoutes";

export const useFilteredPizzas = () => {
  const location = useLocation();
  const category = categoryRoutes[location.pathname] || "All";
  const pizzas = useSelector(selectPizzas);

  return useMemo(() => {
    return category === "All"
      ? pizzas
      : pizzas.filter((pizza) => pizza.category === category);
  }, [category, pizzas]);
};
