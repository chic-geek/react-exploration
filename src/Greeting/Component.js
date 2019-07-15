import React, { useState } from "react";
import Message from "../Message";

function Greeting() {
  const [greeting, setGreeting] = useState();

  function handleInputChange(e) {
    setGreeting(e.target.value);
  }

  return (
    <React.Fragment>
      <label
        htmlFor="greeting"
        style={{ display: "block", marginBottom: "1rem" }}>
        Type your greeting:
      </label>
      <input id="greeting" value={greeting} onChange={handleInputChange} />

      <Message value={greeting} />
    </React.Fragment>
  );
}

export default Greeting;
