import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(1);

  return (
    <>
      <button
        className="px-3 py-1 border-2 border-gray-200 hover:bg-[#c19a83]"
        onClick={() => count > 1 && setCount(count - 1)}
      >
        -
      </button>
      <p className="px-3 py-1 border-t-2 border-b-2 border-l-0 border-r-0 border-gray-200">
        {count}
      </p>
      <button
        className="px-3 py-1 border-2 border-gray-200 hover:bg-[#c19a83]"
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
    </>
  );
};

export default Counter;
