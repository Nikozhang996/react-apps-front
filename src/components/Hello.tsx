import * as React from "react";
import './style.scss';

export interface HelloProps {
  name: string;
  age: number;
}

export default function (props: HelloProps) {
    return <p className="title">
        Hello from {props.name} and {props.age}!
    </p>
};
