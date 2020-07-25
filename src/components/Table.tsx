/**
 * https://gitee.com/jw-speed/zhufeng-public/tree/master/zf-table
 * */
import * as React from "react";

export interface IProps {
  columns: Array<Object>;
  data: Array<Object>;
}

export default function (props: IProps): HTMLElement {
  return (
    <table>
      <thead></thead>
      <tbody></tbody>
    </table>
  );
}
