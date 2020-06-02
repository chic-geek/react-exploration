import React, { useReducer, useContext, useEffect, useRef } from 'react';

function todosReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return [
        ...state,
        { id: Date.now(), text: '', completed: false }
      ];

    case 'DELETE':
      return state.filter((item) => item.id !== action.payload);

    case 'COMPLETED':
      return state.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      });

    case 'UPDATE_TEXT':
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            text: action.payload.value,
          };
        }
        return item;
      });

    case 'STARTUP':
      return action.payload;

    default:
      return state;
  }
}

const Context = React.createContext();

function useEffectOnce(callback) {
  const didRun = useRef(false);

  useEffect(() => {
    if (!didRun.current) {
      callback();
      didRun.current = true;
    }
  });
}

function App() {
  const [state, dispatch] = useReducer(todosReducer, []);

  // to run this code once, either use...
  // useEffect(() => {
  //   const raw = localStorage.getItem('data');
  //   dispatch({ type: 'STARTUP', payload: JSON.parse(raw) });
  // }, []);

  // OR we can do something slightly different by creating a custom hook and making use of refs.
  useEffectOnce(() => {
    const raw = localStorage.getItem('data');
    dispatch({ type: 'STARTUP', payload: JSON.parse(raw) });
  })


  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(state));
  }, [state])

  return (
    <Context.Provider value={dispatch}>
      <div style={{ maxWidth: '28rem', marginLeft: 'auto', marginRight: 'auto' }}>
        <h1>Hello World!</h1>
        <button onClick={() => dispatch({ type: 'ADD' })}>New Todo</button>
        <TodosList items={state} />
      </div>
    </Context.Provider>
  );
}

function TodosList({ items }) {
  return items.map((item) => <TodoItem key={item.id} {...item} />);
}

function TodoItem({ id, completed, text }) {
  const dispatch = useContext(Context);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: 'UPDATE_TEXT',
      payload: { id, name, value },
    })
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '1rem',
      }}
    >
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch({ type: 'COMPLETED', payload: id })}
      />

      <input
        type="text"
        defaultValue={text}
        style={{
          width: '100%',
          marginLeft: '0.25rem',
          marginRight: '0.5rem'
        }}
        name="text"
        onChange={handleInputChange}
      />

      <button onClick={() => dispatch({ type: 'DELETE', payload: id })}>
        Delete
      </button>
    </div>
  );
}

export default App;
