import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PiSidebarSimple } from "react-icons/pi";
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import {
  AiOutlineExclamationCircle,
  AiOutlineLogin,
  AiOutlineLogout,
} from "react-icons/ai";
import { MdOutlineSpaceDashboard, MdAdminPanelSettings } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import styles from "./SideBar.module.css";

function SideBar() {
  const [isSidebarSelect, setIsSidebarSelect] = useState(false);
  return (
    <div
      className={`${styles.sidebarMainLayout} ${
        isSidebarSelect && styles.collapsed
      }`}
    >
      <header>
        <div className={styles.appDetails}>
          <div className={styles.appLogo}>
            <img src="" alt="ems logo" />
          </div>
          <div className={styles.appTitle}>
            <h1>EMS</h1>
          </div>
        </div>
        <div className={styles.expandBtn}>
          <button>
            <PiSidebarSimple size={25} />
          </button>
        </div>
      </header>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <IoHomeOutline size={25} />
              <span>home</span>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <AiOutlineExclamationCircle size={25} />
              <span>about</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard">
              <MdOutlineSpaceDashboard size={25} />
              <span>dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/auth/signIn">
              <AiOutlineLogin size={25} />
              <span>login</span>
              {/* <MdAdminPanelSettings />
              <span>Admin</span> */}
              {/* <CiUser />
              <span>Employee</span> */}
            </Link>
          </li>
          {/* <li>
            <ul>
              <li>
                <Link>
                  <span>attendance</span>
                </Link>
              </li>
              <li>
                <Link>
                  <span>salary</span>
                </Link>
              </li>
              <li>
                <Link>
                  <span>experience</span>
                </Link>
              </li>
            </ul>
          </li> */}
          <li>
            <Link to="/setting">
              <IoSettingsOutline size={25} />
              <span>setting</span>
            </Link>
          </li>
        </ul>
      </nav>
      <footer>
        <ul>
          <li>
            <Link to="/auth/signIn">
              <button>
                <AiOutlineLogout size={25} />
                <span>logout</span>
              </button>
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default SideBar;
