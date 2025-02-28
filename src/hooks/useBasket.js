import { useMemo } from "react";
import { useSelector } from "react-redux";
import { selectBasket } from "../features/basketSlice";


export const useBasket = () => {
  const basket = useSelector(selectBasket);

  const calculateTotalPrice = () => {
    return basket.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  const aggregatedBasket = useMemo(() => {
    return basket.reduce((acc, item) => {
      acc[item.id] = (acc[item.id] || 0) + item.quantity;
      return acc;
    }, {});
  }, [basket]);

  return { basket, calculateTotalPrice, aggregatedBasket };
};
