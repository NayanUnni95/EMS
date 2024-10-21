import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { instance as axios } from "../../../axios/configuration";
import { ThreeDots } from "react-loader-spinner";
import { Admin_Login, Employee_Login } from "../../../constant/constant";
import { ToastContainer, toast } from "react-toastify";
import { FaUser } from "react-icons/fa6";
import { IoMdLock } from "react-icons/io";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";
import "react-toastify/dist/ReactToastify.css";

function SignIn() {
  const [isAdmin, setIsAdmin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const toastObj = {
    position: "bottom-center",
    autoClose: 2000,
    closeOnClick: true,
    pauseOnHover: false,
    hideProgressBar: true,
    draggable: false,
  };
  const success = (msg) => toast.success(msg, toastObj);
  const fail = (msg) => toast.error(msg, toastObj);
  const info = (msg) => toast.info(msg, toastObj);
  const warning = (msg) => toast.warn(msg, toastObj);

  const login = async (username, password) => {
    const url = `${isAdmin ? Admin_Login : Employee_Login}`;

    const payload = {
      method: "POST",
      url,
      userCredential: {
        username,
        password,
      },
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axios.post(url, payload, {
        withCredentials: true,
      });
      if (response.data.message) {
        if (response.data.message === "Invalid credentials") {
          info(response.data.message);
        } else {
          warning(response.data.message);
        }
      } else {
        success("Login Success");
        navigate("/");
      }
    } catch (error) {
      fail("Something went wrong...");
    }
  };

  return (
    <div className={styles.mainSignInSection}>
      <div className={styles.innerSection}>
        <div className={styles.pageTitle}>
          <h1>welcome back</h1>
          <h4>login to your account ({isAdmin ? "Admin" : "Employee"})</h4>
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
            <form>
              <div className={styles.usernameSection}>
                <div className={styles.icon}>
                  <FaUser size={20} />
                </div>
                <div className={styles.usernameInnerSection}>
                  <input
                    type="text"
                    placeholder="User Name"
                    name="uname"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div
                style={{
                  display: "none",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "red",
                  margin: "1rem",
                  fontWeight: "500",
                  fontSize: "larger",
                  fontFamily: "monospace",
                }}
              >
                <span>Invalid Credentials...</span>
              </div>
              <div className={styles.submitBtn}>
                <button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "white",
                  }}
                  disabled={isLoading}
                  onClick={(e) => {
                    e.preventDefault();
                    login(username, password);
                    // success();
                    // fail();
                  }}
                >
                  {isLoading ? (
                    <ThreeDots
                      visible={true}
                      width={30}
                      height={30}
                      color={"black"}
                    />
                  ) : (
                    <span>LOGIN</span>
                  )}
                </button>
              </div>
            </form>
            <ToastContainer />
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
