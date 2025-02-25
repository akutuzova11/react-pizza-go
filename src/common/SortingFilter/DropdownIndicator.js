import { components } from "react-select";
import { TbArrowBadgeUpFilled, TbArrowBadgeDownFilled } from "react-icons/tb";
import { StyledDropdownIndicator } from "./styled";

export const DropdownIndicator = (props) => {
  const { selectProps } = props;
  const isOpen = selectProps.menuIsOpen;

  return (
    <components.DropdownIndicator {...props}>
      <StyledDropdownIndicator $isOpen={isOpen}>
        {isOpen ? <TbArrowBadgeUpFilled /> : <TbArrowBadgeDownFilled />}
      </StyledDropdownIndicator>
    </components.DropdownIndicator>
  );
};
