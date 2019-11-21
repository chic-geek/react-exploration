import React, { useContext } from 'react';

import { SampleContextStore, RESET_APP } from '../Stores/SampleContextStore';

export default function RenderDetails() {
  const { user, dispatch } = useContext(SampleContextStore);

  function resetApp() {
    dispatch({ type: RESET_APP });
  }

  return (
    <div>
      <hr />
      <span>Hello {user.username}. You are a {user.gender} and are {user.age} years old.</span>
      <hr />
      <button type="submit" onClick={resetApp}>Reset</button>
    </div>
  );
}
