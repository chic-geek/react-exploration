import React, { useState } from "react";

const App = () => {
  // pattern #1
  // const [{ count, count2 }, setCount] = useState({ count: 10, count2: 20 });

  // return (
  //   <div>
  //     <button
  //       onClick={() =>
  //         setCount((currentState) => ({
  //           ...currentState,
  //           count: currentState.count + 1,
  //         }))
  //       }>
  //       Increment
  //     </button>

  //     <div>Count1: {count}</div>
  //     <div>Count2: {count2}</div>
  //   </div>
  // );

  // pattern #2
  const [count, setCount] = useState(10);
  const [count2, setCount2] = useState(20);

  return (
    <div>
      <button
        onClick={() => {
          setCount((c) => c + 1);
          setCount2((c) => c + 1);
        }}>
        Increment
      </button>

      <div>Count1: {count}</div>
      <div>Count2: {count2}</div>
    </div>
  );
};

export default App;
