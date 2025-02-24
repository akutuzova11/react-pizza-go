import { Provider } from "react-redux";
import { store } from "./store";
import { Navigation } from "./common/Navigation";
import { useState } from "react";
import { PizzaList } from "./common/PizzaList";

function App() {
  const [sortedItems, setSortedItems] = useState([
    { id: 1, name: "Margherita", price: 8.99 },
    { id: 2, name: "Pepperoni", price: 10.99 },
    { id: 3, name: "BBQ Chicken", price: 12.99 },
  ]);

  return (
    <>
      <Navigation setSortedItems={setSortedItems} />
      <PizzaList sortedItems={sortedItems} />
    </>
  );
}

export default App;
