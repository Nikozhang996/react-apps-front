import React, { useState, FC } from "react";

const Ref: FC = () => {
  const [value, setValue] = useState<Object[]>([{ key: 1, value: "1" }]);

  const setAsyncData = function () {
    setTimeout(function () {
      setValue(
        (value) => [...value, { key: value[value.length - 1].key + 1, value: value[value.length - 1].value + 1 }],
        20
      );
    });
  };

  const getData = function () {
    console.log(arguments);
    console.log(value);
  };

  return (
    <section>
      <span>{JSON.stringify(value)}</span>
      <hr />
      <button style={{ display: "inline-block" }} onClick={setAsyncData}>
        set data
      </button>

      <button style={{ display: "inline-block" }} onClick={getData}>
        get datte
      </button>
    </section>
  );
};

export default Ref;
