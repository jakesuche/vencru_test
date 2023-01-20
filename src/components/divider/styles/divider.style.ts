import styled from 'styled-components';
import { Color } from 'utils/constants/color';
import { DividerProp } from '../type';

export const Div = styled.div<DividerProp>`
  padding: ${({ gap }) => (gap ? gap : '1px')};
  > .divider {
    background: ${({ color }) => (color ? color : Color.grey200)};
    height: ${({ height }) => (height ? height : '1px')};
    width: ${({ width }) => (width ? width : '100%')};
  }
`;
