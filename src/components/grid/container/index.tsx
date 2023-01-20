import React from 'react';
import { ContainerProps } from '../type';
import { ContainerDiv } from './styles/container.style';

const Container: React.FC<ContainerProps> = React.forwardRef(
  ({ children, ...rest }, ref) => {
    return (
      <ContainerDiv ref={ref} {...rest}>
        {children}
      </ContainerDiv>
    );
  }
);

export default Container;

Container.displayName = 'Container';
