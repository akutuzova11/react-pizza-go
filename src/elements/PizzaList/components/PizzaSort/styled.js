import styled from "styled-components";

export const SortContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SortLabel = styled.label`
  margin-right: 4px;
  font-weight: 500;
  color: #333;
`;

export const StyledDropdownIndicator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fe5f1e;
  margin-left: -10px;
  &:hover {
    color: #ff7a3d;
  }
`;
