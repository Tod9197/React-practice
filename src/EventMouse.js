import { useState } from "react";

export default function MouseEvent({ beforeSrc, afterSrc, alt }) {
  const [current, setCurrent] = useState(beforeSrc);

  const handleEnter = () => setCurrent(afterSrc);
  const handleLeave = () => setCurrent(beforeSrc);

  return (
    <img
      src={current}
      alt={alt}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    />
  );
}
