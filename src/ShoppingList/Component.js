import React, { useReducer, useRef } from "react";

function ShoppingList() {
  const inputRef = useRef();
  const [items, dispatch] = useReducer((currentState, action) => {
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
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: "ADD",
      name: inputRef.current.value,
    });
    inputRef.current.value = "";
  }

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} />
      </form>
      <button onClick={() => dispatch({ type: "CLEAR" })}>Clear</button>
      <ul>
        {items.map((item, index) => (
          <li key={item.id}>
            {item.name}{" "}
            <button onClick={() => dispatch({ type: "REMOVE", index })}>
              x
            </button>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default ShoppingList;
