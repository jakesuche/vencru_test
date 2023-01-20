//Polymorphic

type TextOwnProps<E extends React.ElementType> = {
  color?: string;
  size?: string;
  weight?: string;
  padding?: string;
  width?: string;
  align?: string;
  children: React.ReactNode;
  opacity?: string;
  bgColor?: string;
  margin?: string;
  as?: E;
  border?: string;
  fontStyle?: 'oblique' | 'italic' | 'underline' | 'normal';
  justifyContent?: string;
  alignItems?: string;
  componentCss?: string;
  radius?: string;
  gap?: string;
  cursorType?: string;
  lHeight?:string
  height?: string;
};

export type TextProps<E extends React.ElementType> = TextOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>;
