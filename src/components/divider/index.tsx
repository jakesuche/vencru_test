import React from 'react';
import { Div } from './styles/divider.style';
import { DividerProp } from './type';

const Divider = ({ color, gap, width, height }: DividerProp) => {
  return (
    <Div color={color} gap={gap} height={height} width={width}>
      <div className="divider"/>
    </Div>
  );
};

export default Divider;
