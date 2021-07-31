/* 
https://www.cnblogs.com/Wayou/p/react_typescript_forwardref.html
*/
import React, { useState, useRef, createRef, forwardRef, InputHTMLAttributes } from "react";

const FancyInput = React.forwardRef<HTMLInputElement, any>((props, ref) => {
  return <input type="text" ref={ref} className="fancy-input" {...props} />;
});

export default function Ref() {
  const [inputRef, setInputRef] = useState(createRef<HTMLInputElement>());

  return (
    <section>
      <FancyInput ref={inputRef} placeholder="abc" />
      <hr />
      <button
        style={{ display: "inline-block" }}
        onClick={() => {
          if (inputRef.current) {
            console.log(inputRef.current.value);
          }
        }}
      >
        按钮
      </button>

      <button
        style={{ display: "inline-block" }}
        onClick={() => {
          if (inputRef.current) {
            console.log(inputRef.current.value);
          }
        }}
      >
        按钮
      </button>
    </section>
  );
}
