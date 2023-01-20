import styled from 'styled-components'
import { Color } from 'utils/constants/color';


export const Avartars = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
      justify-content: flex-end;
`;

export const Avartar = styled.div`
  align-items: center;
  color: #fff;
 
 
  border-radius: 50%;
  display: flex;
  flex-direction: row;
  font-family: Nunito-Bold;
  font-size: 1rem;
  height: 40px;
  overflow: hidden;
  text-align: center;
  width: 40px;
  border:none;

  :not(:first-child) {
    margin-right: -1.1rem;
  }

  img {
    margin-right: 0.5rem;
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

export const AvartaPlus = styled(Avartar)`
  background:${Color.grey50};
  font-weight:500;
  
  span {
    width: 100%;
    color:${Color.grey600}
  }
`;