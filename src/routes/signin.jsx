import React from "react";
import { Formik, Field, Form } from "formik";
import Nav from "../components/Nav";
import style from "../assets/styles/signin.module.scss";
import Button from "../components/Button";
import { NavLink } from "react-router-dom";

export default function SignIn() {
  return (
    <div className={style["form__page"]}>
      <Nav />
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form className={style["form--container"]}>
          <header>
            <h1 style={{ textAlign: "center" }}>Sign Up</h1>
          </header>
          <label htmlFor="firstName">Username</label>
          <Field id="firstName" name="firstName" placeholder="Jane" />

          <label htmlFor="email">Email</label>
          <Field id="lastName" name="lastName" placeholder="Doe" />

          <label htmlFor="email">Password</label>
          <Field
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
          />
          <NavLink to="/dashboard">
            <Button type="filled">Submit</Button>
          </NavLink>
        </Form>
      </Formik>
    </div>
  );
}
