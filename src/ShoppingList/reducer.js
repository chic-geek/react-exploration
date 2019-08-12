function shoppingListReducer(currentState, action) {
  switch (action.type) {
    case "ADD":
      return [
        ...currentState,
        {
          id: currentState.length,
          name: action.name,
        },
      ];
    case "REMOVE":
      return currentState.filter((_, index) => index !== action.index);
    case "CLEAR":
      return [];
    default:
      return currentState;
  }
}

export default shoppingListReducer;
