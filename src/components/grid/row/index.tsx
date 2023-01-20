import React from 'react';
import { RowProps } from '../type';
import { RowDiv } from './styles/row.styles';

const Row: React.FC<RowProps> = React.forwardRef(
  ({ children, ...rest }, ref) => {
    return (
      <RowDiv ref={ref} {...rest}>
        {children}
      </RowDiv>
    );
  }
);

Row.displayName = 'Row';

export default Row;
