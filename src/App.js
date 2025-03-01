import { useDispatch, useSelector } from "react-redux";
import { Navigation } from "./common/Navigation";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import { BasketPage } from "./common/BasketPage";
import { selectTotalPrice, selectTotalQuantity } from "./features/basketSlice";
import { selectPizzas } from "./features/pizzaSlice";
import { toAll } from "./routes";
import handleCategoryRoutes from "./handleCategoryRoutes";

function App() {
  const dispatch = useDispatch();

  const pizzas = useSelector(selectPizzas);
  const totalPrice = useSelector(selectTotalPrice);
  const totalItemsInBasket = useSelector(selectTotalQuantity);

  const [sortedItems, setSortedItems] = useState(pizzas);

  const handleSortChange = (sorted) => {
    setSortedItems(sorted);
    dispatch(setSortedItems(sorted));
  };

  const [currentPage, setCurrentPage] = useState("home");

  const basketItems = useSelector((state) => state.basket.items);

  const handleBasketClick = () => {
    setCurrentPage("basket");
  };

  return (
    <Router basename="/react-pizza-go">
      {currentPage === "home" ? (
        <Navigation
          setSortedItems={handleSortChange}
          totalPrice={totalPrice}
          totalItemsInBasket={totalItemsInBasket}
          handleBasketClick={handleBasketClick}
        />
      ) : (
        <BasketPage basketItems={basketItems} setCurrentPage={setCurrentPage} />
      )}
      <Routes>
        <Route path="/" element={<Navigate to={toAll()} replace />} />
        {currentPage === "home" && handleCategoryRoutes(sortedItems)}
      </Routes>
    </Router>
  );
}

export default App;
