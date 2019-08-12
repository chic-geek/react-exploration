import { useState } from "react";

const useForm = (initialState, callBack) => {
  const [values, setValues] = useState(initialState);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    callBack();
  };

  const handleChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
  };
};

export default useForm;
