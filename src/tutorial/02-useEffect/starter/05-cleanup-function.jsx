import { useState } from "react";

const CleanupFunction = () => {
  const [show, setShow] = useState(false);
  return (
    <section>
      <button className="btn" onClick={() => setShow(!show)}>
        Toggle Component
      </button>
      {show && (
        <>
          <h2>Hello There</h2>
        </>
      )}
    </section>
  );
};

export default CleanupFunction;
