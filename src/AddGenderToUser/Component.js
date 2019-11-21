import React, { useContext } from 'react';

import { SampleContextStore, SET_GENDER } from '../Stores/SampleContextStore';

export default function AddGenderToUser() {
  const { user, dispatch } = useContext(SampleContextStore);

  function handleClick() {
    dispatch({
      type: SET_GENDER,
      gender: "Male",
    })
  }

  return (
    <div>
      <h2>Add gender to {user.username}</h2>
      <button type="submit" onClick={handleClick}>Add age</button>
    </div>
  );
}
