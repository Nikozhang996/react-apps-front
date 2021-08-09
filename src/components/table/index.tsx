/**
 * https://gitee.com/jw-speed/zhufeng-public/tree/master/zf-table
 * */
import * as React from "react";
import { useState } from "react";
// interface
import { ITableData, IProps, ITableColumn } from "./interface";
// style
import "./index.scss";

export default function (props: IProps) {
  const [tableData, setTableData] = useState(props.data);
  const [tableColumns, setTableColumns] = useState(props.columns);

  return (
    <table className={["table-wrap"].join(" ")}>
      <thead className={"table-header"}>
        <tr className={"table-header-tr"}>
          {tableColumns.map((column: ITableColumn) => {
            return (
              <th className={["table-header-th", props.border ? "border" : ""].join(" ")} key={column.key}>
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
                  <td className={["table-body-td", props.border ? "border" : ""].join(" ")} key={column.key}>
                    {row[column.key]}
                    {/* {(row as any)[column.key]} */}
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

const tableColumns: Array<ITableColumn> = [
  {
    title: "Name",
    key: "name",
  },
  {
    title: "Age",
    key: "age",
  },
  {
    title: "Address",
    key: "address",
  },
];
const tableData: Array<ITableData> = [
  {
    id: 1,
    name: "John Brown",
    age: 18,
    address: "New York No. 1 Lake Park",
    date: "2016-10-03",
  },
  {
    id: 2,
    name: "Jim Green",
    age: 24,
    address: "London No. 1 Lake Park",
    date: "2016-10-01",
  },
  {
    id: 3,
    name: "Joe Black",
    age: 30,
    address: "Sydney No. 1 Lake Park",
    date: "2016-10-02",
  },
  {
    id: 4,
    name: "Jon Snow",
    age: 26,
    address: "Ottawa No. 2 Lake Park",
    date: "2016-10-04",
  },
  {
    id: 5,
    name: "John Brown",
    age: 18,
    address: "New York No. 1 Lake Park",
    date: "2016-10-03",
  },
  {
    id: 6,
    name: "Jim Green",
    age: 24,
    address: "London No. 1 Lake Park",
    date: "2016-10-01",
  },
  {
    id: 7,
    name: "Joe Black",
    age: 30,
    address: "Sydney No. 1 Lake Park",
    date: "2016-10-02",
  },
  {
    id: 8,
    name: "Jon Snow",
    age: 26,
    address: "Ottawa No. 2 Lake Park",
    date: "2016-10-04",
  },
];
