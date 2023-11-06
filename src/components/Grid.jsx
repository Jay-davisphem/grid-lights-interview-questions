import "./styles.css";
import Box from "./Box";
import { useEffect, useState } from "react";

const Grid = ({ size }) => {
  const [store, setStore] = useState([]);
  const [popped, setPopped] = useState();

  const boxes = new Array(size * size).fill(0).map((_, index) => index);

  useEffect(() => {
    if (store.length === size * size - 1) {
      // Perform your action when the store array reaches the specific length
      // In this example, we pop elements one by one with a delay
      const delay = 300; // Delay between each pop operation in milliseconds

      const popItemsWithDelay = () => {
        if (store.length > 0) {
          setTimeout(() => {
            const poppedItem = store.pop();
            setPopped(poppedItem);
          }, delay);
        }
      };

      const interval = setInterval(popItemsWithDelay, delay);

      return () => {
        // Cleanup: clear the interval when the component unmounts
        clearInterval(interval);
      };
    }
  }, [store, size]);

  return (
    <div
      className="grid"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${size}, 1fr)`,
        gap: "10px",
        width: "350px",
        height: "350px",
        margin: "0 auto"
      }}
    >
      {boxes.map((item, index) => (
        <Box key={item} val={item} setStore={setStore} popped={popped} />
      ))}
    </div>
  );
};

export default Grid;
