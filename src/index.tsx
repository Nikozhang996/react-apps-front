import * as React from "react";
import * as ReactDOM from "react-dom";

// import Hello from "./components/Hello";

ReactDOM.render(
  // <Hello name="TypeScript" age={10} />,
  <h1>adsf</h1>,
  document.getElementById("root") as HTMLElement
);

if (module.hot) {
  // 当入口文件变化后重新执行当前入口文件
  module.hot.accept();
}
