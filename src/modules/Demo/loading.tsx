import React from "react";
import { BrowserRouterProps } from "react-router-dom";

interface IProps extends BrowserRouterProps {
  state: boolean;
}

const Loading: React.FC<IProps> = function (props) {
  return <section>loading……</section>;
};

export default Loading;
