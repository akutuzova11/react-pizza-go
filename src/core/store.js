import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../features/basketSlice";
import pizzaReducer from "../features/pizzaSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    pizza: pizzaReducer,
  },
});
