import styled from 'styled-components';

type Props = {
  fluid?: boolean;
  bgColor?: string;
  justifyContent: string;
  height?: string;
  borderRadius: Boolean;
  align: string;
  bgImage: string;
  margin: string;
  padding: string;
  minHeight: string;
  bgSize: string;
  maxWidth?: string;
};

export const ContainerDiv = styled.div<Props>`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${({ padding }) => (padding ? padding : '0 0.75rem')};
  max-width: ${({ fluid }) => (fluid ? '100%' : '1180px')};
  padding: ${({ padding }) => (padding ? padding : '0 0.75rem')};
  background-color: ${({ bgColor }) => bgColor};
  justify-content: ${({ justifyContent }) => justifyContent};
  height: ${({ height }) => height};
  min-height: ${({ minHeight }) => minHeight};
  align-items: ${({ align }) => align};
  border-radius: ${({ borderRadius }) => borderRadius && '10px'};
  background-repeat: no-repeat;
  background-image: ${({ bgImage }) => bgImage};
  margin: ${({ margin }) => margin};
  position: relative;
  background-size: ${({ bgSize }) => bgSize};
  max-width: ${({ maxWidth }) => maxWidth};

  .cursor-pointer {
    cursor: pointer;
  }
`;
