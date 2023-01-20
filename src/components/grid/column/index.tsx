import React from 'react';
import { ColumnProps } from '../type';
import { ColumnDiv } from './styles/column-style';

const Column: React.FC<ColumnProps> = React.forwardRef(
  ({ children, ...restProps }, ref) => {
    return (
      <ColumnDiv ref={ref} {...restProps}>
        {children}
      </ColumnDiv>
    );
  }
);

export default Column;

Column.displayName = 'Column';
