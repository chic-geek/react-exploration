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
      </div>
    );
  }
}

export default App;
