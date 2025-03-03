import { useDispatch, useSelector } from "react-redux";
import { Navigation } from "../elements/Navigation";
import {
  Route,
  Routes,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useState } from "react";
import { BasketPage } from "../elements/BasketPage";
import { selectTotalPrice, selectTotalQuantity } from "../features/basketSlice";
import { selectPizzas } from "../features/pizzaSlice";
import { toAll } from "./routes";
import handleCategoryRoutes from "../features/handleCategoryRoutes";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const pizzas = useSelector(selectPizzas);
  const totalPrice = useSelector(selectTotalPrice);
  const totalItemsInBasket = useSelector(selectTotalQuantity);

  const [sortedItems, setSortedItems] = useState(pizzas);

  const handleSortChange = (sorted) => {
    setSortedItems(sorted);
    dispatch(setSortedItems(sorted));
  };

  const handleBasketClick = () => {
    navigate("/basket");
  };

  return (
    <>
      {location.pathname !== "/basket" && (
        <Navigation
          setSortedItems={handleSortChange}
          totalPrice={totalPrice}
          totalItemsInBasket={totalItemsInBasket}
          handleBasketClick={handleBasketClick}
        />
      )}
      <Routes>
        <Route path="/" element={<Navigate to={toAll()} replace />} />
        {location.pathname !== "/basket" && handleCategoryRoutes(sortedItems)}
        <Route path="/basket" element={<BasketPage />} />
      </Routes>
    </>
  );
}

export default App;
