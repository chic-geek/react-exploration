import React, { useReducer } from 'react';

function Count() {
  const initialValue = 0;
  const [count, dispatch] = useReducer((state, action) => {
    switch (action) {
      case 'INCREASE':
        return state + 1;
      case 'DECREASE':
        return state > 0 ? (state - 1) : (state);
      case 'RESET':
        return initialValue;
      default:
        return state;
    }
  }, initialValue);

  return (
    <React.Fragment>
      {count}
      <div>
        <button onClick={() => dispatch('INCREASE')}>Increment</button>
        <button onClick={() => dispatch('DECREASE')}>Decrement</button>
        <button onClick={() => dispatch('RESET')}>Reset</button>
      </div>
    </React.Fragment>
  );
}

export default Count;
