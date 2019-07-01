import React from "react";

// first we need to create our new context using the createContext api.
const MyContext = React.createContext();

// the provider will supply the application state to the child components.
class MyProvider extends React.Component {
  state = {
    name: "Chris",
    age: 34,
  };

  getAYearYounger = () => {
    this.setState({
      age: this.state.age > 0 ? this.state.age - 1 : this.state.age,
    });
  };

  growAyearOlder = () => {
    this.setState({
      age: this.state.age + 1,
    });
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          growAyearOlder: this.growAyearOlder,
          getAYearYounger: this.getAYearYounger,
        }}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

const Person = () => (
  <div>
    <MyContext.Consumer>
      {(context) => (
        <React.Fragment>
          <p>Name: {context.state.name}</p>
          <p>Age: {context.state.age}</p>

          <button onClick={context.getAYearYounger}>Younger</button>
          <button onClick={context.growAyearOlder}>Older</button>
        </React.Fragment>
      )}
    </MyContext.Consumer>
  </div>
);

const Family = () => (
  <div>
    <Person />
  </div>
);

const App = () => (
  <MyProvider>
    <div className="App">
      <p>I'm the app</p>
      <Family />
    </div>
  </MyProvider>
);

export default App;
