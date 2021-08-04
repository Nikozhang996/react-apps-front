import React, { FC, Props, useMemo, useState } from "react";

export interface IProps extends Props<FC> {
  value: number;
}

const ChildComponent = (props: IProps): JSX.Element => {
  // console.log(props);

  return (
    <section>
      {props.children}:{props.value}
    </section>
  );
};

export default ChildComponent;
