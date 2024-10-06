import React, { useState } from "react";
import { FaUser } from "react-icons/fa6";
import { IoMdLock } from "react-icons/io";
import { Link } from "react-router-dom";
import styles from "./SignIn.module.css";

function SignIn() {
  const [isAdmin, setIsAdmin] = useState(false);
  return (
    <div className={styles.mainSignInSection}>
      <div className={styles.innerSection}>
        <div className={styles.pageTitle}>
          <h1>welcome back</h1>
          <h4>login to your account</h4>
        </div>
        <div className={styles.userTypeSection}>
          <div
            className={styles.adminBtnSection}
            onClick={() => setIsAdmin(!isAdmin)}
          >
            {isAdmin ? (
              <button
                style={{ backgroundColor: "var(--user-btn-selector-bg)" }}
              >
                admin
              </button>
            ) : (
              <button>admin</button>
            )}
          </div>
          <div
            className={styles.empBtnSection}
            onClick={() => setIsAdmin(!isAdmin)}
          >
            {!isAdmin ? (
              <button
                style={{ backgroundColor: "var(--user-btn-selector-bg)" }}
              >
                employee
              </button>
            ) : (
              <button>employee</button>
            )}
          </div>
        </div>
        <div className={styles.inputOuterSection}>
          <div className={styles.inputInnerSection}>
            <form action="post">
              <div className={styles.usernameSection}>
                <div className={styles.icon}>
                  <FaUser size={20} />
                </div>
                <div className={styles.usernameInnerSection}>
                  <input
                    type="text"
                    placeholder="User Name"
                    name="uname"
                    required
                  />
                </div>
              </div>
              <div className={styles.passwordSection}>
                <div className={styles.icon}>
                  <IoMdLock size={20} />
                </div>
                <div className={styles.passwordInnerSection}>
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    required
                  />
                </div>
              </div>
              <div className={styles.submitBtn}>
                <button>login</button>
              </div>
            </form>
          </div>
        </div>
        <div className={styles.bottomSection}>
          <span>Don't have account? </span>
          <Link to={"/auth/signUp"}>
            <span>sign up</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
