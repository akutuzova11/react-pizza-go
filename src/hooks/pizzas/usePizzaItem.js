import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../features/basketSlice";

export const usePizzaItem = ({
  id,
  availableTypes,
  availableSizes,
  price,
  name,
  imageUrl,
}) => {
  const dispatch = useDispatch();
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  const [loading, setLoading] = useState(false);

  const onSelectType = (index) => setActiveType(index);
  const onSelectSize = (index) => setActiveSize(index);

  const onAddPizza = async () => {
    setLoading(true);

    const pizzaObj = {
      id,
      name,
      imageUrl,
      price,
      size: availableSizes[activeSize],
      type: availableTypes[activeType],
    };
    await new Promise((resolve) => setTimeout(resolve, 1000));
    dispatch(addToBasket(pizzaObj));
    setLoading(false);
  };

  return {
    activeType,
    activeSize,
    loading,
    onSelectType,
    onSelectSize,
    onAddPizza,
  };
};
