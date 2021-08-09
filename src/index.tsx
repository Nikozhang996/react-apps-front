import React from "react";
import ReactDOM from "react-dom";

import './styles/index.scss'
import Router from "./router";

ReactDOM.render(<Router />, document.getElementById("app") as HTMLElement);

if (module.hot) {
  // 当入口文件变化后重新执行当前入口文件
  module.hot.accept();
}
