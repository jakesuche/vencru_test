import styled from "styled-components";
import { Color } from "utils/constants/color";

export const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 16px;
  gap: 9px;
  width: 90%;
  height: auto;
  background: ${Color.grey50};
  border-radius: 8px;
  flex: none;
  align-self: center;
  flex-grow: 0;

  img{
    width: 100%;
    border-radius: 8px;
    margin-top:0.4rem;
  }
`;
