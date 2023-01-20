import styled from 'styled-components';

type stackProps = {
  width: string;
  padding: string;
  direction: string;
  alignItems: string;
  justifyContent: string;
  gap: string;
  minDirection: string;
  maxWidth: string;
  margin: string;
  background: string;
  borderRadius: string;
  height?: string;
  cursor?: string;
  minHeight?: string;
  radius?: string;
  componentCss?:string;

};

export const StackWrapper = styled.div<stackProps>`
display: flex;
flex-direction:${({ direction }) => (direction ? direction : 'column')};
width:${({ width }) => (width ? width : '100%')};
padding:${({ padding }) => padding};
align-items:${({ alignItems }) => alignItems};
max-width:${({ maxWidth }) => maxWidth};
justify-content:${({ justifyContent }) => justifyContent};
gap:${({ gap }) => gap};
background:${({ background }) => background};
margin:${({ margin }) => margin};
height:${({ height }) => height};
min-height:${({ minHeight }) => minHeight};
border-radius:${({ borderRadius }) => borderRadius};
position:relative;
${({componentCss})=>componentCss};
cursor: ${({ cursor }) => cursor};
@media(max-width:768px){
    h1{
        font-size:1.3rem;
    }
flex-direction:${({ minDirection }) => minDirection};
}
`;
