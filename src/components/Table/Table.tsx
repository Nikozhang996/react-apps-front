/**
 * https://gitee.com/jw-speed/zhufeng-public/tree/master/zf-table
 * */
import * as React from "react";
import { useState } from "react";
// interface
import { ITableData, IProps, ITableColumn } from "./interface";
// style
import "./style.scss";

export default function (props: IProps) {
  const [tableData, setTableData] = useState(props.data);
  const [tableColumns, setTableColumns] = useState(props.columns);

  return (
    <table className={["table-wrap"].join(" ")}>
      <thead className={"table-header"}>
        <tr className={"table-header-tr"}>
          {tableColumns.map((column: ITableColumn) => {
            return (
              <th
                className={[
                  "table-header-th",
                  props.border ? "border" : "",
                ].join(" ")}
                key={column.key}
              >
                {column.title}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody className={"table-body"}>
        {tableData.map((row: ITableData) => {
          return (
            <tr className={"table-body-tr"} key={row.id}>
              {tableColumns.map((column: ITableColumn) => {
                return (
                  <td
                    className={[
                      "table-body-td",
                      props.border ? "border" : "",
                    ].join(" ")}
                    key={column.key}
                  >
                    {row[column.key]}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
