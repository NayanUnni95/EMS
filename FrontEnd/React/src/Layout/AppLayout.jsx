import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar/SideBar";
import styles from "./AppLayout.module.css";
import SideBar2 from "../components/SideBar/SideBar2";

function AppLayout() {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        {/* <SideBar /> */}
        <SideBar2 />
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
