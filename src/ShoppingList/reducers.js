export const ShoppingListReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        { id: state.length, name: action.payload },
      ];

    case "REMOVE":
      return state.filter((_, index) => index !== action.index);

    case "RESET":
      return [];

    default:
      return state;
  }
};
