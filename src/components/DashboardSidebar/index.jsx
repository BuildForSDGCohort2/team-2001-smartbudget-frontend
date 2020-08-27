import React from "react";
import style from "./index.module.scss";
import { NavLink } from "react-router-dom";

export default function DashboardSideBar() {
  return (
    <div className={style["sidebar"]}>
      <ul>
        <NavLink activeClassName={style["active"]} to="/Dashboard">
          <li>Dashboard</li>
        </NavLink>

        <li>Budget</li>
        <li>Calender</li>
        <li>Task</li>
        <li>Calculator</li>
      </ul>
    </div>
  );
}
