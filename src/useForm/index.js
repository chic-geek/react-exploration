import { useState, useEffect, useCallback } from 'react';

function useForm(stateSchema, validationSchema = {}, callback) {
  const [state, setState] = useState(stateSchema);
  const [disable, setDisable] = useState(true);
  const [isDirty, setIsDirty] = useState(false);

  // disable button in initial render.
  useEffect(() => {
    setDisable(true);
  }, []);

  // for every changed in our state this will be fired
  // to be able to disable the button
  useEffect(() => {
    if (isDirty) setDisable(validateState());
  }, [state, isDirty]);

  // used to disable submit button if there's an error in state
  // or the required field in state has no value wrapped in useCallback 
  // to cache the function to avoid memory leak in every re-render in component
  const validateState = useCallback(() => {
    const hasErrorInState = Object.keys(validationSchema).some(key => {
      const isInputFieldRequired = validationSchema[key].required;
      const stateValue = state[key].value; // state value
      const stateError = state[key].error; // state error

      return (isInputFieldRequired && !stateValue) || stateError;
    });

    return hasErrorInState;
  }, [state, validationSchema]);

  // used to handle every change in every input
  const handleOnChange = useCallback((event) => {
    setIsDirty(true);

    const name = event.target.name;
    const value = event.target.value;

    let error = '';
    if (validationSchema[name].required) {
      if (!value) error = 'This is required field.';
    }

    if (
      validationSchema[name].validator !== null &&
      typeof validationSchema[name].validator === 'object'
    ) {
      if (
        value &&
        !validationSchema[name].validator.regEx.test(value)
      ) error = validationSchema[name].validator.error;
    }

    setState(prevState => ({
      ...prevState,
      [name]: { value, error },
    }));
  }, [validationSchema]);

  const handleOnSubmit = useCallback((event) => {
    event.preventDefault();

    // make sure that validateState returns false
    // before calling the submit callback function
    if (!validateState()) {
      callback(state);
    }
  }, [state]);

  return {
    state,
    disable,
    handleOnChange,
    handleOnSubmit,
  };
}

export default useForm;
