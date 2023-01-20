import React from 'react';
import { TextStyle } from './styles/text.style';
import { TextProps } from './type';

const Typography = <E extends React.ElementType = 'div'>({
  justifyContent,
  color,
  weight,
  width,
  align,
  margin,
  padding,
  bgColor,
  size,
  opacity,
  children,
  as,
  border,
  fontStyle,
  alignItems,
  componentCss,
  radius,
  gap,
  cursorType,
  lHeight,
  height,
  className
}: TextProps<E>) => {
  let Component = as || 'div';
  return (
    <TextStyle
      fontStyle={fontStyle}
      justifyContent={justifyContent}
      border={border}
      margin={margin}
      opacity={opacity}
      gap={gap}
      color={color}
      width={width}
      align={align}
      size={size}
      bgColor={bgColor}
      weight={weight}
      padding={padding}
      radius={radius}
      alignItems={alignItems}
      componentCss={componentCss}
      cursorType={cursorType}
      lHeight={lHeight}
      height={ height}
      className={className}
    >
      <Component>{children}</Component>
    </TextStyle>
  );
};

export default Typography;
