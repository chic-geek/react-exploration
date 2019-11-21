import React from 'react';

// create some context for all components
export const SampleContextStore = React.createContext(null);

// set some initial state to start out with
export const initialState = {
  username: null,
  gender: null,
  age: null,
};

// set up a few actions to pass to the reducer
export const UPDATE_USER = "UPDATE_USER";
export const SET_GENDER = "SET_GENDER";
export const SET_AGE = "SET_AGE";

// build a reducer to handle the state mutations
export function reducer(state, action) {
  switch (action.type) {

    case UPDATE_USER:
      return {
        ...state,
        username: action.username,
      }

    case SET_GENDER:
      return {
        ...state,
        gender: action.gender,
      }

    case SET_AGE:
      return {
        ...state,
        age: action.age,
      }

    default:
      return initialState
  }
}
