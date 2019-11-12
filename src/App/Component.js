import React from 'react';
import Count from "../Count";
import ShoppingList from "../ShoppingList";

function App() {
  return (
    <React.Fragment>
      <h1>Count example:</h1>
      <Count />

      <h1>Shopping list example:</h1>
      <ShoppingList />
    </React.Fragment>
  );
}

export default App;
