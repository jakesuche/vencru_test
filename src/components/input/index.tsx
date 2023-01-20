
import { InputElement, InputWrapper, InputIcon } from "./input-style";
import { InputProps } from "./type";

const Input: React.FC<InputProps> = ({ ref, icon, ...res }) => {
  return (
    <InputWrapper {...res}>
      {icon && <InputIcon>{icon}</InputIcon>}
      <InputElement {...res} />
    </InputWrapper>
  );
};

export default Input;
