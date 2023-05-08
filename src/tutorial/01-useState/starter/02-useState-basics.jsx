import { useState } from "react";

const UseStateBasics = () => {
  const [count, setCount] = useState(9);

  const onClickHandler = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h4>You clicked {count} Times</h4>
      <button className="btn" onClick={onClickHandler}>
        Click Me
      </button>
    </>
  );
};

export default UseStateBasics;
