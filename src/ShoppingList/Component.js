import React, { useReducer, useRef } from 'react';
import { ShoppingListReducer } from "./reducers";

function ShoppingList() {
  const inputRef = useRef();
  const [items, dispatch] = useReducer(ShoppingListReducer, []);

  function handleFormSubmit(e) {
    e.preventDefault();

    dispatch({
      type: "ADD",
      payload: inputRef.current.value,
    });

    inputRef.current.value = '';
  }

  function onRemoveItem(index) {
    dispatch({
      type: "REMOVE",
      index,
    })
  }

  function resetForm() {
    dispatch({
      type: "RESET",
    })
  }

  return (
    <React.Fragment>
      <form onSubmit={handleFormSubmit}>
        <input type="text" ref={inputRef} />
      </form>
      <button onClick={resetForm}>Reset</button>
      <ul>
        {items.map((item, index) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => onRemoveItem(index)}>X</button>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default ShoppingList;
