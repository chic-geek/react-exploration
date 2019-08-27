import React, { useState } from "react";

function StateExample() {
  // Set a state variable and initialise to the value of 0.
  // State variables are preserved over re - renders.
  // Destructure the second item (a function) returned from useState to another variable.
  const [count, setCount] = useState(0);

  // Read the state by calling the variable, as opposed to using this.state.count.
  // Call the setCount function, passing it some params. Equivelent to this.setState({ ... }).
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default StateExample;
