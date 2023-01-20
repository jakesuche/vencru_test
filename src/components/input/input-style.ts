import styled from "styled-components";
import { Color } from "utils/constants/color";

type Props = {
  maxWidth?: string | number;
  bgColor?: string;
  align?: string;
  margin?: string;
  padding?: string;
  color?: string;
  border?: string;
  show?: boolean;
  height?: string | number;
  justifyContent?: string;
  opacity?: string;
  borderRadius?: string;
  width?: string | number;
  phColor?: string;
  direction?: string;
  gap?: string;
  pr?: string;
  pt?: string;
  pl?: string;
  pb?: string;
  alignItems?: string;
};

export const InputElement = styled.input<Props>`
  position: relative;
  flex: 1 1 auto;
  min-width: 0px;
  display: block;
  width: 100%;
  padding: 0.375rem 0.5rem;
  font-size: 1rem;
  line-height: 1.5;
  color: rgb(53, 63, 80);
  font-weight: 500;
  background-color: rgb(255, 255, 255);
  background-clip: padding-box;
  border: none;
  appearance: none;
  border-radius: 10px 0px 0px 10px;
  outline: none;
  transition: border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;
`;

export const InputWrapper = styled.div<Props>`
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  align-items: stretch;
  width: ${({ width }) => (width ? width : "100%")};
  max-width: ${({ maxWidth }) => maxWidth};
  height: 44px;
  border: 1px solid ${Color.grey300};
  border-radius: 6px;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  background-color: ${Color.base};
  padding: 1px 2px;
`;

export const InputIcon = styled.span`
  display: flex;
  align-items: center;
  padding: 0.375rem 0.15rem 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  white-space: nowrap;
  border: none;
  border-radius: 0px 10px 10px 0px;
  background: rgb(255, 255, 255);
  position: relative;
  color: red;
  cursor: pointer;
`;


export const InputRadio = styled.input`
  input[type="radio"] {
    height: 1.2rem;
    width: 1.2rem;
    margin-right: 0.5rem;
}


`