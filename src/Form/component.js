import React from "react";
import useForm from "./useForm";

const formInitialState = {
  email: "",
  password: "",
};

function Form() {
  const { values, handleSubmit, handleChange } = useForm(
    formInitialState,
    loginCallBack
  );

  function loginCallBack() {
    console.log(values);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email address</label>
        <div>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            autoComplete="username email"
          />
        </div>
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <div>
          <input
            id="password"
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            autoComplete="current-password"
          />
        </div>
      </div>

      <button>Login</button>
    </form>
  );
}

export default Form;
