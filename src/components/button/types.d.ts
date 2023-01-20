export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  borderRadius?: string;
  gap?: number | string;
  margin?: number | string
  
}