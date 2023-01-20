import React from "react";
import { ButtonElement, ButtonGroupElement } from "./buttton-style";
import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({ width, borderRadius, children,gap }) => {
  return (
    <ButtonElement gap={gap} borderRadius={borderRadius} width={width}>
      {children}
    </ButtonElement>
  );
};

export const ButtonGroup: React.FC<ButtonProps> = ({
  children,
  margin,
  width,
}) => {
  return (
    <ButtonGroupElement width={width} margin={margin}>
      {children}
    </ButtonGroupElement>
  );
};

export default Button;
