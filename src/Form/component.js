import React from "react";
import useForm from "./useForm";
import validate from "./formValidationRules";

const formInitialState = {
  email: "",
  password: "",
};

function Form() {
  const { values, handleSubmit, handleChange, errors } = useForm(
    formInitialState,
    loginCallBack,
    validate
  );

  function loginCallBack() {
    console.log(values);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <label className="label" htmlFor="email">
          Email address
        </label>
        <div>
          <input
            className={`input ${errors.email && "error"}`}
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            autoComplete="username email"
          />
          {errors.email && <small className="error">{errors.email}</small>}
        </div>
      </div>

      <div className="input-group">
        <label className="label" htmlFor="password">
          Password
        </label>
        <div>
          <input
            className={`input ${errors.password && "error"}`}
            id="password"
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            autoComplete="current-password"
          />
          {errors.password && (
            <small className="error">{errors.password}</small>
          )}
        </div>
      </div>

      <button className="button">Login</button>
    </form>
  );
}

export default Form;
