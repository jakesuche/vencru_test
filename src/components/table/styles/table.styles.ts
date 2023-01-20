import styled from 'styled-components';
import { Color } from 'utils/constants/color';


type Iprops = {
  css?: string;
};

export const TableWrapper = styled.div<Iprops>`
  box-sizing: border-box;
  border: 1px solid ${Color.grey200};
  border-radius: 10px;
  width: 100%;
  background: ${Color.base};
  // padding: 0.5rem 0.5rem;
  overflow: scroll;

  // position: relative;

  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  @media (max-width: 640px) {
    padding: 1rem 0.5rem;
  }
`;

export const DataTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  thead{
    background-color:${Color.grey50};
  };
  
  tbody tr {
    border-top: 1px solid ${Color.grey100};
  }
  tr {
    text-align: left;
    font-size: 0.9rem;
    th {
      padding: 0.6rem 1rem;
      color: ${Color.grey500};
      white-space: nowrap;
      font-size: 12px;
      font-weight500;
     
    }
    td {
      padding: 1rem;
      font-weight: 300;
      white-space: nowrap;
    }
  }
`;

export const TableCheckBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border: 1px solid ${Color.grey300};
  border-radius: 5px;
  cursor: pointer;
`;
