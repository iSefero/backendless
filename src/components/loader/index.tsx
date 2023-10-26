import React, { useState, useEffect } from "react";
import { styles } from "./styles";

export default function Loader() {
  const [dots, setDots] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDots((prevDots) => (prevDots < 3 ? prevDots + 1 : 0));
    }, 500);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div style={styles.wrapper}>
      <p style={styles.text}>Loading{Array(dots + 1).join(".")}</p>
    </div>
  );
}
