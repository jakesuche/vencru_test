
import { StackWrapper } from './styles/stack.styles';
import { StackProps } from './type';

const Stack = ({
  children,
  direction,
  justifyContent,
  alignItems,
  componentCss,

  ...restProps
}: StackProps) => {
  return (
    <StackWrapper
      justifyContent={justifyContent}
      direction={direction}
      alignItems={alignItems}
      componentCss={componentCss}
      
      {...restProps}
    >
      {children}
    </StackWrapper>
  );
};

export default Stack;
