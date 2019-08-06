import React, { useReducer } from "react";

function Count() {
  const initialCountState = 0;
  const [count, dispatch] = useReducer((state, action) => {
    switch (action) {
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        return state - 1;
      default:
        return state;
    }
  }, initialCountState);

  return (
    <div>
      {count}
      <div>
        <button onClick={() => dispatch("DECREMENT")}>Decrement</button>
        <button onClick={() => dispatch("INCREMENT")}>Increment</button>
      </div>
    </div>
  );
}

export default Count;
