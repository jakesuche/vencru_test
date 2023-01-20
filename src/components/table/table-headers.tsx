import React from 'react';
import { TableCheckBox } from './styles/table.styles';

type headerProps = {
  tableHeaders: string[];
};

const TableHeaders: React.FC<headerProps> = ({ tableHeaders }) => {
  return (
    <thead>
      <tr>
        <th style={{width:10}} ><TableCheckBox /></th>
        {tableHeaders?.map((header, i) => (
          <th style={{width:i === 0 ? 400 : ''}} key={i}>{header}</th>
        ))}
        <td ></td>
      </tr>
    </thead>
  );
};

export default TableHeaders;
