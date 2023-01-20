import styled from "styled-components";
import { Color } from "utils/constants/color";
import { variables } from "utils/constants/size";

export const SMain = styled.main`
  padding: calc(${variables.smSpacing} * 2);
  width: 100%;
  margin-left: 250px;
  background: ${Color.grey50};
  min-height: 100vh;
  @media (max-width: ${variables.breakpoints}) {
    margin-left: auto;
    padding: 0;
  }
`;
