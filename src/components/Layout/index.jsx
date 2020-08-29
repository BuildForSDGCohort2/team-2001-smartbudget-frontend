import React from "react";
import DashboardNav from "../DashboardNav";
import DashboardSideBar from "../DashboardSidebar";
import style from "./index.module.scss"


export default function Layout({ children }) {
  return (
    <div>
      <DashboardNav />
      <DashboardSideBar/>
      <main className={style["main"]}>{children}</main>
    </div>
  );
}
