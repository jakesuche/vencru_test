export interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  borderRadius?: string;
  boxSize?: string;
  icon?:JSX.Element;
  maxWidth?: string;
}