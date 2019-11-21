import React, { useContext } from 'react';

import { SampleContextStore, UPDATE_USER } from '../Stores/SampleContextStore';

export default function UserList() {
  const { dispatch } = useContext(SampleContextStore);

  function handleClick() {
    dispatch({
      type: UPDATE_USER,
      username: "cbrett84",
    })
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
