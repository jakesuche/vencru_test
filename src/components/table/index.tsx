import React from "react";
import { DataTable, TableWrapper } from "./styles/table.styles";
import TableRows from "./table-data";
import TableHeaders from "./table-headers";
import { tableProps } from "./type";

const Table: React.FC<tableProps> = ({ tableHeaders, tableData }) => {
  return (
    <TableWrapper
      
    >
      <DataTable>
        <TableHeaders tableHeaders={tableHeaders} />
        <TableRows tableData={tableData} />
      </DataTable>
    </TableWrapper>
  );
};

export default Table;
