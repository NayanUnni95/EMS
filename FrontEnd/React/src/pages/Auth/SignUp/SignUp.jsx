import React, { useState, useContext } from "react";
import { ThreeDots } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import { instance as axios } from "../../../axios/configuration";
import { Employee_SignUp } from "../../../constant/constant";
import { FaUser } from "react-icons/fa6";
import { IoMdLock } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "../../../context/LoginCache";
import styles from "../Login/Login.module.css";

function SignUp() {
  const [isLoading, seIsLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { isLogged, setIsLogged, isAdmin, setIsAdmin, userData, setUserData } =
    useContext(DataContext);

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
    const payload = {
      method: "POST",
      url: Employee_SignUp,
      userCredential: {
        username,
        password,
      },
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await axios.post(Employee_SignUp, payload);
    if (response.data.message) {
      if (response.data.message === "Invalid credentials") {
        info(response.data.message);
      } else {
        warning(response.data.message);
      }
    } else {
      success("Sign up Success");
      // console.log(response.data);
      setUserData(response.data);
      setIsLogged(true);
      setIsAdmin(false);
      navigate("/");
    }
  };

  return (
    <div className={styles.mainSignInSection}>
      <div className={styles.innerSection}>
        <div className={styles.pageTitle}>
          <h1>welcome</h1>
          <h4>Sign up new account</h4>
        </div>
        {/* <div className={styles.userTypeSection}>
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
        </div> */}
        <div className={styles.inputOuterSection}>
          <div className={styles.inputInnerSection}>
            <form>
              {/* <div className={styles.passwordSection}>
                <div className={styles.icon}>
                  <FaUser size={20} />
                </div>
                <div className={styles.usernameInnerSection}>
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              </div> */}
              <div className={styles.usernameSection}>
                <div className={styles.icon}>
                  <FaUser size={20} />
                </div>
                <div className={styles.usernameInnerSection}>
                  <input
                    type="text"
                    placeholder="User Name"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className={styles.usernameSection}>
                <div className={styles.icon}>
                  <IoMdLock size={20} />
                </div>
                <div className={styles.usernameInnerSection}>
                  <input
                    type="password"
                    placeholder="Password"
                    name="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              {/* <div className={styles.passwordSection}>
                <div className={styles.icon}>
                  <FaUser size={20} />
                </div>
                <div className={styles.usernameInnerSection}>
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div> */}
              {/* <div className={styles.passwordSection}>
                <div className={styles.icon}>
                  <IoMdLock size={20} />
                </div>
                <div className={styles.passwordInnerSection}>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    name="cPass"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
              </div> */}
              {/* <div className={styles.usernameSection}>
                <div className={styles.icon}>
                  <IoMdLock size={20} />
                </div>
                <div className={styles.passwordInnerSection}>
                  <input
                    type="number"
                    placeholder="Phone No"
                    name="phoneNo"
                    value={phoneNo}
                    onChange={(e) => setPhoneNo(e.target.value)}
                    required
                  />
                </div>
              </div> */}
              {/* <div className={styles.passwordSection}>
                <div className={styles.icon}>
                  <IoMdLock size={20} />
                </div>
                <div className={styles.passwordInnerSection}>
                  <input
                    type="text"
                    placeholder="Designation"
                    name="designation"
                    value={designation}
                    onChange={(e) => setDesignation(e.target.value)}
                    required
                  />
                </div>
              </div> */}
              <div className={styles.submitBtn}>
                <button
                  disabled={isLoading}
                  onClick={(e) => {
                    e.preventDefault();
                    login(
                      // name,
                      username,
                      password,
                      // confirmPassword
                      // email,
                      // phoneNo,
                      // designation
                    );
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "white",
                  }}
                >
                  {isLoading ? (
                    <ThreeDots
                      visible={true}
                      height="30"
                      width="30"
                      color="black"
                    />
                  ) : (
                    <span>SIGN UP</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
        <ToastContainer />
        <div className={styles.bottomSection}>
          <span>Already have account? </span>
          <Link to={"/auth/login"}>
            <span>Login</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
