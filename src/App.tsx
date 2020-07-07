import * as React from "react";

interface Props {
  name: string;
  age: number;
}
export default function (props:Props) {
  return <h1>Hello {props.name},{props.age}</h1>;
}
