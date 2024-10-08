import React, { useState, useEffect } from "react";
import { instance as axios } from "../../axios/configuration";
import { useNavigate } from "react-router-dom";
import { Emp_Data } from "../../constant/constant";
import { CiSearch } from "react-icons/ci";
import { IoFilterOutline } from "react-icons/io5";
import styles from "./Dashboard.module.css";

function Dashboard() {
  const [data, setData] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(Emp_Data, {})
      .then((res) => {
        setData(res);
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.containerTitle}>
        <h2>admin dashboard</h2>
      </div>
      <hr style={{ margin: "0.5rem" }} />
      <div className={styles.innerDashboardContainer}>
        <div className={styles.navSection}>
          <div className={styles.searchBarContainer}>
            <div className={styles.innerSearchContainer}>
              <CiSearch size={20} />
              <input type="text" placeholder="Search" />
            </div>
            {/* <div className={styles.searchBtn}>
              <button>submit</button>
            </div> */}
          </div>
          <div className={styles.featureBtnSection}>
            <div className={styles.filterBtnSection}>
              <button id={styles.filterBtn}>filter</button>
              <div className={styles.filterIcon}>
                <IoFilterOutline />
              </div>
            </div>
            <div>
              <button id={styles.addBtn} onClick={() => navigate("/addEmp")}>
                add emp
              </button>
            </div>
            <div>
              <button id={styles.removeBtn}>remove emp</button>
            </div>
          </div>
        </div>
        <div className={styles.dataSection}>
          {!data ? (
            <h3>No data</h3>
          ) : (
            <table>
              <thead style={{ backgroundColor: "#c0dbdd63" }}>
                <tr>
                  <th>id</th>
                  <th>img</th>
                  <th>name</th>
                  <th>branch</th>
                  <th>email</th>
                  <th>designation</th>
                </tr>
              </thead>
              <tbody style={{ backgroundColor: "#aeaeae63", padding: "1rem" }}>
                <tr>
                  <td>1</td>
                  <td>nayan avatar</td>
                  <td>nayan</td>
                  <td>cse</td>
                  <td>nayan123@gmail.com</td>
                  <td>student</td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
