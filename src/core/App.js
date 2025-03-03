import { useDispatch, useSelector } from "react-redux";
import { Navigation } from "../elements/Navigation";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { BasketPage } from "../elements/BasketPage";
import { selectTotalPrice, selectTotalQuantity } from "../features/basketSlice";
import { selectPizzas } from "../features/pizzaSlice";
import { toAll } from "./routes";
import handleCategoryRoutes from "../features/handleCategoryRoutes";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const pizzas = useSelector(selectPizzas);
  const totalPrice = useSelector(selectTotalPrice);
  const totalItemsInBasket = useSelector(selectTotalQuantity);

  const [sortedItems, setSortedItems] = useState(pizzas);

  const handleSortChange = (sorted) => {
    setSortedItems(sorted);
    dispatch(setSortedItems(sorted));
  };

  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    const path = window.location.pathname;
    setCurrentPage(path === "/basket" ? "basket" : "home");
  }, [window.location.pathname]);

  const basketItems = useSelector((state) => state.basket.items);

  const handleBasketClick = () => {
    setCurrentPage("basket");
    navigate("/basket");
  };

  return (
    <>
      {currentPage === "home" && (
        <Navigation
          setSortedItems={handleSortChange}
          totalPrice={totalPrice}
          totalItemsInBasket={totalItemsInBasket}
          handleBasketClick={handleBasketClick}
        />
      )}
      <Routes>
        <Route path="/" element={<Navigate to={toAll()} replace />} />
        {currentPage === "home" && handleCategoryRoutes(sortedItems)}
        <Route
          path="/basket"
          element={<BasketPage setCurrentPage={setCurrentPage} />}
        />
      </Routes>
    </>
  );
}

export default App;
