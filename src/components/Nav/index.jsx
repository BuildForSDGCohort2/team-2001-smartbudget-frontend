import React from "react";
import { NavLink } from "react-router-dom";
import style from "./index.module.scss"



export default function Nav() {
  return (
    <div className={style["__container"]}>
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
        <NavLink to="/">
          <li>Sign up</li>
        </NavLink>
      </ul>
    </div>
  );
}
