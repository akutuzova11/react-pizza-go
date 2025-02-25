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
} from "./styled";

export const PizzaItem = ({
  id,
  name,
  imageUrl,
  price,
  availableTypes=[],
  availableSizes=[],
  onClickAddPizza,
}) => {
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);

  const onSelectType = (index) => setActiveType(index);
  const onSelectSize = (index) => setActiveSize(index);

  const onAddPizza = () => {
    const pizzaObj = {
      id,
      name,
      imageUrl,
      price,
      size: availableSizes[activeSize],
      type: availableTypes[activeType],
    };
    onClickAddPizza(pizzaObj);
  };

  console.log("PizzaItem received:", { id, name, imageUrl, price });

  return (
    <PizzaContainer>
      <PizzaImageWrapper>
        {" "}
        <PizzaImage src={imageUrl} alt={name} />
      </PizzaImageWrapper>
      <Details>
        <PizzaTitle>{name}</PizzaTitle>
        <Selector>
          <SelectorList>
            {availableTypes.map((type, index) => (
              <SelectorItem key={type} onClick={() => onSelectType(index)}>
                {type}
              </SelectorItem>
            ))}
          </SelectorList>
          <SelectorList>
            {availableSizes.map((size, index) => (
              <SelectorItem key={size} onClick={() => onSelectSize(index)}>
                {size} cm
              </SelectorItem>
            ))}
          </SelectorList>
        </Selector>
        <BottomSection>
          <Price>from ${price}</Price>
          <Button onClick={onAddPizza}>
            <span>Add</span>
          </Button>
        </BottomSection>
      </Details>
    </PizzaContainer>
  );
};
