import React from "react";
import UseStateExample from "../UseStateExample";
import UseEffectExample from "../UseEffectExample";
import UseEffectWithCleanupExample from "../UseEffectWithCleanupExample";

function App() {
  return (
    <React.Fragment>
      <UseStateExample />
      <UseEffectExample />
      <UseEffectWithCleanupExample />
    </React.Fragment>
  );
}

export default App;
