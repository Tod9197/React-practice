import { useState } from "react";

export default function Statebasic({ init }) {
  const [count, setCount] = useState(init);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <button onClick={handleClick}>カウント</button>
      <p>{count}回、クリックされました。</p>
    </>
  );
}
