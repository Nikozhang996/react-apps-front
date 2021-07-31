/* 
https://www.cnblogs.com/Wayou/p/react_typescript_forwardref.html
*/
import React, { useState, useMemo, useRef, createRef, forwardRef, InputHTMLAttributes, FC } from "react";

import ChildComponent from "../../components/child-component";

const FancyInput = React.forwardRef<HTMLInputElement, any>((props, ref) => {
  return <input type="text" ref={ref} className="fancy-input" {...props} />;
});

const Ref: FC = () => {
  // const [inputRef, setInputRef] = useState(createRef<HTMLInputElement>());
  const [value, setValue] = useState<number>(0);
  const [childValue, setChildValue] = useState<number>(0);
  const Child = useMemo(() => {
    return ChildComponent;
  }, []);
  console.log(value);
  return (
    <section>
      <ChildComponent value={10}>子组件</ChildComponent>
      {/*{useMemo(<ChildComponent value={childValue}/>, [childValue])}*/}
      {/*<FancyInput ref={inputRef} placeholder="abc" />*/}
      <span>{value}</span>
      <hr />
      <button
        style={{ display: "inline-block" }}
        onClick={() => {
          setValue((value) => value + 1);
          setChildValue((value) => value + 1);
        }}
      >
        加一
      </button>

      <button
        style={{ display: "inline-block" }}
        onClick={() => {
          setValue((value) => value - 1);
          setChildValue((value) => value - 1);
        }}
      >
        减一
      </button>
    </section>
  );
};

export default Ref;
