import { useState } from "react";

const UseStateGotcha = () => {
  const [count, setCount] = useState(0);
  const increaseByOne = () => {
    setTimeout(() => {
      setCount(count + 1);
    }, 1200);
  };
  return (
    <>
      <h2>{count}</h2>
      <button className="btn" onClick={increaseByOne}>
        Increase
      </button>
    </>
  );
};

export default UseStateGotcha;
