import React from "react";
import { Formik, Field, Form } from "formik";
import Nav from "../components/Nav";
import style from "../assets/styles/signin.module.scss";
import Button from "../components/Button";
import { NavLink } from "react-router-dom";
import GoogleLogin from "react-google-login";
// import FacebookLogin from "react-facebook-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import Google from "../assets/icons/Google.svg";
import Facebook from "../assets/icons/Facebook.svg";

import Signin from '../assets/icons/signin.svg'

export default function SignIn() {
  const responseGoogle = (response) => {
    console.log(response);
  };
  const responseFacebook = (response) => {
    console.log(response);
  };

  return (
    <div className={style["form__page"]}>
      <Nav />
      <div className={style["form--container"]}>
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
          <Form>
            <header className={style["form__header"]}>
              <h1 style={{ textAlign: "center" }}>Sign Up <img src={Signin} alt=""/> </h1>
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
            <footer>
              <h4 style={{ textAlign: "center" }}>Already have an account?</h4>
              <NavLink to="/Dashboard">
                {" "}
                <p>Login</p>
              </NavLink>
            </footer>
          </Form>
        </Formik>
      </div>

      <GoogleLogin
        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
        render={(renderProps) => (
          <div
            onClick={renderProps.onClick}
            className={style["social__media--login"]}
          >
            <img
              src={Google}
              // disabled={renderProps.disabled}
              alt="sign-in-with-google"
            />
            <span> Continue with Google</span>
          </div>
        )}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />

      <FacebookLogin
        appId="1088597931155576"
        autoLoad
        callback={responseFacebook}
        render={(renderProps) => (
          <div
            onClick={renderProps.onClick}
            className={style["social__media--login"]}
          >
            <img
              src={Facebook}
              // disabled={renderProps.disabled}
              alt="sign-in-with-google"
            />
            <span> Continue with Facebook</span>
          </div>
        )}
      />
      {/* <p className={style["social__media--login"]}>Continue with Facebook</p> */}
    </div>
  );
}
