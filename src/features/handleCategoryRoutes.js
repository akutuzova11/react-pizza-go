import { Route } from "react-router-dom";
import { PizzaList } from "../elements/PizzaList";
import {
  toAll,
  toMeatLovers,
  toVegetarian,
  toBBQ,
  toSpicy,
  toCalzone,
} from "../core/routes";
import { useBasket } from "../hooks/basket/useBasket";
import { useSelector } from "react-redux";

const categoryRoutes = {
  [toAll()]: "All",
  [toMeatLovers()]: "Meat Lovers",
  [toVegetarian()]: "Vegetarian",
  [toBBQ()]: "BBQ",
  [toSpicy()]: "Spicy",
  [toCalzone()]: "Calzone",
};

const BasketProvider = ({ render }) => {
  const basket = useSelector((state) => state.basket);
  return render(basket);
};

function handleCategoryRoutes(filterCriteria) {
  return (
    <>
      {Object.keys(categoryRoutes).map((path) => (
        <Route
          key={path}
          path={path}
          element={
            <BasketProvider
              render={(basket) => (
                <PizzaList
                  category={categoryRoutes[path]}
                  filterCriteria={filterCriteria}
                  basket={basket}
                />
              )}
            />
          }
        />
      ))}
    </>
  );
}

export default handleCategoryRoutes;
