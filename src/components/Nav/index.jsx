import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import style from "./index.module.scss";

export default function Nav() {
  const history = useHistory();

  console.log("locate", history);
  return (
    <div
      className={
        history.location.pathname === "/"
          ? style["__container"]
          : style["__container--others"]
      }
    >
      <div>
        <NavLink to="/">
          <img src={""} alt="budgety-logo" />
        </NavLink>
      </div>
      <ul>
        <NavLink to="/">
          <li>Services</li>
        </NavLink>
        <NavLink to="/">
          <li>Contact</li>
        </NavLink>
        <NavLink to="/">
          <li>About</li>
        </NavLink>
        <NavLink to="/">
          <li>Help</li>
        </NavLink>
      </ul>

      <ul>
        <NavLink to="/">
          <li>Login</li>
        </NavLink>
        <NavLink to="/signup">
          <li>Sign up</li>
        </NavLink>
      </ul>
    </div>
  );
}
