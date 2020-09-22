/*
https://www.cnblogs.com/Wayou/p/react_typescript_forwardref.html
*/

import React, { createContext } from "react";

interface IContext {
  a: string | number;
  b: string | number;
}

const ThemeContext = createContext<IContext>({ a: 1, b: 2 });
const { Provider, Consumer } = ThemeContext;

class A extends React.Component<any, any> {
  static contextType = ThemeContext;

  render() {
    return <span>{this.context.a}</span>;
  }
}

export default function Context() {
  return (
    <Provider value={{ a: "物是人非啊", b: 123 }}>
      <A />
      {/*{TestContext}*/}
    </Provider>
  );
}
