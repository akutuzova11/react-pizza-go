import { createSlice } from "@reduxjs/toolkit";
import Pizza from "../images/pizza.png";

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState: {
    items: [
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
    ],
    availableTypes: ["thin", "traditional"],
    availableSizes: [24, 34, 39],
  },
  reducers: {
    setSortedItems: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setSortedItems } = pizzaSlice.actions;
export const selectPizzas = (state) => state.pizza.items;
export const selectAvailableTypes = (state) => state.pizza.availableTypes;
export const selectAvailableSizes = (state) => state.pizza.availableSizes;

export default pizzaSlice.reducer;
