import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const UserForm = props => {
  const { touched, errors } = props;

  return (
    <Form>
      <label htmlFor="name">Name:</label>
      <Field name="name" placeholder="Your Name here" />
      {touched.name && errors.name ? (
        <span className="error">{errors.name}</span>
      ) : null}
      <br></br>

      <label htmlFor="password">Password:</label>
      <Field name="password" type="password" placeholder="Your Password here" />
      {touched.password && errors.password ? (
        <span className="error">{errors.password}</span>
      ) : null}
      <br></br>

      <label htmlFor="email">Email:</label>
      <Field name="email" placeholder="Your Email here" />
      {touched.email && errors.email ? (
        <span className="error">{errors.email}</span>
      ) : null}
      <br></br>

      <label htmlFor="tos">Do you agree to our TOS?</label>
      <Field name="tos" type="checkbox" />
      {touched.tos && errors.tos ? (
        <span className="error">{errors.tos}</span>
      ) : null}
      <br></br>

      <label htmlFor="title">Title:</label>
      <select name="title">
        <option value="None Selected">Select Job Title</option>
        <option value="JR Web Developer">Junior Web Developer</option>
        <option value="SR Web Developer">Senior Web Developer</option>
        <option value="Team Lead">Lambda Team Lead</option>
        <option value="Data Scientist">Data Scientist</option>
      </select>
      <br></br>

      <button type="submit" disabled={!props.isValid}>
        Submit
      </button>
    </Form>
  );
};

export default withFormik({
  mapPropsToValues: props => {
    return {
      name: props.name || "",
      password: props.password || "",
      email: props.email || "",
      tos: props.tos || false,
      title: props.title || ""
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string()
      .required("A name is required")
      .min(2, "Must have a valid name"),
    password: Yup.string()
      .required("A password is required")
      .min(5, "minimum of 5 characters is required"),
    email: Yup.string()
      .email("A valid email is required")
      .required("You must enter an email"),
    tos: Yup.boolean().oneOf([true], "Agree to TOS")
  }),

  handleSubmit: (values, formikBag) => {
    formikBag.props.addUser({
      ...values,
      id: Date.now()
    });
    formikBag.setStatus("Submitting!");
    formikBag.resetForm();
  }
})(UserForm);
