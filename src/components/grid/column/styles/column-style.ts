import styled from 'styled-components';

type Props = {
  md?: string;
  sm?: string;
  xs?: string;
  xxs?: string;
  direction?: string;
  padding?: string;
  bgImage?: string;
  alignItems?: string;
  justify: string;
  height?: string;
  gap?: string;
  justifyContent?: string;
  margin?: string;
  bgColor?: string;
  display?: boolean | string;
  radius?: string;
  border?: string;
};

export const ColumnDiv = styled.div<Props>`
  display: flex;
  width: ${({ md }) => (md ? md : '100%')};
  flex: 0 0 auto;
  height: ${({ height }) => height};
  flex-direction: ${({ direction }) => (direction ? direction : 'column')};
  padding: ${({ padding }) => (padding ? padding : '0.5rem')};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justify }) => justify};
  background-image: ${({ bgImage }) => bgImage};
  justify-content: ${({ justifyContent }) => justifyContent};
  gap: ${({ gap }) => gap};
  background-repeat: no-repeat;
  background-color: ${({ bgColor }) => bgColor};
  margin: ${({ margin }) => margin};
  position: relative;
  border-radius: ${({ radius }) => radius};
  border: ${({ border }) => border};
  @media (max-width: 992px) {
    width: ${({ md }) => (md ? md : '100%')};
  }
  @media (max-width: 768px) {
    width: ${({ sm }) => (sm ? sm : '100%')};
    display: ${({ display }) => display && 'none'};
  }

  @media (max-width: 640px) {
    width: ${({ xs }) => (xs ? xs : '100%')};
    padding: 5px;
  }
  @media (max-width: 360px) {
    width: ${({ xxs }) => xxs};
  }
`;
