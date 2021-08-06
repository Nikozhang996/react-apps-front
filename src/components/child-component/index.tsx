import React, { FC, Props, useMemo, useState } from "react";

export interface IProps extends Props<FC> {
  value: number;
}

const ChildComponent = (props: IProps): JSX.Element => {
  return (
    <section>
      {props.children}:{props.value}
    </section>
  );
};

export default ChildComponent;
