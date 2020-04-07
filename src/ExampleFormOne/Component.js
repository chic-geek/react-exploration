import React, { useEffect } from 'react';
import useForm from '../useForm';

export default function ExampleFormOne() {
  // define the state schema
  const stateSchema = {
    fname: { value: 'Chris', error: '' },
    lname: { value: '', error: '' },
    tags: { value: '', error: '' },
  };

  // define the validation schema
  const validationStateSchema = {
    fname: {
      required: true,
      validator: {
        regEx: /^[a-zA-Z]+$/,
        error: 'Invalid firstname format',
      },
    },

    lname: {
      required: true,
      validator: {
        regEx: /^[a-zA-z]+$/,
        error: 'Invalid last name format',
      },
    },

    tags: {
      required: true,
      validator: {
        regEx: /^(,?\w{3,})+$/,
        error: 'Invalid tag format',
      },
    },
  };

  function onSubmitForm(state) {
    alert(JSON.stringify(state, null, 2));
  }

  const {
    state,
    disable,
    handleOnChange,
    handleOnSubmit,
  } = useForm(
    stateSchema,
    validationStateSchema,
    onSubmitForm,
  );

  useEffect(() => {
    console.log(state);
  }, [state]);

  const errorStyle = {
    color: 'red',
    fontSize: '13px',
  };

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <div>
          <label htmlFor="fname">
            Firstname
            <input
              type="text"
              id="fname"
              name="fname"
              value={state.fname.value}
              onChange={handleOnChange}
            />
          </label>

          {state.fname.error && (
            <p style={errorStyle}>{state.fname.error}</p>
          )}
        </div>

        <div>
          <label htmlFor="lname">
            Lastname
            <input
              type="text"
              id="lname"
              name="lname"
              value={state.lname.value}
              onChange={handleOnChange}
            />
          </label>

          {state.lname.error && (
            <p style={errorStyle}>{state.lname.error}</p>
          )}
        </div>

        <div>
          <label htmlFor="tags">
            Tags
            <input
              type="text"
              id="tags"
              name="tags"
              value={state.tags.value}
              onChange={handleOnChange}
            />
          </label>

          {state.tags.error && (
            <p style={errorStyle}>{state.tags.error}</p>
          )}
        </div>

        <input type="submit" name="submit" disable={disable.toString()} />
      </form>
    </>
  );
}
