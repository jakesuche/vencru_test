import styled from "styled-components";
import { Color } from "utils/constants/color";

type Props = {
    borderRadius?:string | number;
    width?:number | string;
    margin?:string | number
    gap?:number | string
}

export const ButtonElement = styled.button<Props>`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 16px;
  width: ${({width})=>width};
  height: 40px;
  background: ${Color.base};
  border: 1px solid ${Color.grey300};
  border-radius: ${({borderRadius})=>borderRadius};
  flex: none;
  order: 0;
  gap:${({gap})=>gap};
  flex-grow: 0;
  cursor: pointer;
`;

export const ButtonGroupElement = styled.div<Props>`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
width: ${({width})=>width};
height: 40px;
filter: drop-shadow(0px 1px 2px rgba(16, 24, 40, 0.05));
flex: none;
flex-grow: 0;
overflow: auto;
margin:${({margin})=>margin};
-ms-overflow-style: none;  /* Internet Explorer 10+ */
scrollbar-width: none; 
::-webkit-scrollbar{
  display: none; 
}
`
