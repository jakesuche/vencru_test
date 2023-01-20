import styled from "styled-components";
import { Color } from "utils/constants/color";
import { variables } from "utils/constants/size";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:1rem;
  width: 100%;
  height: 73px;
  flex-grow: 1;
  background: ${Color.base};
  border-bottom: 1px solid ${Color.grey300};
  @media (min-width: ${variables.breakpoints}) {
   display:none;
  }
`;
