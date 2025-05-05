import { useState } from "react";

export default function StateBasic({ init }) {
  const [count, setCount] = useState(init);
  console.log(`count is ${count}`);

  const handleClick = () => setCount(count + 1);
  const decreseCount = () => setCount(count - 1);

  return (
    <>
      <button onClick={handleClick}>カウント</button>
      <button onClick={decreseCount}>カウントを減らす</button>
      <p>{count}回、カウントされました。</p>
    </>
  );
}
