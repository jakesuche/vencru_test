import styled from 'styled-components';

type textProps = {
  color?: string;
  size?: string;
  weight?: string;
  padding?: string;
  margin?: string;
  align?: string;
  width?: string;
  opacity?: string;
  bgColor?: string;
  border?: string;
  justifyContent?: string;
  alignItems?: string;
  fontStyle?: 'oblique' | 'italic' | 'underline' | 'normal';
  componentCss?: string;
  radius?: string;
  gap?: string;
  cursorType?: string;
  lHeight?:string
  height?: string;
};

export const TextStyle = styled.div<textProps>`
  display: flex;
  align-items: center;
  color: ${({ color }) => color};
  font-size: ${({ size }) => size};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  text-align: ${({ align }) => align};
  max-width: ${({ width }) => width};
  opacity: ${({ opacity }) => opacity};
  background: ${({ bgColor }) => bgColor};
  border: ${({ border }) => border};
  font-style: ${({ fontStyle }) => fontStyle};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : 'flex-start')};
  border-radius: ${({ radius }) => (radius ? radius : '5px')};
  gap: ${({ gap }) => gap};
  cursor: ${({ cursorType }) => cursorType};

  ${({ componentCss }) => componentCss};
  * {
    font-weight: ${({ weight }) => weight};
    line-height:${({lHeight}) => lHeight};
    height:${({height}) => height};
    
  }
  h1 {
    @media (max-width: 640px) {
      font-size: 2.5rem;
      max-width: 100%;
    }
  }
  @media (max-width: 640px) {
    max-width: 100%;
  }
`;
