/* 
https://www.cnblogs.com/Wayou/p/react_typescript_forwardref.html
*/
import React, {
  useState,
  useMemo,
  useRef,
  createRef,
  forwardRef,
  InputHTMLAttributes,
  FC,
  useEffect,
  useCallback,
} from "react";

const FancyInput = React.forwardRef<HTMLInputElement, any>((props, ref) => {
  return <input type="text" ref={ref} className="fancy-input" {...props} />;
});

const Ref: FC = () => {
  // const [inputRef, setInputRef] = useState(createRef<HTMLInputElement>());
  const [value, setValue] = useState<number>(10);
  const [childValue, setChildValue] = useState<number>(0);
  const valueRef = useRef<number>(value);
  const timer = useRef<NodeJS.Timeout>();
  useEffect(() => {
    timer.current = setInterval(() => {
      setValue(() => (valueRef.current += 1));
    }, 1000);

    return function () {
      clearInterval(timer.current!);
    };
  }, []);

  const increment = useCallback(() => {
    setValue((value) => value + 1);
    setChildValue((value) => value + 1);
  }, []);

  const decrement = useCallback(() => {
    setValue((value) => value - 1);
    setChildValue((value) => value - 1);
  }, []);

  return (
    <section>
      {/*{useMemo(<ChildComponent value={childValue}/>, [childValue])}*/}
      {/*<FancyInput ref={inputRef} placeholder="abc" />*/}
      <span>{value}</span>
      <hr />
      <button style={{ display: "inline-block" }} onClick={increment}>
        加一
      </button>

      <button style={{ display: "inline-block" }} onClick={decrement}>
        减一
      </button>
    </section>
  );
};

export default Ref;
