import React, { useReducer } from "react";
import initialCountState from "./initialState";
import countReducer from "./reducer";

function Count() {
  const [count, dispatch] = useReducer(countReducer, initialCountState);

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
