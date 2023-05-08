import { useState } from "react";

const ShortCircuitOverview = () => {
  const [name, setName] = useState("Hello");
  const [text, setText] = useState("");
  return (
    <>
      <h4>False Or : {text || "Hello world"}</h4>
      <h4>False And : {text && "Hello world"}</h4>
      <h4>Truthy Or : {name || "Hello world"}</h4>
      <h4>Truthy And : {name && "Hello world"}</h4>
    </>
  );
};
export default ShortCircuitOverview;
