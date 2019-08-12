function countReducer(currentState, action) {
  switch (action) {
    case "INCREMENT":
      return currentState + 1;
    case "DECREMENT":
      return currentState > 0 ? currentState - 1 : currentState;
    default:
      return currentState;
  }
}

export default countReducer;
