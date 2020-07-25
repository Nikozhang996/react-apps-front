export interface ITableData {
  id: string | number;
  name: string | number;
  age: string | number;
  address: string | number;
  date: string | number;
}

export interface ITableColumn {
  title: string;
  key: string;
}

export interface IProps {
  data: Array<ITableData>;
  columns: Array<ITableColumn>;
  border?: Boolean;
}
