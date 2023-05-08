const ErrorExample = () => {
  var count = 0;
  const increaseByOne = () => {
    count = count + 1;
    console.log({ count });
  };
  return (
    <div>
      <h2>{count}</h2>
      <button className="btn" onClick={increaseByOne}>
        Increment
      </button>
    </div>
  );
};

export default ErrorExample;
