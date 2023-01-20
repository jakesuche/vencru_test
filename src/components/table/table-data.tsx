import React from "react";
import { TableCheckBox } from "./styles/table.styles";
import Download from "components/icons/download";

type dataListType = string[];

type rowProps = {
  tableData: {}[];
};

const TableRows: React.FC<rowProps> = ({ tableData }) => {
  return (
    <tbody>
      {tableData?.map((item, i) => {
        let dataList: dataListType = item && Object.values(item);
        return (
          <tr key={i}>
            <td>
              <TableCheckBox />
            </td>

            {dataList.map((data, i) => (
              <td key={i}>{data}</td>
            ))}
            <td>
              <Download />
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableRows;
