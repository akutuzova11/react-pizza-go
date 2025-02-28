export const findItemInBasket = (state, id, type, size) => {
  return state.items.find(
    (item) => item.id === id && item.type === type && item.size === size
  );
};

export const getItemQuantity = (state, id, type, size) => {
    const item = findItemInBasket(state, id, type, size);
    return item ? item.quantity : 0;
  };
