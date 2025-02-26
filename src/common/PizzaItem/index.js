import { useState } from "react";
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
  onClickAddPizza,
  basket,
}) => {
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  const [loading, setLoading] = useState(false);
  const quantity = basket[id] || 0;

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
    await new Promise((resolve) => setTimeout(resolve, 1200));
    onClickAddPizza(pizzaObj);
    setLoading(false);
  };

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
