import styled from "styled-components";

export const LabelWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items:flex-start;
  padding: 0px 8px;
  gap: 10px;
  height: 40px;
  flex: none;
  order: 3;
  align-self: center;
  flex-grow: 0;
  margin-bottom: 3rem;
  padding:14px;
  
`;

export const IconWrapper = styled.div`
  width: 20px;
  height: 20px;
  flex: none;
  order: 1;
  flex-grow: 0;
  svg{
    align-items: flex-start;
    display: flex;
  }
`;
