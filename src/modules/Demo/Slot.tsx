import React, {ReactChild, ReactChildren} from "react";

interface IChild {
  children?: ReactChildren;
}

function Child(props: IChild) {
  return (
    <div>
      <h3>children</h3>
      {props.children}
    </div>
  );
}



interface IChildWithName {
  top: Function;
  bottom: Function;
}
function ChildWithName(props: IChildWithName) {
  const state = "ChildWithName：";
  return (
    <div>
      {props.top && props.top(state)}
      <p>--------------------</p>
      {props.bottom && props.bottom(state)}
    </div>
  );
}

export default function Slot() {
  return (
    <div>
      <Child>
        <div>1：物是人非</div>
        <div>2：vladimir</div>
        <div>2：vladimir</div>
      </Child>

      <hr />

      <ChildWithName
        top={(state: string) => {
          return state + "VLADIMIR";
        }}
        bottom={(state: string) => {
          return state + "BIO卡洛斯";
        }}
      />
    </div>
  );
}
