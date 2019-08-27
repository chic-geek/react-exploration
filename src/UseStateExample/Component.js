import React, { useState } from "react";

function UseStateExample() {
  // - Set a state variable and initialise to the value of 0.
  // - State variables are preserved over re - renders.
  // - Destructure the second item (a function) returned from useState to another variable.
  const [count, setCount] = useState(0);

  // - Read the state by calling the variable, as opposed to using this.state.count.
  // - Call the setCount function, passing it some params. Equivelent to this.setState({ ... }).
  // - The updater function of useState() ALWAYS overwrites the old variable rather than merging
  // like this.setState({ ... }) used to do in class components.
  return (
    <div>
      <h3>useState example:</h3>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default UseStateExample;
