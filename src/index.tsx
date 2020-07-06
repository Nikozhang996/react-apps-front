import * as React from "react";
import * as ReactDOM from "react-dom";

// import Hello from "./components/Hello";

ReactDOM.render(<h1>adf</h1>, app);

if (module.hot) {
  // 当入口文件变化后重新执行当前入口文件
  module.hot.accept();
}
