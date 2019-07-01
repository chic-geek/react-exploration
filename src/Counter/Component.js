import React from "react";

class Counter extends React.Component {
  state = {
    count: 0,
  };

  increment = () => {
    this.setState((prevState, props) => {
      const newCount = prevState.count + 1;
      props.onCountUpdate(newCount);
      return { count: newCount };
    });
  };

  decrement = () => {
    this.setState((prevState, props) => {
      const newCount = prevState.count - 1;
      props.onCountUpdate(newCount);
      return { count: newCount };
    });
  };

  render() {
    return (
      <div>
        <div>Count: {this.state.count}</div>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
