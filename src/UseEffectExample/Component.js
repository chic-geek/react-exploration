import React, { useState, useEffect } from "react";

function UseEffectExample() {
  const [count, setCount] = useState(0);

  // - useEffect is run AFTER EVERY render, including the initial render.
  // - useEffect is ALWAYS passed a function. It will be a different function
  // on every render, which is intentional and let's us read the count variable
  // without worrying about it becoming stale.
  useEffect(() => {
    document.title = `${count}x clicked`;
  });

  return (
    <div>
      <h3>useEffect example:</h3>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default UseEffectExample;
