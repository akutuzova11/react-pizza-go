import { Wrapper, Header, List, Item } from "./styled";

export const PizzaList = ({ sortedItems }) => {
  return (
    <Wrapper>
      <Header>Available Pizzas</Header>
      <List>
        {sortedItems.map((item) => (
          <Item key={item.id}>
            {item.name} - ${item.price}
          </Item>
        ))}
      </List>
    </Wrapper>
  );
};
