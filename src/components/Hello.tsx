import * as React from "react";

export interface HelloProps {
  name: string;
  age: number;
}

export default function (props: HelloProps) {
    return <h1>
        Hello from {props.name} and {props.age}!
    </h1>
};
