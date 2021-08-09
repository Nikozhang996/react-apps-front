import React from "react";

interface IProps {
  state: boolean;
}

const Loading: React.FC<IProps> = function (props) {
  return <section>loading</section>;
};

export default Loading;
