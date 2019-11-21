import React, { useContext } from 'react';

import { SampleContextStore, SET_AGE } from '../Stores/SampleContextStore';

export default function AddAgeToUser() {
  const { user, dispatch } = useContext(SampleContextStore);

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
