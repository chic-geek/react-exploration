import React from "react";
import Chance from "chance";
import FilterList from "../FilterList";

let chance = new Chance();
let mockItems = [];
let count = 25;
while (count--) {
  mockItems.push(`${chance.name()}`);
}

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Filtering</h1>
        <FilterList items={mockItems} />
      </div>
    );
  }
}

export default App;
