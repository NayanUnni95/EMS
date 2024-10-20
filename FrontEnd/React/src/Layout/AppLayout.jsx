import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./AppLayout.module.css";
import SideBar from "../components/SideBar/SideBar";

function AppLayout() {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
