import React, { useReducer } from 'react';

import { SampleContextStore, initialState, reducer } from '../Stores/SampleContextStore';

import UserList from '../UserList';
import AddGenderToUser from '../AddGenderToUser';
import AddAgeToUser from '../AddAgeToUser';
import RenderDetails from '../RenderDetails';

export default function App() {
  const [user, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="app">
      <h1>Lift up / pass down state</h1>

      <SampleContextStore.Provider value={{ user, dispatch }}>
        <UserList />
        {user.username && <AddGenderToUser />}
        {user.gender && <AddAgeToUser />}
        {user.age && <RenderDetails />}
      </SampleContextStore.Provider>
    </div>
  );
}
