import React from "react";
import Counter from "../Counter";

class App extends React.Component {
  state = {
    currentCount: null,
  };

  handleCount = (countValue) => {
    this.setState({ currentCount: countValue });
  };

  render() {
    return (
      <div>
        <Counter onCountUpdate={this.handleCount} />
        <h2>The count is: {this.state.currentCount === null ? 0 : this.state.currentCount}</h2>
      </div>
    );
  }
}

export default App;
