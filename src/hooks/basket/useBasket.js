import { useSelector } from "react-redux";
import {
  selectTotalPrice,
  selectTotalQuantity,
} from "../../features/basketSlice";

export const useBasket = () => {
  const totalPrice = useSelector(selectTotalPrice);
  const totalQuantity = useSelector(selectTotalQuantity);

  return { totalPrice, totalQuantity };
};
