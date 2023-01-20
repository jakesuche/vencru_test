import styled from 'styled-components';

type Props = {
  direction?: string;
  alignItems?: string;
  justifyContent?: string;
  gap?: string;
  margin: string;
  minHeight: string;
  padding: string;
  background: string;
  radius: string;
};

export const RowDiv = styled.div<Props>`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  /* gap:.5rem; */
  gap: ${({ gap }) => gap};
  flex-direction: ${({ direction }) => (direction ? direction : 'row')};
  align-items: ${({ alignItems }) => alignItems && alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  margin: ${({ margin }) => margin};
  position: relative;
  padding: ${({ padding }) => padding};
  min-height: ${({ minHeight }) => minHeight};
  background: ${({ background }) => background};
  border-radius: ${({ radius }) => radius};
`;
