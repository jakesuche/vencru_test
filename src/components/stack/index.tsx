
import { StackWrapper } from './styles/stack.styles';
import { StackProps } from './type';

const Stack = ({
  children,
  direction,
  justifyContent,
  alignItems,

  ...restProps
}: StackProps) => {
  return (
    <StackWrapper
      justifyContent={justifyContent}
      direction={direction}
      alignItems={alignItems}
      
      {...restProps}
    >
      {children}
    </StackWrapper>
  );
};

export default Stack;
