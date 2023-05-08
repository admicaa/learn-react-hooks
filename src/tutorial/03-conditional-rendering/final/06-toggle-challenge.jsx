import { useEffect, useState } from "react";

const ToggleChallenge = () => {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div>
      <button className="btn" onClick={() => setShowAlert(!showAlert)}>
        toggle alert
      </button>
      {showAlert && <Alert />}
    </div>
  );
};

const Alert = () => {
  useEffect(() => {
    const someFunc = () => {};
    window.addEventListener("scroll", someFunc);
    return () => window.removeEventListener("scroll", someFunc);
  }, []);
  return <div className="alert alert-danger">hello world</div>;
};
export default ToggleChallenge;
