import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./App";
//
//

ReactDOM.render(
  <App />,
  // React.createElement(App),
  document.getElementById("app") as HTMLElement
);

if (module.hot) {
  // 当入口文件变化后重新执行当前入口文件
  module.hot.accept();
}
