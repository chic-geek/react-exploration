import React, { useReducer, useContext } from 'react';

const MyContext = React.createContext(null);

const UPDATE_USER = "UPDATE_USER";
const SET_GENDER = "SET_GENDER";
const SET_AGE = "SET_AGE";

const initialState = {
  username: null,
  gender: null,
  age: null,
};

function reducer(state, action) {
  switch (action.type) {
    case UPDATE_USER:
      return {
        username: action.username,
        gender: null,
        age: null,
      }

    case SET_GENDER:
      return {
        username: state.username,
        gender: action.gender,
        age: null,
      }

    case SET_AGE:
      return {
        username: state.username,
        gender: state.gender,
        age: action.age,
      }

    default:
      return initialState
  }
}

function UserList() {
  const { dispatch } = useContext(MyContext);

  function handleClick() {
    dispatch({
      type: UPDATE_USER,
      username: "cbrett84",
    });
  }

  return (
    <ul>
      <li>
        <span>Person A</span>
        <button type="button" onClick={handleClick}>
          Edit
        </button>
      </li>

      <li>
        <span>Person B</span>
        <button type="button">Edit</button>
      </li>
    </ul>
  );
}

function AddGenderToUser() {
  const { user, dispatch } = useContext(MyContext);

  function handleClick() {
    dispatch({
      type: SET_GENDER,
      gender: "Male",
    });
  }

  return (
    <div>
      <h2>Add gender to {user.username}</h2>
      <button type="submit" onClick={handleClick}>Add age</button>
    </div>
  );
}

function AddAgeToUser() {
  const { user, dispatch } = useContext(MyContext);

  function handleClick() {
    dispatch({
      type: SET_AGE,
      age: 35,
    });
  }

  return (
    <div>
      <h2>Add age to {user.username}</h2>
      <button type="submit" onClick={handleClick}>Submit</button>
    </div>
  );
}

function RenderDetails() {
  const { user } = useContext(MyContext);

  return (
    <div>
      <hr />
      <span>Hello {user.username}. You are a {user.gender} and are {user.age} years old.</span>
    </div>
  );
}

function App() {
  const [user, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="app">
      <h1>Lift up / pass down state</h1>

      <MyContext.Provider value={{ user, dispatch }}>
        <UserList />
        {user.username && <AddGenderToUser />}
        {user.gender && <AddAgeToUser />}
        {user.age && <RenderDetails />}
      </MyContext.Provider>
    </div>
  );
}

export default App;
