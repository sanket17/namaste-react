import React from "react";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8) {
    errors.password = "Password lenght should be more than 8 characters";
  }

  return errors;
};

export default function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(JSON.stringify(values));
    },
  });

  return (
    <div id="login-container" className="border-css">
      <h1>Login</h1>
      <form id="login-form" onSubmit={formik.handleSubmit}>
        <div className="form-group-div">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email ? <div>{formik.errors.email}</div> : null}
        </div>
        <div className="form-group-div">
          <label htmlFor="passowrd">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.errors.password ? <div>{formik.errors.password}</div> : null}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
