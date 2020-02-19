import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

import axiosWithAuth from "../authentication/axiosWithAuth";

const Login = () => {
  return (
    <main className="login">
      <p style={{ textAlign: "center" }}>
        Please enter your username and password to login
      </p>
      <Form>
        <Field type="text" name="username" placeholder="username" />
        <Field type="password" name="password" placeholder="password" />
        <button
          type="submit"
          className="btn u-margin-top-medium u-margin-bottom-medium"
        >
          Submit
        </button>
      </Form>
    </main>
  );
};

const FormikLoginForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },
  //==================Validation Schema==============
  validationSchema: Yup.object().shape({
    username: Yup.string().required("username is required"),
    password: Yup.string().required("password is required")
  }),
  //==========End of Validation Schema=======

  handleSubmit(values, { resetForm, props }) {
    axiosWithAuth()
      .post("/auth/login", {
        username: values.username,
        password: values.password
      })
      .then(res => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("department", res.data.department);

        if (res.data.roles === "admin") {
          props.history.push("/admin");
        } else {
          props.history.push("/member");
        }
      })
      .catch(err => console.log(err.message));

    resetForm();
  }
})(Login);

export default FormikLoginForm;
