import { Provider } from "react-redux";
import { store } from "./store";
import { Navigation } from "./common/Navigation";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useState, useMemo } from "react";
import { PizzaList } from "./common/PizzaList";
import {
  toAll,
  toMeatLovers,
  toVegetarian,
  toBBQ,
  toSpicy,
  toCalzone,
} from "./routes";
import Pizza from "./images/pizza.png";

function App() {
  const [sortedItems, setSortedItems] = useState([
    {
      id: 1,
      name: "Meat Lovers",
      imageUrl: Pizza,
      price: 12,
      category: "Meat Lovers",
    },
    {
      id: 2,
      name: "Carbonara",
      imageUrl: Pizza,
      price: 11,
      category: "Meat Lovers",
    },
    {
      id: 3,
      name: "BBQ Bacon Burger",
      imageUrl: Pizza,
      price: 13,
      category: "BBQ",
    },
    {
      id: 4,
      name: "Veggie Supreme",
      imageUrl: Pizza,
      price: 10,
      category: "Vegetarian",
    },
    {
      id: 5,
      name: "Pepperoni",
      imageUrl: Pizza,
      price: 9,
      category: "Meat Lovers",
    },
    {
      id: 6,
      name: "Margherita",
      imageUrl: Pizza,
      price: 8,
      category: "Vegetarian",
    },
  ]);

  const [basketCount, setBasketCount] = useState(0);

  const availableTypes = ["thin", "traditional"];
  const availableSizes = [24, 34, 39];

  const categoryRoutes = {
    [toAll()]: "All",
    [toMeatLovers()]: "Meat Lovers",
    [toVegetarian()]: "Vegetarian",
    [toBBQ()]: "BBQ",
    [toSpicy()]: "Spicy",
    [toCalzone()]: "Calzone",
  };

  const onClickAddPizza = (pizzaObj) => {
    setBasketCount((prevCount) => prevCount + 1);
  };

  function FilteredPizzaList() {
    const location = useLocation();
    const category = categoryRoutes[location.pathname] || "All";

    const filteredPizzas = useMemo(() => {
      return category === "All"
        ? sortedItems
        : sortedItems.filter((pizza) => pizza.category === category);
    }, [category, sortedItems]);

    return (
      <PizzaList
        pizzaData={filteredPizzas}
        availableTypes={availableTypes}
        availableSizes={availableSizes}
        onClickAddPizza={onClickAddPizza}
      />
    );
  }

  return (
    <Router>
      <Navigation setSortedItems={setSortedItems} basketCount={basketCount} />
      <Routes>
        <Route path="/" element={<Navigate to={toAll()} replace />} />
        {Object.keys(categoryRoutes).map((path) => (
          <Route key={path} path={path} element={<FilteredPizzaList />} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
