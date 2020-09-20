/*
https://juejin.im/post/6844904175831089165
*/
import React, { Component, useState } from "react";

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

const Fc: React.FC<IProps> = function (props) {
  const [count, setCount] = useState<number | string>(0);

  setTimeout(function () {
    setCount(100);
  }, 1000);

  return (
    <div>
      function components {props.value}-{count}
    </div>
  );
};

function FunctionComponentTwo(props: IProps) {
  const { children } = props;

  return (
    <div>
      function components two {props.value}
      {children}
    </div>
  );
}

export default function App() {
  return (
    <section>
      <Types value={2 ** 10} />
      <Fc value={2 ** 8} />
      <FunctionComponentTwo value={2 ** 12} />
    </section>
  );
}
