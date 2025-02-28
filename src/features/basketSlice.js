import { createSlice } from "@reduxjs/toolkit";
import { findItemInBasket } from "../common/utils/basketUtils";

const initialState = {
  items: [],
  totalPrice: 0,
  totalQuantity: 0,
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const { id, name, imageUrl, type, size, price } = action.payload;
      const existingItem = findItemInBasket(state, id, type, size);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          id,
          name,
          imageUrl,
          type,
          size,
          price,
          quantity: 1,
        });
      }
    },

    removeFromBasket: (state, action) => {
      const { id, type, size } = action.payload;
      state.items = state.items.filter(
        (item) => !(item.id === id && item.type === type && item.size === size)
      );
    },

    increaseQuantity: (state, action) => {
      const { id, type, size } = action.payload;
      const item = findItemInBasket(state, id, type, size);
      if (item) item.quantity += 1;
    },

    decreaseQuantity: (state, action) => {
      const { id, type, size } = action.payload;
      const item = findItemInBasket(state, id, type, size);

      if (item) {
        if (item.quantity === 1) {
          state.items = state.items.filter(
            (i) => !(i.id === id && i.type === type && i.size === size)
          );
        } else {
          item.quantity -= 1;
        }
      }
    },

    clearBasket: (state) => {
      state.items = [];
    },
  },

  extraReducers: (builder) => {
    builder.addDefaultCase((state) => {
      state.totalPrice = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      state.totalQuantity = state.items.reduce(
        (total, item) => total + item.quantity,
        0
      );
    });
  },
});

export const {
  addToBasket,
  removeFromBasket,
  increaseQuantity,
  decreaseQuantity,
  clearBasket,
} = basketSlice.actions;

export const selectBasket = (state) => state.basket.items;
export const selectTotalPrice = (state) => state.basket.totalPrice;
export const selectTotalQuantity = (state) => state.basket.totalQuantity;

export default basketSlice.reducer;
