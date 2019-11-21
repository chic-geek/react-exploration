import React, { useContext } from 'react';

import { SampleContextStore } from '../Stores/SampleContextStore';

export default function RenderDetails() {
  const { user } = useContext(SampleContextStore);

  return (
    <div>
      <hr />
      <span>Hello {user.username}. You are a {user.gender} and are {user.age} years old.</span>
    </div>
  );
}
