import { useEffect, useState } from "react";

const Box = ({ val, setStore, popped }) => {
  const [turned, setTurned] = useState(false);
  useEffect(() => {
    if (popped === val) {
      // Perform your action when `popped` is equal to `val`
      // You can put your code here to perform the action
      setTurned(false);
    }
  }, [popped, val]);
  const handledTurned = (i) => {
    if (turned) setStore((prev) => prev.filter((item) => item !== i));
    else setStore((prev) => prev.concat(i));
    setTurned((prev) => !prev);
  };
  return (
    <div
      className={`box ${val === 4 ? "smiley" : ""} ${turned ? "green" : ""}`}
      onClick={val !== 4 ? (e) => handledTurned(val) : () => {}}
    >
      {val === 4 ? "" : ``}
    </div>
  );
};

export default Box;
