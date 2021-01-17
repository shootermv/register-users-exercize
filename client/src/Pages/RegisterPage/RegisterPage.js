import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";

import TextInput from "../../shared/TextInput";

import { useDispatch, useSelector } from "react-redux";
import { register, reset } from "../../store/actions";
import {
  registerSuccessSelector,
  registerErrorSelector,
  registerLoadingSelector,
} from "../../store/selectors";

import "./RegisterPage.css";

const RegisterPage = () => {
  const dispatch = useDispatch();

  const success = useSelector(registerSuccessSelector);
  const error = useSelector(registerErrorSelector);
  const loading = useSelector(registerLoadingSelector);

  const history = useHistory();
  if (success) {
    setTimeout(() => history.push("/users"), 1);
    dispatch(reset());
  }
  return (
    <section>
      {loading && <div className="loader">Loading...</div>}
      <Formik
        initialValues={{
          name: "",
          email: "",
          age: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(3, "Must be at least 3 characters")
            .max(15, "Must be 15 characters or less")
            .required("Required"),

          email: Yup.string()
            .email("Invalid email address`")
            .required("Required"),
          age: Yup.number().required("Required"),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          dispatch(register(values));
          setSubmitting(false);
        }}
      >
        <Form>
          <TextInput
            label="Name"
            name="name"
            type="text"
            placeholder="your name"
          />
          <TextInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="your email"
          />
          <TextInput label="Age" name="age" type="text" placeholder="Age" />
          <button type="submit" >Add User</button>
        </Form>
      </Formik>
      {error && <div className="alert error flex-row">{error}</div>}
    </section>
  );
};

export default RegisterPage;
