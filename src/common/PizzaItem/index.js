import { useSelector } from "react-redux";
import { usePizzaItem } from "../../hooks/usePizzaItem";
import { getItemQuantity } from "../utils/basketUtils";
import {
  PizzaContainer,
  PizzaImage,
  Details,
  PizzaTitle,
  Selector,
  SelectorList,
  SelectorItem,
  BottomSection,
  Price,
  Button,
  PizzaImageWrapper,
  LoadingIcon,
  Quantity,
} from "./styled";

export const PizzaItem = ({
  id,
  name,
  imageUrl,
  price,
  availableTypes = [],
  availableSizes = [],
}) => {
  const {
    activeType,
    activeSize,
    loading,
    onSelectType,
    onSelectSize,
    onAddPizza,
  } = usePizzaItem({
    id,
    availableTypes,
    availableSizes,
    price,
    name,
    imageUrl,
  });

  const basket = useSelector((state) => state.basket);

  const quantity = getItemQuantity(
    basket,
    id,
    availableTypes[activeType],
    availableSizes[activeSize]
  );

  return (
    <PizzaContainer>
      <PizzaImageWrapper>
        <PizzaImage src={imageUrl} alt={name} />
      </PizzaImageWrapper>
      <Details>
        <PizzaTitle>{name}</PizzaTitle>
        <Selector>
          <SelectorList>
            {availableTypes.map((type, index) => (
              <SelectorItem
                key={type}
                onClick={() => onSelectType(index)}
                $isActive={activeType === index}
                $isSize={false}
              >
                {type}
              </SelectorItem>
            ))}
          </SelectorList>
          <SelectorList>
            {availableSizes.map((size, index) => (
              <SelectorItem
                key={size}
                onClick={() => onSelectSize(index)}
                $isActive={activeSize === index}
                $isSize={true}
              >
                {size} cm
              </SelectorItem>
            ))}
          </SelectorList>
        </Selector>
        <BottomSection>
          <Price>from {price} €</Price>
          <Button onClick={onAddPizza} disabled={loading} $loading={loading}>
            {loading ? (
              <LoadingIcon />
            ) : (
              <>
                <span>+ Add</span>
                {quantity > 0 && <Quantity>{quantity}</Quantity>}
              </>
            )}
          </Button>
        </BottomSection>
      </Details>
    </PizzaContainer>
  );
};
