/*
https://juejin.im/post/6844904175831089165
*/
import React, { Component } from "react";

interface IProps {
  value: number;
  children?: React.ReactNode;
}

interface IState {
  count: number;
}

class Types extends Component<IProps, IState> {
  state = {
    count: 0,
  };

  render() {
    return <div>class components {this.props.value}</div>;
  }
}

const FC: React.FC<IProps> = function (props) {
  return <div>function components {props.value}</div>;
};

export default function App() {
  return (
    <section>
      <Types value={2 ** 10} />
      <FC value={2 ** 8} />
    </section>
  );
}
