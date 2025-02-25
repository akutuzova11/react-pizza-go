import { Provider } from "react-redux";
import { store } from "./store";
import { Navigation } from "./common/Navigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
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

  const availableTypes = ["thin", "traditional"];
  const availableSizes = [24, 34, 39];

  const filterPizzas = (category) => {
    if (!sortedItems) return [];
    if (category === "All") return sortedItems;
    return sortedItems.filter((pizza) => pizza.category === category);
  };

  return (
    <Router>
      <Navigation setSortedItems={setSortedItems} />
      <Routes>
        <Route
          path={toAll()}
          element={
            <PizzaList
              pizzaData={filterPizzas("All")}
              availableTypes={availableTypes}
              availableSizes={availableSizes}
            />
          }
        />
        <Route
          path={toMeatLovers()}
          element={
            <PizzaList
              pizzaData={filterPizzas("Meat Lovers")}
              availableTypes={availableTypes}
              availableSizes={availableSizes}
            />
          }
        />
        <Route
          path={toVegetarian()}
          element={
            <PizzaList
              pizzaData={filterPizzas("Vegetarian")}
              availableTypes={availableTypes}
              availableSizes={availableSizes}
            />
          }
        />
        <Route
          path={toBBQ()}
          element={
            <PizzaList
              pizzaData={filterPizzas("BBQ")}
              availableTypes={availableTypes}
              availableSizes={availableSizes}
            />
          }
        />
        <Route
          path={toSpicy()}
          element={
            <PizzaList
              pizzaData={filterPizzas("Spicy")}
              availableTypes={availableTypes}
              availableSizes={availableSizes}
            />
          }
        />
        <Route
          path={toCalzone()}
          element={
            <PizzaList
              pizzaData={filterPizzas("Calzone")}
              availableTypes={availableTypes}
              availableSizes={availableSizes}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
