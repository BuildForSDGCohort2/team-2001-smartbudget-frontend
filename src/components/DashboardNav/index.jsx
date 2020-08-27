import React from "react";
import { NavLink } from "react-router-dom";
import style from "./index.module.scss";

export default function DashboardNav() {

  return (
    <div className={style["__container"]}>
      <ul>
        <NavLink to="/">
          <li>Budgety</li>
        </NavLink>
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
          <li>Notification</li>
        </NavLink>
        <NavLink to="/signup">
          <li>Jane Doe</li>
        </NavLink>
      </ul>
    </div>
  );
}
